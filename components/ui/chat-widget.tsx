"use client"

import * as React from "react"
import Image from "next/image"
import { Send, X, Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

type Message = {
  role: "user" | "assistant"
  content: string
}

const ROBOT_ICON_SRC = "/assets/1492719128-robot_83633.svg"

export function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([])
  const [input, setInput] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  React.useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: input.trim() }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      if (data.message) {
        setMessages((prev) => [...prev, data.message])
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I couldn't connect to the AI service. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating chat button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed right-5 bottom-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-accent/90 text-background shadow-lg transition-all duration-300 hover:scale-105 hover:bg-accent"
          aria-label="Open chat"
        >
          <Image src={ROBOT_ICON_SRC} alt="Chatbot" width={24} height={24} className="h-6 w-6" />
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed right-5 bottom-5 z-[100] flex h-[500px] w-[380px] flex-col overflow-hidden rounded-xl border border-border/60 bg-background/95 shadow-2xl backdrop-blur-md">
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-border/60 bg-accent/12 px-4 py-3">
            <div className="flex items-center gap-2">
              <Image src={ROBOT_ICON_SRC} alt="Chatbot" width={20} height={20} className="h-5 w-5" />
              <span className="font-semibold tracking-wide">Build Advisor</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 transition-colors hover:bg-accent/20"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="themed-scrollbar flex-1 space-y-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
                <Image src={ROBOT_ICON_SRC} alt="Chatbot" width={40} height={40} className="mb-3 h-10 w-10 opacity-40" />
                <p className="text-sm">Hi! I&apos;m your PC Build Advisor.</p>
                <p className="mt-1 text-xs opacity-70">
                  Tell me your budget and what you want to do, and I&apos;ll help you pick components.
                </p>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={cn(
                  "max-w-[85%] rounded-lg px-3 py-2 text-sm",
                  msg.role === "user"
                    ? "ml-auto bg-accent/20 text-foreground"
                    : "mr-auto border border-border/40 bg-muted/50 text-foreground"
                )}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            ))}

            {isLoading && (
              <div className="mr-auto flex max-w-[85%] items-center gap-2 rounded-lg border border-border/40 bg-muted/50 px-3 py-2 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="shrink-0 border-t border-border/60 bg-accent/8 p-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about PC builds..."
                className="h-10 flex-1 rounded-lg border border-border/60 bg-background/80 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/30"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-background transition-colors hover:bg-accent/80 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
