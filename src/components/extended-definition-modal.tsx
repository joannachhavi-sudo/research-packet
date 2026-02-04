import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getExtendedDefinition, type ExtendedDefinition } from "@/data/extended-definitions";

interface ExtendedDefinitionModalProps {
  term: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ExtendedDefinitionModal({ term, isOpen, onClose }: ExtendedDefinitionModalProps) {
  const [definition, setDefinition] = React.useState<ExtendedDefinition | null>(null);

  React.useEffect(() => {
    if (term) {
      const def = getExtendedDefinition(term);
      setDefinition(def || null);
    }
  }, [term]);

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

  if (!isOpen || !definition) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[10001] flex items-center justify-center p-4"
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
          "relative bg-white rounded-xl p-8 w-full max-w-[600px] max-h-[90vh] overflow-auto",
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
          className="text-2xl font-bold text-center mb-8 uppercase tracking-wide"
          style={{ color: '#2C2C2C' }}
        >
          {definition.term}
        </h2>

        {/* Content */}
        <div className="space-y-6 text-left">
          {/* Simple Definition */}
          <div>
            <h3 
              className="font-bold uppercase mb-2 text-sm tracking-wide"
              style={{ color: '#8B7355' }}
            >
              SIMPLE DEFINITION:
            </h3>
            <p style={{ color: '#2C2C2C', fontSize: '16px', lineHeight: '1.6' }}>
              {definition.simpleDefinition}
            </p>
          </div>

          {/* More Detail */}
          <div>
            <h3 
              className="font-bold uppercase mb-2 text-sm tracking-wide"
              style={{ color: '#8B7355' }}
            >
              MORE DETAIL:
            </h3>
            <p style={{ color: '#2C2C2C', fontSize: '16px', lineHeight: '1.6' }}>
              {definition.moreDetail}
            </p>
          </div>

          {/* Examples */}
          <div>
            <h3 
              className="font-bold uppercase mb-2 text-sm tracking-wide"
              style={{ color: '#8B7355' }}
            >
              EXAMPLES:
            </h3>
            <ul className="space-y-2" style={{ color: '#2C2C2C', fontSize: '16px' }}>
              {definition.examples.map((example, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-lg leading-6">•</span>
                  <span style={{ lineHeight: '1.6' }}>{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Got It button */}
        <div className="mt-8 text-center">
          <Button
            onClick={onClose}
            className="px-8 py-2 font-medium"
          >
            Got It
          </Button>
        </div>
      </div>
    </div>
  );
}
