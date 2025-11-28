"use client"

import { Button } from "@/components/ui/button"
import { PersonalityCard } from "@/components/personality-card"
import { ArrowLeft, Share2 } from "lucide-react"

interface ResultsScreenProps {
  onReset: () => void
}

export function ResultsScreen({ onReset }: ResultsScreenProps) {
  return (
    <div className="flex flex-col min-h-screen px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onReset}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>
        <h1 className="text-xl font-bold text-foreground">Your Results</h1>
        <div className="w-12" />
      </div>

      {/* Results Container */}
      <div className="flex-1 w-full max-w-2xl mx-auto">
        <PersonalityCard />
      </div>

      {/* Share Section */}
      <div className="mt-8 space-y-3 max-w-2xl mx-auto w-full">
        <Button
          size="lg"
          className="w-full h-12 text-base font-semibold rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
        >
          <Share2 className="w-5 h-5" />
          Share on Farcaster
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={onReset}
          className="w-full h-12 text-base font-semibold rounded-lg border border-border hover:bg-secondary bg-transparent"
        >
          Analyze Again
        </Button>
      </div>
    </div>
  )
}
