import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { VocabTooltip } from "@/components/ui/vocab-tooltip";

interface ThinkerCardProps {
  name: string;
  subtitle: string;
  teaser: string;
  image: string;
  slug: string;
  accentColor: string;
  className?: string;
}

// Map of subtitles to their tooltipped versions
const subtitleTooltips: Record<string, { before: string; term: string; after: string }> = {
  "The Radical Feminist": { before: "THE ", term: "RADICAL", after: " FEMINIST" },
  "The Conflicted Reformer": { before: "THE CONFLICTED ", term: "REFORMER", after: "" },
  "The Intersectional Activist": { before: "THE ", term: "INTERSECTIONAL", after: " ACTIVIST" },
  "The Constitutional Architect": { before: "THE ", term: "CONSTITUTIONAL", after: " ARCHITECT" },
};

function renderSubtitleWithTooltip(subtitle: string) {
  const tooltipData = subtitleTooltips[subtitle];
  
  if (!tooltipData) {
    return subtitle.toUpperCase();
  }

  return (
    <>
      {tooltipData.before}
      <VocabTooltip term={tooltipData.term.toLowerCase()}>
        {tooltipData.term}
      </VocabTooltip>
      {tooltipData.after}
    </>
  );
}

export function ThinkerCard({ 
  name, 
  subtitle, 
  teaser, 
  image, 
  slug, 
  accentColor,
  className 
}: ThinkerCardProps) {
  return (
    <Link to={`/thinker/${slug}`} className="block">
      <Card className={cn(
        "group relative overflow-hidden transition-all duration-300",
        "hover:shadow-elegant hover:-translate-y-2",
        "bg-gradient-to-br from-card to-muted/30",
        "border-border/50 hover:border-primary/30",
        className
      )}>
        <div className="aspect-[3/4] overflow-hidden">
          <img 
            src={image} 
            alt={`Portrait of ${name}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            style={{ 
              background: `linear-gradient(to top, ${accentColor}40 0%, transparent 50%)` 
            }}
          />
        </div>
        
        <CardContent className="p-6 space-y-3">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p 
              className="text-sm font-medium uppercase tracking-wide"
              style={{ color: accentColor }}
            >
              {renderSubtitleWithTooltip(subtitle)}
            </p>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {teaser}
          </p>
          
          <div className="pt-2">
            <span 
              className="inline-flex items-center text-sm font-medium group-hover:underline"
              style={{ color: accentColor }}
            >
              Explore Research →
            </span>
          </div>
        </CardContent>
        
        {/* Subtle accent border */}
        <div 
          className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: accentColor }}
        />
      </Card>
    </Link>
  );
}