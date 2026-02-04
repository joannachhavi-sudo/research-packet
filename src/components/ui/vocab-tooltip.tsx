import * as React from "react";
import * as ReactDOM from "react-dom";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getDefinition } from "@/data/vocabulary-definitions";
import { hasExtendedDefinition } from "@/data/extended-definitions";
import { ExtendedDefinitionModal } from "@/components/extended-definition-modal";

interface VocabTooltipProps {
  term: string;
  definition?: string;
  children: React.ReactNode;
  className?: string;
}

interface TooltipPosition {
  top: number;
  left: number;
  position: 'above' | 'below';
}

export function VocabTooltip({ term, definition, children, className }: VocabTooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [tooltipPosition, setTooltipPosition] = React.useState<TooltipPosition | null>(null);
  const [showExtendedModal, setShowExtendedModal] = React.useState(false);
  const triggerRef = React.useRef<HTMLSpanElement>(null);
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const autoHideRef = React.useRef<NodeJS.Timeout | null>(null);

  // Get definition from data if not provided directly
  const tooltipDefinition = definition || getDefinition(term);
  const hasExtended = hasExtendedDefinition(term);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate fixed position when tooltip becomes visible
  React.useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const tooltipWidth = isMobile ? Math.min(window.innerWidth * 0.9, 400) : 400;
      const tooltipHeight = 150; // Approximate height
      const padding = 10;
      
      // Determine if tooltip should go above or below
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;
      const position: 'above' | 'below' = spaceAbove > tooltipHeight + padding ? 'above' : 'below';
      
      // Calculate horizontal position (centered on word)
      let left = rect.left + rect.width / 2 - tooltipWidth / 2;
      
      // Keep within viewport horizontally
      if (left < padding) {
        left = padding;
      } else if (left + tooltipWidth > window.innerWidth - padding) {
        left = window.innerWidth - tooltipWidth - padding;
      }
      
      // Calculate vertical position
      let top: number;
      if (position === 'above') {
        top = rect.top - padding;
      } else {
        top = rect.bottom + padding;
      }
      
      setTooltipPosition({ top, left, position });
    }
  }, [isVisible, isMobile]);

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

  const hideTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const isHoveringTooltipRef = React.useRef(false);

  const clearHideTimeout = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const scheduleHide = () => {
    clearHideTimeout();
    hideTimeoutRef.current = setTimeout(() => {
      if (!isHoveringTooltipRef.current) {
        setIsVisible(false);
      }
    }, 300);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      clearHideTimeout();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 150);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      scheduleHide();
    }
  };

  const handleTooltipMouseEnter = () => {
    if (!isMobile) {
      isHoveringTooltipRef.current = true;
      clearHideTimeout();
    }
  };

  const handleTooltipMouseLeave = () => {
    if (!isMobile) {
      isHoveringTooltipRef.current = false;
      scheduleHide();
    }
  };

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation();
      setIsVisible(!isVisible);
    }
  };

  const handleCloseTooltip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
  };

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(false);
    setShowExtendedModal(true);
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

  const tooltipContent = isVisible && tooltipPosition && (
    <div
      ref={tooltipRef}
      role="tooltip"
      className={cn(
        "fixed z-[9999]",
        "p-4 px-5 rounded-lg",
        "text-[15px] md:text-[15px] font-sans font-normal not-italic leading-relaxed",
        "shadow-lg"
      )}
      style={{
        top: tooltipPosition.position === 'above' ? 'auto' : `${tooltipPosition.top}px`,
        bottom: tooltipPosition.position === 'above' ? `${window.innerHeight - tooltipPosition.top}px` : 'auto',
        left: `${tooltipPosition.left}px`,
        width: isMobile ? 'calc(90vw)' : '400px',
        minWidth: '280px',
        maxWidth: isMobile ? '90vw' : '400px',
        backgroundColor: '#FFF8E7',
        border: '1px solid #8B7355',
        color: '#2C2C2C',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        animation: 'tooltip-enter 0.2s ease-out',
      }}
      onMouseEnter={handleTooltipMouseEnter}
      onMouseLeave={handleTooltipMouseLeave}
    >
      {/* Close button for mobile */}
      {isMobile && (
        <button
          onClick={handleCloseTooltip}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-black/10 transition-colors"
          aria-label="Close tooltip"
          style={{ touchAction: 'manipulation' }}
        >
          <X className="w-5 h-5" style={{ color: '#8B7355' }} />
        </button>
      )}
      
      {/* Arrow */}
      <span
        className={cn(
          "absolute left-1/2 -translate-x-1/2",
          "w-0 h-0"
        )}
        style={{
          ...(tooltipPosition.position === 'above' ? { bottom: '-8px' } : { top: '-8px' }),
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          ...(tooltipPosition.position === 'above'
            ? { borderTop: '8px solid #8B7355' }
            : { borderBottom: '8px solid #8B7355' }
          ),
        }}
      />
      <span
        className={cn(
          "absolute left-1/2 -translate-x-1/2",
          "w-0 h-0"
        )}
        style={{
          ...(tooltipPosition.position === 'above' ? { bottom: '-7px' } : { top: '-7px' }),
          borderLeft: '7px solid transparent',
          borderRight: '7px solid transparent',
          ...(tooltipPosition.position === 'above'
            ? { borderTop: '7px solid #FFF8E7' }
            : { borderBottom: '7px solid #FFF8E7' }
          ),
        }}
      />
      
      {/* Content */}
      <div className={isMobile ? 'pr-6' : ''}>
        <strong className="block mb-1 text-sm" style={{ color: '#8B7355' }}>
          {term.charAt(0).toUpperCase() + term.slice(1)}
        </strong>
        <span className="block leading-relaxed">{tooltipDefinition}</span>
        
        {/* Learn More link */}
        {hasExtended && (
          <button
            onClick={handleLearnMore}
            className="flex items-center gap-1 mt-3 text-sm font-medium hover:underline transition-all cursor-pointer"
            style={{ color: '#8B7355' }}
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
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
      </span>
      
      {/* Render tooltip in portal for fixed positioning */}
      {typeof document !== 'undefined' && ReactDOM.createPortal(tooltipContent, document.body)}
      
      {/* Extended definition modal */}
      <ExtendedDefinitionModal
        term={term}
        isOpen={showExtendedModal}
        onClose={() => setShowExtendedModal(false)}
      />
    </>
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
