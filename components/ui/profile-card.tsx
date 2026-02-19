"use client"

import { motion, useReducedMotion, Variants } from "framer-motion"
import { Check, ArrowRight, Star } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "../../lib/utils"

export interface ProfileCardProps {
  name?: string
  description?: string
  image?: string
  isVerified?: boolean
  stat1Value?: string | number
  stat1Label?: string
  stat2Value?: string | number
  stat2Label?: string
  buttonText?: string
  enableAnimations?: boolean
  className?: string
  onAction?: () => void
}

export function ProfileCard({
  name = "Sophie Bennett",
  description = "Product Designer who focuses on simplicity & usability.",
  image = "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800&h=800&fit=crop&auto=format&q=80",
  isVerified = true,
  stat1Value = "312",
  stat1Label = "followers",
  stat2Value = "48",
  stat2Label = "following",
  buttonText = "Follow +",
  enableAnimations = true,
  className,
  onAction = () => {},
}: ProfileCardProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [hovered, setHovered] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const shouldAnimate = enableAnimations && !shouldReduceMotion

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const containerVariants: Variants = {
    rest: { 
      scale: 1,
      y: 0,
      filter: "blur(0px)",
    },
    hover: shouldAnimate ? { 
      scale: 1.02, 
      y: -4,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 28,
        mass: 0.6,
      }
    } : {},
  }

  const imageVariants: Variants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  }

  const contentVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(4px)",
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.6,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 15,
      scale: 0.95,
      filter: "blur(2px)",
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5,
      },
    },
  }

  const letterVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 200,
        mass: 0.8,
      },
    },
  }

  // Fallback visual caso o JS/Animação falhe ou carregue depois
  if (!isMounted) {
    return (
        <div className={cn(
            "relative w-full md:w-[340px] h-[400px] rounded-3xl border border-white/10 text-white overflow-hidden shadow-xl shadow-black/50 cursor-pointer group backdrop-blur-sm bg-black/40",
            className
          )}>
            <img 
              src={image} 
              alt={name} 
              width="340"
              height="400"
              className="absolute inset-0 w-full h-full object-cover opacity-80" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-black/20 to-transparent" />
             <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                <h2 className="text-2xl font-bold text-white">{name}</h2>
                <div className="w-full py-3 px-4 rounded-2xl font-bold text-sm bg-white text-black text-center">{buttonText}</div>
             </div>
        </div>
    )
  }

  return (
    <motion.div
      data-slot="profile-hover-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial="rest"
      whileHover="hover"
      variants={containerVariants}
      onClick={onAction}
      className={cn(
        "relative w-full md:w-[340px] h-[400px] rounded-3xl border border-white/10 text-white overflow-hidden shadow-xl shadow-black/50 cursor-pointer group backdrop-blur-sm bg-black/40",
        className
      )}
    >
      {/* Full Cover Image */}
      <motion.img
        src={image}
        alt={`Imagem de capa para ${name}`}
        width="340"
        height="400"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        variants={imageVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        loading="lazy"
      />

      {/* Smooth Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <motion.div 
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 p-6 space-y-4"
      >
        {/* Name and Verification */}
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <motion.h2 
            className="text-2xl font-bold text-white leading-tight"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.02,
                }
              }
            } as Variants}
          >
            {name.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h2>
          {isVerified && (
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center w-5 h-5 rounded-full bg-fox-orange text-white"
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                transition: { type: "spring", stiffness: 400, damping: 20 }
              }}
            >
              <Check className="w-3 h-3" />
            </motion.div>
          )}
        </motion.div>

        {/* Description */}
        <motion.p 
          variants={itemVariants}
          className="text-zinc-300 text-sm leading-relaxed line-clamp-2"
        >
          {description}
        </motion.p>

        {/* Stats */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-6 pt-2"
        >
          {stat1Value && (
            <div className="flex items-center gap-2 text-zinc-300">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-semibold text-white">{stat1Value}</span>
                <span className="text-xs uppercase tracking-wide">{stat1Label}</span>
            </div>
          )}
          {stat2Value && (
            <div className="flex items-center gap-2 text-zinc-300">
                <ArrowRight className="w-4 h-4 text-fox-orange" />
                <span className="font-semibold text-white">{stat2Value}</span>
                <span className="text-xs uppercase tracking-wide">{stat2Label}</span>
            </div>
          )}
        </motion.div>

        {/* Follow Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { type: "spring", stiffness: 400, damping: 25 }
          }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "w-full cursor-pointer py-3 px-4 rounded-2xl font-bold text-sm transition-all duration-200 mt-2",
            "border border-white/10 shadow-lg",
            "bg-white text-black hover:bg-zinc-200 focus:ring-2 focus:ring-offset-2 focus:ring-white",
            "transform-gpu"
          )}
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </motion.div>
  )
}