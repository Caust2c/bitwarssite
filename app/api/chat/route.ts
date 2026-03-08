import { NextRequest, NextResponse } from "next/server"
import { GoogleGenerativeAI } from "@google/generative-ai"

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_MAX = 10 // Max requests per window
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute window

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimit.get(ip)

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return false
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true
  }

  record.count++
  return false
}

const SYSTEM_PROMPT = `You are a helpful PC build advisor for Tech Deck, a hardware glossary site. Your role is to help users plan PC builds based on their budget and requirements.

Key responsibilities:
- Recommend components (CPU, GPU, RAM, Storage, Motherboard) based on user budget and use case
- Explain trade-offs between different components
- Provide balanced builds for gaming, content creation, workstations, and general use
- Stay current with modern hardware (DDR5, PCIe 5.0, latest CPU/GPU generations)
- Be concise but informative

Always ask clarifying questions if the user's requirements are unclear. Provide specific product recommendations when possible.

IMPORTANT: Respond in plain text only. Do not use any markdown formatting such as **, *, #, -, bullet points, or code blocks. Use simple line breaks and spaces for structure.`

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? 
               request.headers.get("x-real-ip") ?? 
               "unknown"
    
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      )
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      console.error("GEMINI_API_KEY not configured")
      return NextResponse.json(
        { error: "AI service not configured" },
        { status: 500 }
      )
    }

    const { messages } = await request.json()

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 400 }
      )
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ 
      model: "gemini-3-flash-preview",
    })

    // Build the full prompt with system instruction and conversation history
    const conversationText = messages
      .map((msg: { role: string; content: string }) => 
        `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`
      )
      .join("\n\n")

    const fullPrompt = `${SYSTEM_PROMPT}\n\n${conversationText}\n\nAssistant:`

    const result = await model.generateContent(fullPrompt)
    const response = result.response.text()

    return NextResponse.json({ 
      message: { role: "assistant", content: response } 
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Failed to get AI response. Please try again." },
      { status: 500 }
    )
  }
}
