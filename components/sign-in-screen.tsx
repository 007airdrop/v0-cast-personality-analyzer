"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap } from "lucide-react"

interface SignInScreenProps {
  onSignIn?: () => void
  onAnalyze?: () => void
  isAnalyzing?: boolean
}

export function SignInScreen({ onSignIn, onAnalyze, isAnalyzing = false }: SignInScreenProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleFarcasterClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (onSignIn) onSignIn()
    }, 800)
  }

  const handleAnalyzeClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (onAnalyze) onAnalyze()
    }, 1500)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Cast Vibe</h1>
          </div>
          <p className="text-base text-muted-foreground">
            {isAnalyzing
              ? "Discover your personality through your casts"
              : "Unlock your personality through your casts"}
          </p>
        </div>

        {/* Main Action */}
        <div className="space-y-4">
          {!isAnalyzing ? (
            <>
              <Button
                onClick={handleFarcasterClick}
                disabled={isLoading}
                size="lg"
                className="w-full h-12 text-base font-semibold rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Connecting...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Sign in with Farcaster
                  </div>
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                We analyze your 100 most recent casts to determine your vibe
              </p>
            </>
          ) : (
            <>
              <Button
                onClick={handleAnalyzeClick}
                disabled={isLoading}
                size="lg"
                className="w-full h-12 text-base font-semibold rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Analyzing casts...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Analyze My Casts
                  </div>
                )}
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Our AI analyzes your cast patterns to reveal your personality type
              </p>
            </>
          )}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-3 mt-8">
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="text-2xl font-bold text-primary">100+</div>
            <p className="text-xs text-muted-foreground mt-1">Casts analyzed</p>
          </div>
          <div className="bg-card p-4 rounded-lg border border-border">
            <div className="text-2xl font-bold text-accent">7</div>
            <p className="text-xs text-muted-foreground mt-1">Personality types</p>
          </div>
        </div>
      </div>
    </div>
  )
}
