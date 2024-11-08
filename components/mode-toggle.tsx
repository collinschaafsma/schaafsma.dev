"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Computer, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const modes = ["light", "system", "dark"] as const
type ToggleMode = (typeof modes)[number]
const modeIcons: Record<ToggleMode, React.ReactNode> = {
  light: <Sun className="size-3" />,
  system: <Computer className="size-3" />,
  dark: <Moon className="size-3" />,
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [toggleMode, setToggleMode] = useState<ToggleMode>(
    (theme as ToggleMode) || "system"
  )

  // prevent hydration error
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleToggle = (mode: ToggleMode) => {
    setToggleMode(mode)
    setTheme(mode)
  }

  return (
    <div className="relative h-6 w-20 rounded-md bg-accent">
      <motion.div
        className="absolute h-6 w-1/3 rounded-md bg-primary/30"
        animate={{
          left:
            toggleMode === "light"
              ? "0px"
              : toggleMode === "system"
                ? "33.33%"
                : "66.66%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      <div className="relative flex h-full justify-between">
        {modes.map(mode => (
          <button
            key={mode}
            onClick={() => handleToggle(mode)}
            className={`z-10 flex flex-1 items-center justify-center ${
              toggleMode === mode ? "text-primary" : "text-primary/50"
            }`}
            aria-pressed={toggleMode === mode}
          >
            {modeIcons[mode]}
          </button>
        ))}
      </div>
    </div>
  )
}
