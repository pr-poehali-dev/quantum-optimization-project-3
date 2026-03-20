import { motion } from "framer-motion"

export interface SectionProps {
  id: string
  isActive: boolean
  backgroundImage?: string
  customContent?: React.ReactNode
}

import React from "react"

export default function Section({ id, isActive, backgroundImage, customContent }: SectionProps) {
  return (
    <section
      id={id}
      className="relative h-screen w-full snap-start flex flex-col justify-center overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/50 z-0" />
      )}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {customContent}
      </motion.div>
    </section>
  )
}
