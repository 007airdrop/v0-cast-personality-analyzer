"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Flame, Lightbulb } from "lucide-react"

export function PersonalityCard() {
  // Mock data - replace with actual analysis results
  const personalityData = {
    type: "Alpha",
    confidence: 87,
    topWords: ["gm", "based", "vibes"],
    sentimentScore: 7.2,
    breakdown: [
      { label: "Positive", value: 62, color: "bg-green-500" },
      { label: "Neutral", value: 28, color: "bg-blue-500" },
      { label: "Engaging", value: 10, color: "bg-purple-500" },
    ],
  }

  const personalityIcons: Record<string, React.ReactNode> = {
    Alpha: <Zap className="w-8 h-8" />,
    Builder: <Lightbulb className="w-8 h-8" />,
    Funny: <Flame className="w-8 h-8" />,
  }

  return (
    <div className="space-y-6">
      {/* Main Personality */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/50">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg text-muted-foreground">Your Personality</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Personality Badge */}
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  {personalityIcons[personalityData.type] || <Zap className="w-8 h-8 text-primary" />}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">{personalityData.type}</h2>
                  <p className="text-sm text-muted-foreground">{personalityData.confidence}% match</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Words */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Top Words</h3>
            <div className="flex flex-wrap gap-2">
              {personalityData.topWords.map((word, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium rounded-full bg-accent/20 text-accent border-0"
                >
                  {word}
                </Badge>
              ))}
            </div>
          </div>

          {/* Sentiment Score */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">Cast Sentiment</h3>
              <span className="text-lg font-bold text-primary">{personalityData.sentimentScore}/10</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                style={{
                  width: `${(personalityData.sentimentScore / 10) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Breakdown */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Sentiment Breakdown</h3>
            <div className="space-y-2">
              {personalityData.breakdown.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-bold text-foreground">{item.value}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="border-0 bg-card/50">
        <CardContent className="pt-4">
          <p className="text-xs text-muted-foreground leading-relaxed">
            📊 Based on analysis of your 100 most recent casts, including tone, vocabulary, and engagement patterns.
            Share your results to compare with friends!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
