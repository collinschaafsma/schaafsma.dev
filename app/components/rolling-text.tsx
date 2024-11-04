"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface RollingTextProps {
  words: string[]
  interval?: number
}

export default function RollingText({
  words,
  interval = 3000,
}: RollingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % words.length)
    }, interval)

    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <div className="relative inset-y-0 flex flex-grow overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex h-6 w-fit"
        >
          <span>{words[currentIndex]}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
