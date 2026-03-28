interface BlogHeroProps {
  title?: string
  description?: string
}

export function BlogHero({ 
  title = "Our Blog & Insights",
  description = "Insights, strategies, and news from world of fitness and gym management."
}: BlogHeroProps) {
  return (
    <div className="pt-8 lg:pt-24 pb-0">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
            {title}
          </h1>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
