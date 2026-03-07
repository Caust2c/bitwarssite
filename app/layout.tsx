import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
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
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="terminal-green"
          enableSystem={false}
          themes={["terminal-green", "hacker-blue", "dark-black", "clean-white"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
