"use client"

import { useState } from "react"
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
  const { setTheme } = useTheme()
  const [toggleMode, setToggleMode] = useState<ToggleMode>("system")

  const handleToggle = (mode: ToggleMode) => {
    setToggleMode(mode)
    setTheme(mode)
  }

  return (
    <div className="relative h-6 w-20 rounded-md border border-gray-400 dark:border-none dark:bg-gray-800">
      <motion.div
        className="absolute h-6 w-1/3 rounded-md bg-gray-400 dark:bg-gray-500"
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
              toggleMode === mode
                ? "text-white"
                : "text-gray-800 dark:text-gray-300"
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
