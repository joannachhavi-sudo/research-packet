import heroLibrary from "@/assets/hero-library.jpg";
import academicIcons from "@/assets/academic-icons.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroLibrary} 
          alt="Historical library with classical architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight">
              Council of Thinkers
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-white/90">
              Research Hub
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80 max-w-3xl mx-auto">
            Explore Historical Perspectives on Gender Equality
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-8 border-2 border-white/50 rounded-full flex items-center justify-center animate-bounce">
          <div className="w-2 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}

export function IntroSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Introduction Text */}
          <div className="text-center space-y-8 mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Welcome to Your Research Hub
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Welcome to your research hub for the Council of Thinkers debate activity. 
                Here you'll find authentic historical perspectives on gender equality from 
                five influential figures across different eras and cultures. 
                <span className="font-medium text-foreground"> Choose one thinker to research deeply</span> - 
                you'll be debating/interviewing with them soon!
              </p>
            </div>
          </div>
          
          {/* Icon Grid */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent rounded-2xl" />
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-soft">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {[
                  { icon: "⚖️", label: "Justice & Equality" },
                  { icon: "🖋️", label: "Written Wisdom" },
                  { icon: "📜", label: "Historical Documents" },
                  { icon: "📚", label: "Scholarly Research" },
                  { icon: "🎭", label: "Debate & Discourse" }
                ].map((item, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}