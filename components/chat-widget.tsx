"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, User, Bot, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { COMPANY_DATA } from "@/lib/ai-data"
import ReactMarkdown from "react-markdown"

type Message = {
    id: string
    role: "user" | "assistant"
    content: string
}

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState<Message[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const scrollRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()

    // Load messages from localStorage
    useEffect(() => {
        const savedMessages = localStorage.getItem("chat_history")
        if (savedMessages) {
            try {
                setMessages(JSON.parse(savedMessages))
            } catch (e) {
                console.error("Failed to parse chat history", e)
            }
        }
    }, [])

    // Save messages to localStorage
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem("chat_history", JSON.stringify(messages))
        }
    }, [messages])

    // Proactive Greeting
    useEffect(() => {
        const hasGreeted = localStorage.getItem("has_greeted")
        if (!hasGreeted && messages.length === 0) {
            const timer = setTimeout(() => {
                const greeting: Message = {
                    id: "greeting",
                    role: "assistant",
                    content: "Hi there! 👋 I can help you find the perfect website package. What are you looking for today?"
                }
                setMessages([greeting])
                setIsOpen(true)
                localStorage.setItem("has_greeted", "true")
            }, 10000) // 10 seconds delay
            return () => clearTimeout(timer)
        }
    }, [messages.length])

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        if (scrollRef.current) {
            const scrollElement = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollElement) {
                scrollElement.scrollTop = scrollElement.scrollHeight;
            }
        }
    }, [messages, isLoading, isOpen])

    const sendMessage = async (content: string) => {
        if (!content.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content
        }

        setMessages(prev => [...prev, userMessage])
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content })),
                    pathname // Pass current page context
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || "Failed to get response")
            }

            const reader = response.body?.getReader()
            const decoder = new TextDecoder()
            let assistantMessage = ""

            if (reader) {
                while (true) {
                    const { done, value } = await reader.read()
                    if (done) break

                    const chunk = decoder.decode(value)
                    assistantMessage += chunk

                    // Update the assistant message in real-time
                    setMessages(prev => {
                        const lastMessage = prev[prev.length - 1]
                        if (lastMessage?.role === "assistant") {
                            return [...prev.slice(0, -1), { ...lastMessage, content: assistantMessage }]
                        } else {
                            return [...prev, { id: Date.now().toString(), role: "assistant", content: assistantMessage }]
                        }
                    })
                }
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred")
        } finally {
            setIsLoading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return

        const message = input
        setInput("")
        await sendMessage(message)
    }

    const handleExampleClick = (example: string) => {
        sendMessage(example)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Window */}
            {isOpen && (
                <Card className="mb-4 w-[400px] h-[600px] flex flex-col shadow-2xl border-2 animate-in slide-in-from-bottom-8 fade-in duration-300 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                                    <Bot className="h-6 w-6" />
                                </div>
                                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-primary"></span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">OpyjoDigital Assistant</h3>
                                <p className="text-xs opacity-90 flex items-center gap-1">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                    Online
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => window.open("https://calendly.com", "_blank")}
                                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                                title="Book a Call"
                            >
                                <Calendar className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 min-h-0 p-4" ref={scrollRef}>
                        <div className="space-y-6 pb-8">
                            {messages.length === 0 && !error && (
                                <div className="text-center text-muted-foreground text-sm py-8">
                                    <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Bot className="h-8 w-8 opacity-50" />
                                    </div>
                                    <p className="font-medium mb-1 text-foreground">Welcome to OpyjoDigital!</p>
                                    <p className="text-xs mb-6 max-w-[200px] mx-auto">I'm here to help you build your dream website. Ask me anything!</p>

                                    <div className="flex flex-col gap-2 px-4">
                                        {COMPANY_DATA.examples.map((example, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleExampleClick(example)}
                                                disabled={isLoading}
                                                className="text-xs bg-muted/50 hover:bg-muted p-3 rounded-xl text-left transition-all border hover:border-primary/30 disabled:opacity-50 hover:shadow-sm"
                                            >
                                                {example}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg mb-4 flex gap-2 items-center">
                                    <X className="h-4 w-4" />
                                    <p>{error}</p>
                                </div>
                            )}

                            {messages.map((message, index) => (
                                <div
                                    key={message.id}
                                    className={cn(
                                        "flex gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300",
                                        message.role === "user" ? "flex-row-reverse" : "flex-row"
                                    )}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {/* Avatar */}
                                    <div className={cn(
                                        "h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1",
                                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted border border-border"
                                    )}>
                                        {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                                    </div>

                                    <div
                                        className={cn(
                                            "rounded-2xl px-4 py-3 max-w-[80%] text-sm leading-relaxed shadow-sm",
                                            message.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                                : "bg-muted text-foreground rounded-tl-none"
                                        )}
                                    >
                                        <ReactMarkdown
                                            components={{
                                                p: ({ node, ...props }: any) => <p className="mb-2 last:mb-0" {...props} />,
                                                ul: ({ node, ...props }: any) => <ul className="list-none mb-2 space-y-1 pl-0" {...props} />,
                                                ol: ({ node, ...props }: any) => <ol className="list-none mb-2 space-y-1 pl-0" {...props} />,
                                                li: ({ node, ...props }: any) => (
                                                    <li className="mb-1" {...props}>
                                                        <span className="inline-block align-top">
                                                            {props.children}
                                                        </span>
                                                    </li>
                                                ),
                                                a: ({ node, href, children, ...props }: any) => (
                                                    <a
                                                        href={href}
                                                        className="text-blue-500 hover:underline cursor-pointer relative z-10 font-medium"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        {...props}
                                                    >
                                                        {children}
                                                    </a>
                                                ),
                                                strong: ({ node, ...props }: any) => <span className="font-bold text-primary" {...props} />,
                                            }}
                                        >
                                            {message.content}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
                                    <div className="h-8 w-8 rounded-full bg-muted border border-border flex items-center justify-center flex-shrink-0 mt-1">
                                        <Bot className="h-4 w-4" />
                                    </div>
                                    <div className="bg-muted rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2">
                                        <span className="text-xs text-muted-foreground mr-1">Opyjo is typing</span>
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <div className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <div className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="p-4 border-t bg-background">
                        <div className="flex gap-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                disabled={isLoading}
                                className="flex-1"
                            />
                            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </form>
                </Card>
            )}

            {/* Floating Button - Only show when closed */}
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    size="icon"
                    className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-all relative group animate-bounce"
                    style={{
                        animation: "bounce 2s infinite, float3d 3s ease-in-out infinite",
                    }}
                >
                    <style jsx>{`
                        @keyframes float3d {
                            0%, 100% {
                                transform: translateY(0px) rotateY(0deg);
                            }
                            25% {
                                transform: translateY(-10px) rotateY(10deg);
                            }
                            50% {
                                transform: translateY(0px) rotateY(0deg);
                            }
                            75% {
                                transform: translateY(-10px) rotateY(-10deg);
                            }
                        }
                    `}</style>
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    <MessageCircle className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform" />
                </Button>
            )}
        </div>
    )
}
