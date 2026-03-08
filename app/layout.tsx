import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { ChatWidget } from "@/components/ui/chat-widget";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "PC Hardware Glossary",
  description:
    "A modern documentation-style glossary for PC hardware terms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceMono.variable} antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="terminal-green"
          enableSystem={false}
          themes={["terminal-green", "hacker-blue", "dark-black", "clean-white"]}
        >
          {children}
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
