"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send } from "lucide-react"
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

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollContainer) {
                scrollContainer.scrollTop = scrollContainer.scrollHeight;
            }
        }
    }, [messages, isLoading])

    const sendMessage = async (content: string) => {
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
                    messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content }))
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
                <Card className="mb-4 w-[400px] h-[600px] flex flex-col shadow-2xl border-2 animate-in slide-in-from-bottom-8 fade-in duration-300">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
                        <div className="flex items-center gap-2">
                            <MessageCircle className="h-5 w-5" />
                            <div>
                                <h3 className="font-semibold">OpyjoDigital Assistant</h3>
                                <p className="text-xs opacity-90">Ask me anything!</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 h-[calc(100%-130px)] p-4" ref={scrollRef}>
                        <div className="space-y-4 pb-4">
                            {messages.length === 0 && !error && (
                                <div className="text-center text-muted-foreground text-sm py-8">
                                    <MessageCircle className="h-12 w-12 mx-auto mb-3 opacity-50" />
                                    <p className="font-medium mb-1">Welcome to OpyjoDigital!</p>
                                    <p className="text-xs mb-6">Ask me about our services, pricing, or portfolio.</p>

                                    <div className="flex flex-col gap-2 px-4">
                                        {COMPANY_DATA.examples.map((example, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleExampleClick(example)}
                                                disabled={isLoading}
                                                className="text-xs bg-muted/50 hover:bg-muted p-2 rounded-lg text-left transition-colors border hover:border-primary/30 disabled:opacity-50"
                                            >
                                                {example}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg mb-4">
                                    <p className="font-semibold">Error</p>
                                    <p>{error}</p>
                                </div>
                            )}

                            {messages.map((message, index) => (
                                <div
                                    key={message.id}
                                    className={cn(
                                        "flex animate-in fade-in slide-in-from-bottom-4 duration-300",
                                        message.role === "user" ? "justify-end" : "justify-start"
                                    )}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div
                                        className={cn(
                                            "rounded-2xl px-4 py-3 max-w-[85%] text-sm leading-relaxed shadow-sm",
                                            message.role === "user"
                                                ? "bg-primary text-primary-foreground"
                                                : "bg-muted text-foreground"
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
                                                        className="text-blue-500 hover:underline cursor-pointer relative z-10"
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
                                <div className="flex justify-start animate-in fade-in slide-in-from-bottom-4 duration-300">
                                    <div className="bg-muted rounded-2xl px-4 py-3 flex items-center gap-2">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="p-4 border-t bg-background rounded-b-lg">
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
                    className="h-14 w-14 rounded-full shadow-2xl hover:scale-110 transition-all relative"
                >
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    <MessageCircle className="h-6 w-6" />
                </Button>
            )}
        </div>
    )
}
