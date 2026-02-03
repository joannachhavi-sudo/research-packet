import * as React from "react";
import { cn } from "@/lib/utils";
import { getDefinition } from "@/data/vocabulary-definitions";

interface VocabTooltipProps {
  term: string;
  definition?: string;
  children: React.ReactNode;
  className?: string;
}

export function VocabTooltip({ term, definition, children, className }: VocabTooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [position, setPosition] = React.useState<'top' | 'bottom'>('top');
  const triggerRef = React.useRef<HTMLSpanElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const autoHideRef = React.useRef<NodeJS.Timeout | null>(null);

  // Get definition from data if not provided directly
  const tooltipDefinition = definition || getDefinition(term);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate position based on available space
  React.useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const tooltipHeight = 100; // Approximate height
      setPosition(spaceAbove > tooltipHeight ? 'top' : 'bottom');
    }
  }, [isVisible]);

  // Handle click outside on mobile
  React.useEffect(() => {
    if (isMobile && isVisible) {
      const handleClickOutside = (e: MouseEvent | TouchEvent) => {
        if (
          triggerRef.current &&
          !triggerRef.current.contains(e.target as Node) &&
          tooltipRef.current &&
          !tooltipRef.current.contains(e.target as Node)
        ) {
          setIsVisible(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      
      // Auto-hide after 8 seconds on mobile
      autoHideRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 8000);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
        if (autoHideRef.current) {
          clearTimeout(autoHideRef.current);
        }
      };
    }
  }, [isMobile, isVisible]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 300);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsVisible(false);
    }
  };

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation();
      setIsVisible(!isVisible);
    }
  };

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsVisible(false);
    }
  };

  if (!tooltipDefinition) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span
      ref={triggerRef}
      className={cn(
        "relative inline cursor-help",
        "border-b-[1.5px] border-dotted",
        className
      )}
      style={{ borderBottomColor: '#8B7355' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-describedby={isVisible ? `tooltip-${term}` : undefined}
      aria-expanded={isVisible}
    >
      {children}
      
      {isVisible && (
        <span
          ref={tooltipRef}
          id={`tooltip-${term}`}
          role="tooltip"
          className={cn(
            "absolute z-[9999] w-[280px] max-w-[calc(100vw-20px)]",
            "p-3 px-4 rounded-md",
            "text-sm font-sans font-normal not-italic leading-relaxed",
            "shadow-lg",
            "animate-in fade-in-0 zoom-in-95 duration-200",
            position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2',
            "left-1/2 -translate-x-1/2"
          )}
          style={{
            backgroundColor: '#FFF8E7',
            border: '1px solid #8B7355',
            color: '#2C2C2C',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
          onMouseEnter={() => !isMobile && setIsVisible(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Arrow */}
          <span
            className={cn(
              "absolute left-1/2 -translate-x-1/2",
              "w-0 h-0",
              position === 'top' ? 'top-full' : 'bottom-full'
            )}
            style={{
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              ...(position === 'top'
                ? { borderTop: '8px solid #8B7355' }
                : { borderBottom: '8px solid #8B7355' }
              ),
            }}
          />
          <span
            className={cn(
              "absolute left-1/2 -translate-x-1/2",
              "w-0 h-0",
              position === 'top' ? 'top-full -mt-[1px]' : 'bottom-full -mb-[1px]'
            )}
            style={{
              borderLeft: '7px solid transparent',
              borderRight: '7px solid transparent',
              ...(position === 'top'
                ? { borderTop: '7px solid #FFF8E7' }
                : { borderBottom: '7px solid #FFF8E7' }
              ),
            }}
          />
          
          <strong className="block mb-1 text-sm" style={{ color: '#8B7355' }}>
            {term}
          </strong>
          <span className="block">{tooltipDefinition}</span>
        </span>
      )}
    </span>
  );
}

// Helper component for wrapping text with tooltips automatically
interface TextWithTooltipsProps {
  text: string;
  terms: string[];
  className?: string;
}

export function TextWithTooltips({ text, terms, className }: TextWithTooltipsProps) {
  if (!terms.length) {
    return <span className={className}>{text}</span>;
  }

  // Sort terms by length (longest first) to avoid partial matches
  const sortedTerms = [...terms].sort((a, b) => b.length - a.length);
  
  // Create regex pattern for all terms (case-insensitive, word boundaries)
  const pattern = new RegExp(
    `(${sortedTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi'
  );

  const parts = text.split(pattern);
  
  return (
    <span className={className}>
      {parts.map((part, index) => {
        const lowerPart = part.toLowerCase();
        const matchedTerm = sortedTerms.find(t => t.toLowerCase() === lowerPart);
        
        if (matchedTerm) {
          return (
            <VocabTooltip key={index} term={part}>
              {part}
            </VocabTooltip>
          );
        }
        
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}
