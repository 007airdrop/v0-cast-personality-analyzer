"use client";

import { useActions } from "farcaster-js";
import { useEffect } from "react";

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [hasAnalyzed, setHasAnalyzed] = useState(false)

  const handleSignIn = () => {
    setIsSignedIn(true)
  }

  const handleAnalyze = () => {
    setHasAnalyzed(true)
  }

  const handleReset = () => {
    setHasAnalyzed(false)
    setIsSignedIn(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {!isSignedIn ? (
        <SignInScreen onSignIn={handleSignIn} />
      ) : !hasAnalyzed ? (
        <SignInScreen onAnalyze={handleAnalyze} isAnalyzing />
      ) : (
        <ResultsScreen onReset={handleReset} />
      )}
    </div>
  )
}
