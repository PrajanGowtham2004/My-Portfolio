"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ModeContextType {
  isAnilMode: boolean
  setIsAnilMode: (mode: boolean) => void
  toggleMode: () => void
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export function ModeProvider({ children }: { children: ReactNode }) {
  const [isAnilMode, setIsAnilMode] = useState(false)

  const toggleMode = () => {
    setIsAnilMode(!isAnilMode)
  }

  return <ModeContext.Provider value={{ isAnilMode, setIsAnilMode, toggleMode }}>{children}</ModeContext.Provider>
}

export function useMode() {
  const context = useContext(ModeContext)
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider")
  }
  return context
}
