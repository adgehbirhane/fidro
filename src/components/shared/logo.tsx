import Image from "next/image"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
  textColor?: string
  invertColor?: boolean
}

export function Logo({ className = "", size = "md", showText = true, textColor, invertColor }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  }

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl"
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        <Image 
          src="/logo.png" 
          alt="Fidro Logo" 
          fill 
          className={`object-contain ${invertColor ? "brightness-0 invert" : ""}`}
        />
      </div>
      {showText && (
        <span className={`font-bold tracking-tight ${textSizes[size]} ${textColor || "text-foreground"}`}>
          FIDRO
        </span>
      )}
    </div>
  )
}