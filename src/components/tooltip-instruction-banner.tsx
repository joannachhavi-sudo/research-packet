import * as React from "react";
import { X, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { TooltipHelpModal } from "@/components/tooltip-help-modal";

interface TooltipInstructionBannerProps {
  className?: string;
}

export function TooltipInstructionBanner({ className }: TooltipInstructionBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isHelpModalOpen, setIsHelpModalOpen] = React.useState(false);

  // Check session storage on mount
  React.useEffect(() => {
    const dismissed = sessionStorage.getItem('tooltipBannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('tooltipBannerDismissed', 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div
        className={cn(
          "relative w-[90%] mx-auto mb-6 px-5 py-3 rounded-lg text-center",
          "animate-fade-in",
          className
        )}
        style={{
          backgroundColor: '#FFF8E7',
          border: '1px solid #8B7355',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-black/5 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" style={{ color: '#8B7355' }} />
        </button>

        {/* Content */}
        <div className="flex items-center justify-center gap-2 pr-6">
          <span className="text-lg" role="img" aria-label="lightbulb">💡</span>
          <span 
            className="text-[15px]"
            style={{ color: '#2C2C2C' }}
          >
            <strong>Learning Tool:</strong> Underlined words have definitions—hover or tap to learn more!
          </span>
          <button
            onClick={() => setIsHelpModalOpen(true)}
            className="ml-2 p-1 rounded-full hover:bg-black/5 transition-colors"
            aria-label="Help with tooltips"
          >
            <HelpCircle className="w-5 h-5" style={{ color: '#8B7355' }} />
          </button>
        </div>
      </div>

      <TooltipHelpModal 
        isOpen={isHelpModalOpen} 
        onClose={() => setIsHelpModalOpen(false)} 
      />
    </>
  );
}
