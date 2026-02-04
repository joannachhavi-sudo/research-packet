import { HeroSection, IntroSection } from "@/components/hero-section";
import { ThinkerCard } from "@/components/ui/thinker-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FacilitatorForm } from "@/components/facilitator-form";
import { TooltipInstructionBanner } from "@/components/tooltip-instruction-banner";
import { Users, Plus, Lock } from "lucide-react";
import { useState } from "react";

// Import thinker portraits
import maryWollstonecraft from "@/assets/mary-wollstonecraft.jpg";
import aristotleBust from "@/assets/aristotle-bust.jpg";
import gandhiPortrait from "@/assets/gandhi-portrait.jpg";
import jyotiraoPhule from "@/assets/jyotirao-phule.jpg";
import brAmbedkar from "@/assets/br-ambedkar.jpg";

interface Thinker {
  name: string;
  subtitle: string; 
  teaser: string;
  image: string;
  slug: string;
  accentColor: string;
}

const defaultThinkers: Thinker[] = [
  {
    name: "Mary Wollstonecraft",
    subtitle: "The Radical Feminist", 
    teaser: "Argued for women's education and independence when both were revolutionary ideas",
    image: maryWollstonecraft,
    slug: "mary-wollstonecraft",
    accentColor: "#8B5A3C"
  },
  {
    name: "Mahatma Gandhi",
    subtitle: "The Conflicted Reformer",
    teaser: "Championed independence but held traditional views on women's roles", 
    image: gandhiPortrait,
    slug: "gandhi",
    accentColor: "#2D5A27"
  },
  {
    name: "Aristotle", 
    subtitle: "The Ancient Philosopher",
    teaser: "Brilliant logician who justified male superiority as 'natural law'",
    image: aristotleBust,
    slug: "aristotle", 
    accentColor: "#1B4B66"
  },
  {
    name: "Jyotirao Phule",
    subtitle: "The Intersectional Activist", 
    teaser: "Fought both caste and gender oppression in 19th-century India",
    image: jyotiraoPhule,
    slug: "jyotirao-phule",
    accentColor: "#8B3A3A"
  },
  {
    name: "Dr. B.R. Ambedkar",
    subtitle: "The Constitutional Architect",
    teaser: "Championed women's rights while drafting India's Constitution",
    image: brAmbedkar,
    slug: "br-ambedkar", 
    accentColor: "#6B4423"
  }
];

const Index = () => {
  const [accessCode, setAccessCode] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showAccessForm, setShowAccessForm] = useState(true);
  const [thinkers, setThinkers] = useState<Thinker[]>(defaultThinkers);
  
  const handleAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode === "2025") {
      setShowAccessForm(false);
    } else {
      alert("Invalid access code. Please contact your administrator.");
      setAccessCode("");
    }
  };

  const handleFacilitatorSubmit = (formData: any) => {
    // Create slug from name
    const slug = formData.name.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();

    const newThinker: Thinker = {
      name: formData.name,
      subtitle: formData.subtitle,
      teaser: formData.teaser,
      image: formData.portraitUrl || "/placeholder.svg",
      slug: slug,
      accentColor: formData.accentColor
    };

    setThinkers(prev => [...prev, newThinker]);
    
    // Store the full data for the detail page
    const existingCustomThinkers = JSON.parse(localStorage.getItem('customThinkers') || '{}');
    existingCustomThinkers[slug] = formData;
    localStorage.setItem('customThinkers', JSON.stringify(existingCustomThinkers));
    
    setIsDialogOpen(false);
    setShowAccessForm(true);
    setAccessCode("");
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Introduction */}
      <IntroSection />
      
      {/* Historical Thinkers Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Historical Thinkers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five influential figures across different eras and cultures. 
              Choose one to research deeply for your upcoming debate.
            </p>
          </div>
          
          {/* Tooltip instruction banner */}
          <TooltipInstructionBanner />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {thinkers.map((thinker) => (
              <ThinkerCard key={thinker.slug} {...thinker} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Facilitator Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background border-t border-border/50">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-1">
              <Card className="border-0">
                <CardContent className="p-12 text-center space-y-8">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                      <Plus className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-3xl font-semibold text-foreground">
                      Facilitators: Expand the Council
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Want to add another historical figure? Use this template to create 
                      additional thinker profiles and expand the diversity of perspectives.
                    </p>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-4 bg-muted/50 p-4 rounded-lg border border-border">
                      <span className="font-semibold text-foreground">Important:</span> After creating your thinker profile, download it as a PDF and 
                      circulate it with participants to ensure they can access it anytime.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button 
                          size="lg" 
                          className="bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary text-white font-medium px-8"
                        >
                          <Users className="w-5 h-5 mr-2" />
                          Access Facilitator Tools
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-4xl max-h-[90vh]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            {showAccessForm ? (
                              <>
                                <Lock className="w-5 h-5" />
                                Facilitator Access Required
                              </>
                            ) : (
                              <>
                                <Users className="w-5 h-5" />
                                Add New Historical Thinker
                              </>
                            )}
                          </DialogTitle>
                        </DialogHeader>
                        
                        {showAccessForm ? (
                          <form onSubmit={handleAccessSubmit} className="space-y-6">
                            <div className="space-y-2">
                              <Label htmlFor="access-code">Enter Facilitator Access Code</Label>
                              <Input
                                id="access-code"
                                type="password"
                                placeholder="Enter your access code..."
                                value={accessCode}
                                onChange={(e) => setAccessCode(e.target.value)}
                                className="font-mono"
                              />
                              <p className="text-sm text-muted-foreground">
                                Hint: The current year (4 digits)
                              </p>
                            </div>
                            <div className="flex gap-3">
                              <Button type="submit" className="flex-1">
                                Access Tools
                              </Button>
                              <Button 
                                type="button" 
                                variant="outline" 
                                onClick={() => setIsDialogOpen(false)}
                              >
                                Cancel
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground text-center">
                              Contact your administrator if you need access credentials.
                            </p>
                          </form>
                        ) : (
                          <FacilitatorForm 
                            onSubmit={handleFacilitatorSubmit}
                            onClose={() => {
                              setIsDialogOpen(false);
                              setShowAccessForm(true);
                              setAccessCode("");
                            }}
                          />
                        )}
                      </DialogContent>
                    </Dialog>
                    <p className="text-sm text-muted-foreground">
                      Requires facilitator access code
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
