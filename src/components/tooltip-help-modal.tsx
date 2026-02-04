import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface TooltipHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TooltipHelpModal({ isOpen, onClose }: TooltipHelpModalProps) {
  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 animate-fade-in"
        style={{ animationDuration: '200ms' }}
      />
      
      {/* Modal */}
      <div 
        className={cn(
          "relative bg-white rounded-xl p-8 w-full max-w-[500px] max-h-[90vh] overflow-auto",
          "shadow-2xl animate-scale-in"
        )}
        style={{ animationDuration: '300ms' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Title */}
        <h2 
          className="text-xl font-bold text-center mb-6"
          style={{ color: '#2C2C2C' }}
        >
          HOW TO USE THIS TOOL
        </h2>

        {/* Content */}
        <div className="space-y-6 text-left">
          <p style={{ color: '#2C2C2C', fontSize: '16px', lineHeight: '1.6' }}>
            Throughout this research hub, you'll see words with dotted underlines like this:{' '}
            <span 
              className="border-b-[1.5px] border-dotted cursor-help"
              style={{ borderBottomColor: '#8B7355' }}
            >
              radical
            </span>
          </p>

          <p style={{ color: '#2C2C2C', fontSize: '16px', lineHeight: '1.6' }}>
            These terms might be new or complex.
          </p>

          <div className="space-y-4">
            <div>
              <h3 
                className="font-bold mb-2"
                style={{ color: '#8B7355', fontSize: '16px' }}
              >
                ON COMPUTER:
              </h3>
              <ul className="space-y-1 ml-4" style={{ color: '#2C2C2C', fontSize: '16px' }}>
                <li>• Hover your mouse over underlined words</li>
                <li>• A definition box will appear</li>
                <li>• Click "Learn More" for detailed explanations</li>
              </ul>
            </div>

            <div>
              <h3 
                className="font-bold mb-2"
                style={{ color: '#8B7355', fontSize: '16px' }}
              >
                ON PHONE/TABLET:
              </h3>
              <ul className="space-y-1 ml-4" style={{ color: '#2C2C2C', fontSize: '16px' }}>
                <li>• Tap underlined words</li>
                <li>• A definition box will appear</li>
                <li>• Tap <X className="inline w-4 h-4" /> to close or tap elsewhere</li>
                <li>• Tap "Learn More" for detailed explanations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Got It button */}
        <div className="mt-8 text-center">
          <Button
            onClick={onClose}
            className="px-8 py-2 font-medium"
          >
            Got It!
          </Button>
        </div>
      </div>
    </div>
  );
}
