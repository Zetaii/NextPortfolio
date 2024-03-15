"use client"
import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface Props {
  children: JSX.Element
  width?: "fit-content" | "100%"
}

export const TextReveal5 = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    } else {
      slideControls.start("exit") // If not in view, exit the slide control
    }
  }, [isInView, mainControls, slideControls])

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
