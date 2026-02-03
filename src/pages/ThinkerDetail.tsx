import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Quote, BookOpen, Calendar, MapPin } from "lucide-react";
import { VocabTooltip, TextWithTooltips } from "@/components/ui/vocab-tooltip";
import maryWollstonecraft from "@/assets/mary-wollstonecraft.jpg";
import aristotleBust from "@/assets/aristotle-bust.jpg";
import gandhiPortrait from "@/assets/gandhi-portrait.jpg";
import jyotiraoPhule from "@/assets/jyotirao-phule.jpg";
import brAmbedkar from "@/assets/br-ambedkar.jpg";

// Terms to highlight for each thinker
const thinkerVocabTerms: Record<string, string[]> = {
  "mary-wollstonecraft": ["vindication", "enlightenment", "femme covert", "natural rights", "rational", "rationally"],
  "gandhi": ["dharma", "satyagraha", "brahmacharya", "swaraj", "ahimsa", "purdah"],
  "aristotle": ["polis", "deliberative faculty", "virtue ethics", "teleology", "natural slavery"],
  "jyotirao-phule": ["brahminical patriarchy", "satyashodhak", "shudra", "shudras", "ati-shudra", "gulamgiri"],
  "br-ambedkar": ["dalit", "dalits", "hindu code bill", "constitutional morality", "annihilation of caste", "separate electorate"],
};

