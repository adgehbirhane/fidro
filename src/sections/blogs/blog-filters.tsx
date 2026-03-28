import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { CustomButton } from "@/components/custom-button"

interface BlogFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function BlogFilters({ 
  searchQuery, 
  onSearchChange 
}: BlogFiltersProps) {
  return (
    <div className="sticky top-18 space-y-8">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 h-14 rounded-2xl border-2 bg-background focus-visible:ring-primary/20 focus-visible:border-primary text-base placeholder:text-muted-foreground/60"
        />
      </div>
      
      {/* Quick Stats */}
      <div className="bg-muted/30 rounded-2xl p-6 space-y-4 border">
        <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground uppercase tracking-wider">
          <Filter className="h-4 w-4" />
          <span>Quick Stats</span>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Total Articles</span>
            <span className="text-sm font-bold text-primary">3</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">This Week</span>
            <span className="text-sm font-bold text-primary">3</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Featured</span>
            <span className="text-sm font-bold text-primary">2</span>
          </div>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl p-6 border border-primary/20">
        <h3 className="font-bold text-foreground mb-2">Stay Updated</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Get the latest fitness insights delivered to your inbox weekly.
        </p>
        <CustomButton className="w-full rounded-xl py-3 px-4"
        withArrow
        >
          Subscribe
        </CustomButton>
      </div>
    </div>
  )
}
