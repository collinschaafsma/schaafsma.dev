"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

export function Present({
  children,
  delay = 0,
  duration = 0.5,
  y = 15,
}: {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay, type: "spring", duration }}
    >
      {children}
    </motion.div>
  )
}