// This would eventually come from a data source
const thinkerData = {
  "mary-wollstonecraft": {
    name: "Mary Wollstonecraft",
    lifespan: "1759-1797",
    subtitle: "The Radical Feminist",
    accentColor: "#8B5A3C",
    portrait: maryWollstonecraft,
    location: "London, England",
    period: "Age of Enlightenment",
    keyWork: "A Vindication of the Rights of Woman (1792)",
    
    biography: `Mary Wollstonecraft (1759-1797) - British writer, philosopher, and women's rights advocate who lived during the Age of Enlightenment. Born into a middle-class family with an abusive father, she experienced firsthand the vulnerabilities of women in 18th-century society. She worked as a governess, teacher, and translator before becoming one of the first professional female writers in England. She died at age 38 from complications following childbirth, leaving behind her infant daughter Mary (who would later become Mary Shelley, author of Frankenstein).`,
    
    historicalContext: `In 1790s Britain, women had no legal rights - they were considered "femme covert" (covered women) under their husband's legal identity. Upon marriage, women's property, earnings, and even their children legally belonged to their husbands. Women could not vote, attend university, enter most professions, or sign contracts. The prevailing belief was that women were naturally inferior in reason and suited only for domestic roles.`,
    
    coreArguments: [
      "Education over Ornament: Women should receive rational education, not just training in accomplishments like music and drawing",
      "Economic Independence: Women need the ability to support themselves financially", 
      "Reason over Emotion: Women are as capable of rational thought as men",
      "Legal Equality: Women deserve the same natural rights as men",
      "Social Reform: Society's treatment of women harms both women and society as a whole"
    ],
    
    keyQuotes: [
      {
        text: "It is justice, not charity, that is wanting in the world... Till women are more rationally educated, the progress of human virtue and improvement in knowledge must receive continual checks.",
        source: "A Vindication of the Rights of Woman (1792)",
        context: "On Women's Education"
      },
      {
        text: "Independence I have long considered as the grand blessing of life, the basis of every virtue.",
        source: "A Vindication of the Rights of Woman (1792)", 
        context: "On Marriage and Independence"
      },
      {
        text: "I do not wish women to have power over men, but over themselves.",
        source: "A Vindication of the Rights of Woman (1792)",
        context: "On Women's Rational Capacity"
      },
      {
        text: "Taught from infancy that beauty is woman's sceptre, the mind shapes itself to the body, and roaming round its gilt cage, only seeks to adorn its prison.",
        source: "A Vindication of the Rights of Woman (1792)",
        context: "On Social Conditioning"
      }
    ],
    
    questionsToExplore: [
      "Why do you believe education is the foundation of women's liberation?",
      "How do you respond to those who argue that women's nature makes them unsuited for public life?",
      "What role should marriage play in a woman's life if she is to be truly independent?",
      "How do economic dependence and intellectual dependence relate to each other?",
      "What would you say to women who find fulfillment in traditional domestic roles?"
    ]
  },

  "gandhi": {
    name: "Mahatma Gandhi",
    lifespan: "1869-1948", 
    subtitle: "The Conflicted Reformer",
    accentColor: "#2D5A27",
    portrait: gandhiPortrait,
    location: "Gujarat, India",
    period: "Colonial India",
    keyWork: "Young India (newspaper, various dates)",
    
    biography: `Mohandas Karamchand Gandhi (1869-1948) - Indian lawyer, political leader, and spiritual figure who led India's independence movement through non-violent resistance. Born into a middle-class Hindu family in Gujarat, he studied law in London and practiced in South Africa before returning to India. Known as "Mahatma" (great soul) and "Bapu" (father), he became the face of Indian nationalism. Despite his progressive political views, he held traditional beliefs about gender roles that reflected his time and cultural background.`,
    
    historicalContext: `In Colonial India (late 19th-early 20th century), British colonial rule had disrupted traditional Indian society and economy. Traditional Hindu society placed women in subordinate roles, justified by religious texts. Child marriage, sati (widow burning), and purdah (female seclusion) were prevalent practices. The Indian social reform movement was addressing issues like women's education and widow remarriage, while women like Sarojini Naidu were beginning to participate in the independence movement.`,
    
    coreArguments: [
      "Spiritual Superiority: Women were naturally more spiritual and self-sacrificing than men",
      "Domestic Dharma: A woman's primary duty (dharma) was to her family and household", 
      "Natural Differences: Men and women had fundamentally different natures and roles",
      "Moral Influence: Women should influence society through moral example, not direct political action",
      "Controlled Participation: Women could participate in the independence movement but within limits"
    ],
    
    keyQuotes: [
      {
        text: "Woman is the embodiment of sacrifice and suffering, and her advent to public life should, therefore, result in purifying it, in restraining unbridled ambition and accumulation of property.",
        source: "Young India (1921)",
        context: "On Women's Nature"
      },
      {
        text: "The real education of women should consist in learning the art of home-making and the upbringing of children.",
        source: "Young India (1936)", 
        context: "On Women's Primary Role"
      },
      {
        text: "To call women the weaker sex is a libel; it is man's injustice to women.",
        source: "Speeches and writings",
        context: "On Women's Spiritual Superiority"
      },
      {
        text: "Women is more fitted than man to make sacrifices. Women is the embodiment of sacrifice. A man makes compromises, woman makes sacrifices.",
        source: "Speeches and writings",
        context: "On Women's Nature"
      }
    ],
    
    questionsToExplore: [
      "How do you reconcile your belief in human equality with your views on women's roles?",
      "Why do you believe women are naturally more suited to sacrifice and suffering?",
      "What is the relationship between a woman's spiritual duties and her political rights?",
      "How do you respond to women who want to work outside the home?",
      "Is your vision of women's roles liberating or limiting?"
    ]
  },

  "aristotle": {
    name: "Aristotle",
    lifespan: "384-322 BCE",
    subtitle: "The Ancient Philosopher", 
    accentColor: "#1B4B66",
    portrait: aristotleBust,
    location: "Athens, Greece",
    period: "Classical Antiquity",
    keyWork: "Politics & Nicomachean Ethics",
    
    biography: `Aristotle (384-322 BCE) - Ancient Greek philosopher and polymath who studied under Plato and tutored Alexander the Great. Born in Stagira, Macedonia, he founded his own school (the Lyceum) in Athens. Considered one of the most influential thinkers in Western philosophy, he wrote extensively on logic, ethics, politics, biology, and metaphysics. His views on women reflected the patriarchal Greek society of his time and influenced Western thought for centuries.`,
    
    historicalContext: `In 4th Century BCE Athens, Greek society was strictly patriarchal with women having minimal legal rights. Athenian women could not vote, own property, or participate in public life. Women were expected to remain in the domestic sphere, managing households. Marriage was primarily an economic and political arrangement between families. The city-state (polis) was the center of political and intellectual life, from which women were excluded.`,
    
    coreArguments: [
      "Natural Inferiority: Women are biologically and rationally inferior to men",
      "Deficient Reason: Women possess deliberative faculty but it lacks authority", 
      "Domestic Role: Women's natural place is in the household under male authority",
      "Complementary Function: Women provide material (body) while men provide form (soul)",
      "Political Exclusion: Women are naturally unsuited for political participation"
    ],
    
    keyQuotes: [
      {
        text: "The male is by nature superior, and the female inferior; and the one rules, and the other is ruled; this principle, of necessity, extends to all mankind.",
        source: "Politics",
        context: "On Natural Hierarchy"
      },
      {
        text: "The slave has no deliberative faculty at all; the woman has, but it is without authority.",
        source: "Politics", 
        context: "On Women's Rational Capacity"
      },
      {
        text: "The female is, as it were, a deformed male; and the menstrual discharge is semen, though in an impure condition.",
        source: "Generation of Animals",
        context: "On Biological Inferiority"
      },
      {
        text: "Silence is a woman's glory.",
        source: "Rhetoric",
        context: "On Women's Proper Behavior"
      }
    ],
    
    questionsToExplore: [
      "How do you justify the claim that women are naturally inferior to men?",
      "If virtue is the highest human good, why shouldn't women pursue it equally?",
      "What evidence supports your view that women's reasoning lacks authority?",
      "How do you respond to examples of women who have shown great wisdom and leadership?",
      "Does your logic about natural hierarchy apply to other groups you consider inferior?"
    ]
  },

  "jyotirao-phule": {
    name: "Jyotirao Phule",
    lifespan: "1827-1890",
    subtitle: "The Intersectional Activist",
    accentColor: "#8B3A3A", 
    portrait: jyotiraoPhule,
    location: "Maharashtra, India",
    period: "19th Century British India",
    keyWork: "Gulamgiri (Slavery, 1873)",
    
    biography: `Jyotirao Govindrao Phule (1827-1890) - Indian social reformer, educator, and activist from Maharashtra who fought against caste discrimination and advocated for women's education. Born into the Mali (gardener) caste, considered "lower" in the caste hierarchy, he experienced discrimination firsthand. Along with his wife Savitribai Phule, he opened the first school for girls in India and worked to educate both women and people from lower castes. He founded the Satyashodhak Samaj (Truth-seekers' Society) to promote social equality.`,
    
    historicalContext: `In 19th Century Maharashtra, rigid caste system dominated social relations, with Brahmins at the top. Women, especially from lower castes, faced double discrimination. Education was controlled by upper-caste men; women and lower castes were excluded. Child marriage, sati, and widow persecution were common. British colonial rule was introducing Western education and ideas while social reform movements were emerging across India.`,
    
    coreArguments: [
      "Education for All: Education should be accessible to women and all castes",
      "Intersectional Analysis: Understood how caste and gender oppression reinforced each other", 
      "Religious Critique: Challenged Hindu scriptures that justified inequality",
      "Practical Reform: Established schools and institutions rather than just theorizing",
      "Women's Agency: Believed women could and should be agents of their own liberation"
    ],
    
    keyQuotes: [
      {
        text: "Without education, wisdom was lost; without wisdom, morals were lost; without morals, development was lost; without development, wealth was lost; without wealth, the Shudras were ruined. So educate, be organized, and agitate.",
        source: "Gulamgiri (1873)",
        context: "On Education as Liberation"
      },
      {
        text: "The Brahmin made the woman more dependent and by making her do blind worship of her husband, he enslaved her in the name of religion.",
        source: "Gulamgiri (1873)", 
        context: "On Caste and Gender Oppression"
      },
      {
        text: "In the Shudra and Ati-Shudra communities, women suffer dual oppression - first as women, and second as members of the so-called lower castes.",
        source: "Letters and speeches",
        context: "On Intersectional Oppression"
      },
      {
        text: "So long as learning remains the privilege of the few, there can be no progress for the many.",
        source: "Sarvajanik Satya Dharma Pustak (1891)",
        context: "On Social Reform"
      }
    ],
    
    questionsToExplore: [
      "How are caste oppression and gender oppression connected in Indian society?",
      "Why is education more powerful than religious reform in fighting inequality?",
      "What role should women play in challenging both caste and gender hierarchies?",
      "How do you respond to upper-caste women who support traditional gender roles?",
      "What practical steps should society take to ensure real equality for all women?"
    ]
  },

  "br-ambedkar": {
    name: "Dr. B.R. Ambedkar", 
    lifespan: "1891-1956",
    subtitle: "The Constitutional Architect",
    accentColor: "#6B4423",
    portrait: brAmbedkar,
    location: "Mumbai, India", 
    period: "Modern India",
    keyWork: "Indian Constitution & Hindu Code Bill",
    
    biography: `Bhimrao Ramji Ambedkar (1891-1956) - Indian jurist, social reformer, politician, and the principal architect of the Indian Constitution. Born into a Dalit (untouchable) family, he faced severe caste discrimination but became one of India's most educated leaders, earning law degrees from Columbia University and the London School of Economics. He fought throughout his life for the rights of Dalits and women, serving as India's first Law Minister and chairing the Constitution Drafting Committee.`,
    
    historicalContext: `In Early 20th Century India, the caste system relegated Dalits to extreme social and economic marginalization. Women had minimal legal rights and faced restrictions across all castes. The Indian independence movement was gaining momentum while social reform movements were challenging traditional hierarchies. Legal systems were evolving under British rule and later independent India, with debates about minority rights and representation intensifying.`,
    
    coreArguments: [
      "Constitutional Equality: Women deserve equal rights enshrined in law",
      "Intersectional Understanding: Recognized how caste oppression compounded gender oppression", 
      "Legal Reform: Focused on changing laws around marriage, divorce, and property",
      "Social Progress Indicator: Used women's status to measure societal advancement",
      "Religious Critique: Challenged religious practices that subordinated women"
    ],
    
    keyQuotes: [
      {
        text: "I measure the progress of a community by the degree of progress which women have achieved.",
        source: "Speeches and writings",
        context: "On Women's Progress as Social Indicator"
      },
      {
        text: "Religion is for man and not man for religion. If you want to know whether a religion is beneficial or harmful, ask what status and rights it accords to women.",
        source: "The Annihilation of Caste (1936)", 
        context: "On Religion and Women's Rights"
      },
      {
        text: "I had to fight the orthodoxy of my country. Otherwise, women would not have got the rights they have today.",
        source: "Constitutional debates",
        context: "On Women's Rights in Constitution"
      },
      {
        text: "Democracy is not merely a form of government. It is primarily a mode of associated living, of conjoint communicated experience.",
        source: "What Congress and Gandhi Have Done to the Untouchables (1946)",
        context: "On Democratic Principles"
      }
    ],
    
    questionsToExplore: [
      "How do constitutional rights translate into real equality for women?",
      "Why do you see women's progress as the measure of social advancement?",
      "How does caste discrimination specifically affect women differently than men?",
      "What role should law play versus social reform in achieving gender equality?",
      "How do you balance minority rights with majority democracy in protecting women?"
    ]
  }
};

// Helper component for rendering text with vocab tooltips
function RenderWithTooltips({ text, slug }: { text: string; slug: string }) {
  const terms = thinkerVocabTerms[slug] || [];
  return <TextWithTooltips text={text} terms={terms} />;
}

// Helper component for rendering subtitle with tooltip
function RenderSubtitleWithTooltip({ subtitle }: { subtitle: string }) {
  if (subtitle === "The Radical Feminist") {
    return (
      <>
        THE <VocabTooltip term="radical">RADICAL</VocabTooltip> FEMINIST
      </>
    );
  }
  if (subtitle === "The Conflicted Reformer") {
    return (
      <>
        THE CONFLICTED <VocabTooltip term="reformer">REFORMER</VocabTooltip>
      </>
    );
  }
  if (subtitle === "The Intersectional Activist") {
    return (
      <>
        THE <VocabTooltip term="intersectional">INTERSECTIONAL</VocabTooltip> ACTIVIST
      </>
    );
  }
  if (subtitle === "The Constitutional Architect") {
    return (
      <>
        THE <VocabTooltip term="constitutional">CONSTITUTIONAL</VocabTooltip> ARCHITECT
      </>
    );
  }
  return <>{subtitle.toUpperCase()}</>;
}

export default function ThinkerDetail() {
  const { slug } = useParams();
  
  // Check for custom thinkers first
  const customThinkers = JSON.parse(localStorage.getItem('customThinkers') || '{}');
  let thinker = slug ? thinkerData[slug as keyof typeof thinkerData] : null;
  
  // If not found in default data, check custom thinkers
  if (!thinker && slug && customThinkers[slug]) {
    const customData = customThinkers[slug];
    thinker = {
      name: customData.name,
      lifespan: customData.name.match(/\(([^)]+)\)$/)?.[1] || "",
      subtitle: customData.subtitle,
      accentColor: customData.accentColor,
      portrait: customData.portraitUrl || "/placeholder.svg",
      location: customData.location || "Unknown",
      period: customData.timePeriod || "Unknown Period", 
      keyWork: customData.keyWork || "",
      biography: customData.biography,
      historicalContext: customData.historicalContext,
      coreArguments: customData.coreArguments,
      keyQuotes: customData.keyQuotes,
      questionsToExplore: customData.questionsToExplore
    };
  }
  
  if (!thinker) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-serif font-semibold">Thinker Not Found</h1>
          <Link to="/">
            <Button variant="outline">Return to Research Hub</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentSlug = slug || "";
  const vocabTerms = thinkerVocabTerms[currentSlug] || [];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Research Hub
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-medium uppercase tracking-wide" style={{ color: thinker.accentColor }}>
                  <RenderSubtitleWithTooltip subtitle={thinker.subtitle} />
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                  {thinker.name}
                </h1>
                <p className="text-xl text-muted-foreground">{thinker.lifespan}</p>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {thinker.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <TextWithTooltips text={thinker.period} terms={vocabTerms} />
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <TextWithTooltips text={thinker.keyWork} terms={vocabTerms} />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl shadow-elegant">
                <img 
                  src={thinker.portrait}
                  alt={`Portrait of ${thinker.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-16 space-y-16">
        
        {/* Biography */}
        <section>
          <h2 className="font-serif text-3xl font-semibold mb-8 text-foreground">
            Who {thinker.name === "Mary Wollstonecraft" ? "She" : "He"} Was
          </h2>
          <Card className="border-l-4" style={{ borderLeftColor: thinker.accentColor }}>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                <TextWithTooltips text={thinker.biography} terms={vocabTerms} />
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Historical Context */}
        <section>
          <h2 className="font-serif text-3xl font-semibold mb-8 text-foreground">
            {thinker.name === "Mary Wollstonecraft" ? "Her" : "His"} Historical Context
          </h2>
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <h3 className="font-serif text-xl font-medium mb-4" style={{ color: thinker.accentColor }}>
                In 1790s Britain:
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                <TextWithTooltips text={thinker.historicalContext} terms={vocabTerms} />
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Core Arguments */}
        <section>
          <h2 className="font-serif text-3xl font-semibold mb-8 text-foreground">
            {thinker.name === "Mary Wollstonecraft" ? "Her" : "His"} Core Arguments
          </h2>
          <div className="grid gap-4">
            {thinker.coreArguments.map((argument, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed">
                    <strong style={{ color: thinker.accentColor }}>{argument.split(':')[0]}:</strong>
                    <TextWithTooltips text={argument.split(':').slice(1).join(':')} terms={vocabTerms} />
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Quotes */}
        <section>
          <h2 className="font-serif text-3xl font-semibold mb-8 text-foreground">Key Primary Sources & Authentic Quotes</h2>
          <div className="grid gap-8">
            {thinker.keyQuotes.map((quote, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: thinker.accentColor }}
                />
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Quote 
                      className="w-8 h-8 flex-shrink-0 mt-1" 
                      style={{ color: thinker.accentColor }}
                    />
                    <div className="space-y-4">
                      <blockquote className="text-lg italic leading-relaxed text-foreground">
                        "<TextWithTooltips text={quote.text} terms={vocabTerms} />"
                      </blockquote>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p><strong>Source:</strong> <TextWithTooltips text={quote.source} terms={vocabTerms} /></p>
                        <p><strong>Context:</strong> {quote.context}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Questions to Explore */}
        <section>
          <h2 className="font-serif text-3xl font-semibold mb-8 text-foreground">
            Questions to Explore With {thinker.name === "Mary Wollstonecraft" ? "Her" : "Him"}
          </h2>
          <Card className="bg-gradient-to-br from-card to-muted/30">
            <CardContent className="p-8">
              <div className="space-y-4">
                {thinker.questionsToExplore.map((question, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ backgroundColor: thinker.accentColor }}
                    >
                      {index + 1}
                    </div>
                    <p className="text-lg leading-relaxed">{question}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}
