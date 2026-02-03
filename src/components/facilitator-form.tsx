import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, Eye, Save, RotateCcw, UserPlus, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";
interface Quote {
  text: string;
  source: string;
  context: string;
}

interface ThinkerFormData {
  name: string;
  subtitle: string;
  teaser: string;
  timePeriod: string;
  location: string;
  keyWork: string;
  biography: string;
  historicalContext: string;
  coreArguments: string[];
  viewsOnGender: string;
  keyQuotes: Quote[];
  questionsToExplore: string[];
  keyTerms: string;
  portraitUrl: string;
  accentColor: string;
  eraImagery: string;
}

interface FacilitatorFormProps {
  onSubmit: (data: ThinkerFormData) => void;
  onClose: () => void;
}

export function FacilitatorForm({ onSubmit, onClose }: FacilitatorFormProps) {
  const { toast } = useToast();
  const [showPreview, setShowPreview] = useState(false);
  
  const [formData, setFormData] = useState<ThinkerFormData>({
    name: "",
    subtitle: "",
    teaser: "",
    timePeriod: "",
    location: "",
    keyWork: "",
    biography: "",
    historicalContext: "",
    coreArguments: [""],
    viewsOnGender: "",
    keyQuotes: [
      { text: "", source: "", context: "" },
      { text: "", source: "", context: "" },
      { text: "", source: "", context: "" }
    ],
    questionsToExplore: ["", "", "", "", ""],
    keyTerms: "",
    portraitUrl: "",
    accentColor: "#6B4423",
    eraImagery: ""
  });

  const updateField = (field: keyof ThinkerFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateCoreArgument = (index: number, value: string) => {
    const newArguments = [...formData.coreArguments];
    newArguments[index] = value;
    updateField("coreArguments", newArguments);
  };

  const addCoreArgument = () => {
    updateField("coreArguments", [...formData.coreArguments, ""]);
  };

  const removeCoreArgument = (index: number) => {
    if (formData.coreArguments.length > 1) {
      const newArguments = formData.coreArguments.filter((_, i) => i !== index);
      updateField("coreArguments", newArguments);
    }
  };

  const updateQuote = (index: number, field: keyof Quote, value: string) => {
    const newQuotes = [...formData.keyQuotes];
    newQuotes[index] = { ...newQuotes[index], [field]: value };
    updateField("keyQuotes", newQuotes);
  };

  const addQuote = () => {
    updateField("keyQuotes", [...formData.keyQuotes, { text: "", source: "", context: "" }]);
  };

  const removeQuote = (index: number) => {
    if (formData.keyQuotes.length > 1) {
      const newQuotes = formData.keyQuotes.filter((_, i) => i !== index);
      updateField("keyQuotes", newQuotes);
    }
  };

  const updateQuestion = (index: number, value: string) => {
    const newQuestions = [...formData.questionsToExplore];
    newQuestions[index] = value;
    updateField("questionsToExplore", newQuestions);
  };

  const addQuestion = () => {
    updateField("questionsToExplore", [...formData.questionsToExplore, ""]);
  };

  const removeQuestion = (index: number) => {
    if (formData.questionsToExplore.length > 1) {
      const newQuestions = formData.questionsToExplore.filter((_, i) => i !== index);
      updateField("questionsToExplore", newQuestions);
    }
  };

  const validateForm = () => {
    const requiredFields = ['name', 'subtitle', 'teaser', 'biography', 'historicalContext'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof ThinkerFormData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Validation Error",
        description: `Please fill in all required fields: ${missingFields.join(', ')}`,
        variant: "destructive"
      });
      return false;
    }

    if (formData.teaser.length > 100) {
      toast({
        title: "Validation Error", 
        description: "Brief teaser must be 100 characters or less",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Filter out empty values
      const cleanedData = {
        ...formData,
        coreArguments: formData.coreArguments.filter(arg => arg.trim()),
        keyQuotes: formData.keyQuotes.filter(quote => quote.text.trim()),
        questionsToExplore: formData.questionsToExplore.filter(q => q.trim())
      };
      
      onSubmit(cleanedData);
      toast({
        title: "Success!",
        description: "New thinker successfully added to the Council!",
      });
    }
  };

  const handleSaveDraft = () => {
    localStorage.setItem('facilitator-draft', JSON.stringify(formData));
    toast({
      title: "Draft Saved",
      description: "Your progress has been saved locally",
    });
  };

  const handleClearForm = () => {
    setFormData({
      name: "",
      subtitle: "",
      teaser: "",
      timePeriod: "",
      location: "",
      keyWork: "",
      biography: "",
      historicalContext: "",
      coreArguments: [""],
      viewsOnGender: "",
      keyQuotes: [
        { text: "", source: "", context: "" },
        { text: "", source: "", context: "" },
        { text: "", source: "", context: "" }
      ],
      questionsToExplore: ["", "", "", "", ""],
      keyTerms: "",
      portraitUrl: "",
      accentColor: "#6B4423",
      eraImagery: ""
    });
    toast({
      title: "Form Cleared",
      description: "All fields have been reset",
    });
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let yPos = 20;

    const addText = (text: string, fontSize: number, isBold: boolean = false, color: [number, number, number] = [0, 0, 0]) => {
      doc.setFontSize(fontSize);
      doc.setFont("helvetica", isBold ? "bold" : "normal");
      doc.setTextColor(...color);
      const lines = doc.splitTextToSize(text, contentWidth);
      
      // Check if we need a new page
      if (yPos + (lines.length * fontSize * 0.5) > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.text(lines, margin, yPos);
      yPos += lines.length * fontSize * 0.5 + 5;
    };

    const addSection = (title: string, content: string) => {
      if (content.trim()) {
        addText(title, 14, true, [107, 68, 35]);
        addText(content, 11);
        yPos += 5;
      }
    };

    // Header
    doc.setFillColor(107, 68, 35);
    doc.rect(0, 0, pageWidth, 40, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("Council of Thinkers", margin, 25);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Historical Thinker Profile", margin, 35);
    yPos = 55;

    // Name and subtitle
    addText(formData.name || "Untitled Thinker", 22, true);
    if (formData.subtitle) {
      addText(formData.subtitle, 14, false, [100, 100, 100]);
    }
    yPos += 5;

    // Brief teaser
    if (formData.teaser) {
      doc.setFillColor(245, 240, 235);
      doc.rect(margin, yPos - 5, contentWidth, 20, "F");
      doc.setTextColor(80, 80, 80);
      doc.setFontSize(12);
      doc.setFont("helvetica", "italic");
      const teaserLines = doc.splitTextToSize(`"${formData.teaser}"`, contentWidth - 10);
      doc.text(teaserLines, margin + 5, yPos + 5);
      yPos += 25;
    }

    // Meta info
    const metaInfo = [];
    if (formData.timePeriod) metaInfo.push(`Era: ${formData.timePeriod}`);
    if (formData.location) metaInfo.push(`Location: ${formData.location}`);
    if (formData.keyWork) metaInfo.push(`Key Work: ${formData.keyWork}`);
    if (metaInfo.length > 0) {
      addText(metaInfo.join("  •  "), 10, false, [120, 120, 120]);
      yPos += 5;
    }

    // Sections
    addSection("Biography", formData.biography);
    addSection("Historical Context", formData.historicalContext);
    addSection("Views on Gender", formData.viewsOnGender);

    // Core Arguments
    const filledArguments = formData.coreArguments.filter(arg => arg.trim());
    if (filledArguments.length > 0) {
      addText("Core Beliefs & Arguments", 14, true, [107, 68, 35]);
      filledArguments.forEach((arg, index) => {
        addText(`${index + 1}. ${arg}`, 11);
      });
      yPos += 5;
    }

    // Quotes
    const filledQuotes = formData.keyQuotes.filter(q => q.text.trim());
    if (filledQuotes.length > 0) {
      addText("Key Quotes", 14, true, [107, 68, 35]);
      filledQuotes.forEach((quote) => {
        doc.setFont("helvetica", "italic");
        addText(`"${quote.text}"`, 11);
        if (quote.source || quote.context) {
          doc.setFont("helvetica", "normal");
          addText(`— ${[quote.source, quote.context].filter(Boolean).join(", ")}`, 10, false, [100, 100, 100]);
        }
        yPos += 3;
      });
    }

    // Discussion Questions
    const filledQuestions = formData.questionsToExplore.filter(q => q.trim());
    if (filledQuestions.length > 0) {
      addText("Discussion Questions", 14, true, [107, 68, 35]);
      filledQuestions.forEach((question, index) => {
        addText(`${index + 1}. ${question}`, 11);
      });
      yPos += 5;
    }

    // Key Terms
    if (formData.keyTerms) {
      addSection("Key Terms & Vocabulary", formData.keyTerms);
    }

    // Footer
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(9);
      doc.setTextColor(150, 150, 150);
      doc.text(`Council of Thinkers • Page ${i} of ${pageCount}`, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, { align: "center" });
    }

    // Generate filename
    const fileName = formData.name.trim() 
      ? `${formData.name.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-')}-Profile.pdf`
      : "New-Thinker-Profile.pdf";
    
    doc.save(fileName);
    
    toast({
      title: "PDF Downloaded",
      description: `Profile saved as "${fileName}"`,
    });
  };

  const loadExample = () => {
    setFormData({
      name: "Simone de Beauvoir (1908-1986)",
      subtitle: "The Existentialist Feminist",
      teaser: "Declared that women are made, not born, challenging essential gender roles",
      timePeriod: "20th Century France",
      location: "Paris, France",
      keyWork: "The Second Sex (1949)",
      biography: "Simone de Beauvoir (1908-1986) - French writer, intellectual, political activist, feminist, and social theorist. A significant figure in 20th-century feminist philosophy and existentialism, she wrote novels, essays, biographies, and monographs on philosophy, politics, and social issues. She is best known for her 1949 treatise The Second Sex, a detailed analysis of women's oppression and a foundational tract of contemporary feminism.",
      historicalContext: "In mid-20th century France, women had recently gained the right to vote (1944) but still faced significant legal and social restrictions. The aftermath of two world wars had changed women's roles in society, yet traditional expectations persisted. Existentialist philosophy was emerging, emphasizing individual freedom and responsibility.",
      coreArguments: [
        "Social Construction of Gender: 'One is not born, but rather becomes, a woman'",
        "Women as the 'Other': Society defines women in relation to men, not as independent beings",
        "Economic Independence: Women must achieve financial autonomy to be truly free",
        "Rejection of 'Eternal Feminine': Challenges the idea that women have a fixed, essential nature",
        "Existentialist Ethics: Women must create their own meaning and values"
      ],
      viewsOnGender: "De Beauvoir argued that gender is socially constructed rather than biologically determined. She believed that women's supposed 'nature' was actually the result of centuries of oppression and conditioning. She advocated for women's complete equality and independence, rejecting both traditional feminine roles and essentialist feminism.",
      keyQuotes: [
        {
          text: "One is not born, but rather becomes, a woman. No biological, psychological, or economic fate determines the figure that the human female presents in society.",
          source: "The Second Sex (1949)",
          context: "On the Social Construction of Gender"
        },
        {
          text: "The most scandalous thing about woman is that she is a human being.",
          source: "The Second Sex (1949)",
          context: "On Women's Humanity"
        },
        {
          text: "Woman is defined and differentiated with reference to man and not he with reference to her; she is the incidental, the inessential as opposed to the essential.",
          source: "The Second Sex (1949)",
          context: "On Women as the 'Other'"
        }
      ],
      questionsToExplore: [
        "How does de Beauvoir's concept of 'becoming' a woman challenge traditional gender roles?",
        "What does it mean for women to be defined as the 'Other' in society?",
        "Is economic independence truly necessary for women's liberation?",
        "How do you respond to critics who say she devalues traditional feminine experiences?",
        "Can existentialist philosophy provide a framework for gender equality?"
      ],
      keyTerms: "Existentialism, The Other, Social Construction, Essentialism, Economic Independence, Patriarchy, Gender Identity",
      portraitUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
      accentColor: "#8B4513",
      eraImagery: "1940s Paris café scenes, post-war European reconstruction, intellectual salons, women entering the workforce"
    });
    
    toast({
      title: "Example Loaded",
      description: "Form populated with Simone de Beauvoir example",
    });
  };

  if (showPreview) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Preview: {formData.name}</h3>
          <Button variant="outline" onClick={() => setShowPreview(false)}>
            <Eye className="w-4 h-4 mr-2" />
            Edit Form
          </Button>
        </div>
        
        <Card className="max-w-sm mx-auto">
          <div className="aspect-[3/4] bg-muted rounded-t-lg flex items-center justify-center">
            {formData.portraitUrl ? (
              <img src={formData.portraitUrl} alt={formData.name} className="w-full h-full object-cover rounded-t-lg" />
            ) : (
              <div className="text-muted-foreground text-center p-4">
                Portrait Image<br />
                <small>Add URL to preview</small>
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <Badge 
              variant="secondary" 
              className="mb-2 text-xs"
              style={{ backgroundColor: formData.accentColor + '20', color: formData.accentColor }}
            >
              {formData.subtitle}
            </Badge>
            <h4 className="font-serif font-semibold text-lg mb-2">{formData.name}</h4>
            <p className="text-sm text-muted-foreground">{formData.teaser}</p>
          </CardContent>
        </Card>
        
        <div className="flex gap-2 justify-center">
          <Button onClick={handleSubmit} className="flex-1">
            <UserPlus className="w-4 h-4 mr-2" />
            Add to Council
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-h-[80vh] overflow-y-auto">
      {/* Header Actions */}
      <div className="flex flex-wrap gap-2 justify-between sticky top-0 bg-background/95 backdrop-blur-sm p-2 rounded-lg border">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={loadExample}>
            Load Example
          </Button>
          <Button variant="outline" size="sm" onClick={handleSaveDraft}>
            <Save className="w-4 h-4 mr-1" />
            Save Draft
          </Button>
          <Button variant="outline" size="sm" onClick={handleClearForm}>
            <RotateCcw className="w-4 h-4 mr-1" />
            Clear Form
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowPreview(true)}>
            <Eye className="w-4 h-4 mr-1" />
            Preview
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownloadPDF}>
            <Download className="w-4 h-4 mr-1" />
            Download PDF Profile
          </Button>
        </div>
      </div>

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="e.g., Simone de Beauvoir (1908-1986)"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="subtitle">Subtitle/Title *</Label>
              <Input
                id="subtitle"
                placeholder="e.g., The Existentialist Feminist"
                value={formData.subtitle}
                onChange={(e) => updateField("subtitle", e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="teaser">Brief Teaser * (max 100 chars)</Label>
            <Textarea
              id="teaser"
              placeholder="Short description for the main grid card"
              value={formData.teaser}
              onChange={(e) => updateField("teaser", e.target.value)}
              className="resize-none"
              rows={2}
            />
            <p className="text-xs text-muted-foreground mt-1">
              {formData.teaser.length}/100 characters
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="timePeriod">Time Period/Era</Label>
              <Input
                id="timePeriod"
                placeholder="e.g., 20th Century France"
                value={formData.timePeriod}
                onChange={(e) => updateField("timePeriod", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="e.g., Paris, France"
                value={formData.location}
                onChange={(e) => updateField("location", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="keyWork">Key Work</Label>
              <Input
                id="keyWork"
                placeholder="e.g., The Second Sex (1949)"
                value={formData.keyWork}
                onChange={(e) => updateField("keyWork", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Biographical Section */}
      <Card>
        <CardHeader>
          <CardTitle>Biographical Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="biography">Who They Were *</Label>
            <Textarea
              id="biography"
              placeholder="Full biographical description..."
              value={formData.biography}
              onChange={(e) => updateField("biography", e.target.value)}
              rows={4}
            />
          </div>
          
          <div>
            <Label htmlFor="historicalContext">Historical Context *</Label>
            <Textarea
              id="historicalContext"
              placeholder="Description of their time period and society..."
              value={formData.historicalContext}
              onChange={(e) => updateField("historicalContext", e.target.value)}
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="viewsOnGender">Their Views on Gender</Label>
            <Textarea
              id="viewsOnGender"
              placeholder="Specific perspectives on women's roles and rights..."
              value={formData.viewsOnGender}
              onChange={(e) => updateField("viewsOnGender", e.target.value)}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Core Arguments */}
      <Card>
        <CardHeader>
          <CardTitle>Core Beliefs & Arguments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.coreArguments.map((argument, index) => (
            <div key={index} className="flex gap-2">
              <Textarea
                placeholder={`Core argument ${index + 1}...`}
                value={argument}
                onChange={(e) => updateCoreArgument(index, e.target.value)}
                rows={2}
                className="flex-1"
              />
              <div className="flex flex-col gap-1">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addCoreArgument}
                >
                  <Plus className="w-4 h-4" />
                </Button>
                {formData.coreArguments.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeCoreArgument(index)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Primary Sources */}
      <Card>
        <CardHeader>
          <CardTitle>Primary Sources & Quotes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {formData.keyQuotes.map((quote, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Quote {index + 1}</h4>
                <div className="flex gap-1">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addQuote}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                  {formData.keyQuotes.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeQuote(index)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
              <Textarea
                placeholder="Enter the quote text..."
                value={quote.text}
                onChange={(e) => updateQuote(index, "text", e.target.value)}
                rows={3}
              />
              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <Label>Source</Label>
                  <Input
                    placeholder="e.g., The Second Sex (1949)"
                    value={quote.source}
                    onChange={(e) => updateQuote(index, "source", e.target.value)}
                  />
                </div>
                <div>
                  <Label>Context</Label>
                  <Input
                    placeholder="e.g., On Social Construction of Gender"
                    value={quote.context}
                    onChange={(e) => updateQuote(index, "context", e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Discussion Questions */}
      <Card>
        <CardHeader>
          <CardTitle>Discussion Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.questionsToExplore.map((question, index) => (
            <div key={index} className="flex gap-2">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0 mt-2">
                {index + 1}
              </span>
              <Textarea
                placeholder={`Discussion question ${index + 1}...`}
                value={question}
                onChange={(e) => updateQuestion(index, e.target.value)}
                rows={2}
                className="flex-1"
              />
              <div className="flex flex-col gap-1">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addQuestion}
                >
                  <Plus className="w-4 h-4" />
                </Button>
                {formData.questionsToExplore.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeQuestion(index)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Visual Elements */}
      <Card>
        <CardHeader>
          <CardTitle>Visual Elements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="portraitUrl">Portrait Image URL</Label>
            <Input
              id="portraitUrl"
              placeholder="https://example.com/portrait.jpg"
              value={formData.portraitUrl}
              onChange={(e) => updateField("portraitUrl", e.target.value)}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="accentColor">Theme Color</Label>
              <div className="flex gap-2">
                <Input
                  id="accentColor"
                  type="color"
                  value={formData.accentColor}
                  onChange={(e) => updateField("accentColor", e.target.value)}
                  className="w-12 h-10 p-1"
                />
                <Input
                  value={formData.accentColor}
                  onChange={(e) => updateField("accentColor", e.target.value)}
                  placeholder="#6B4423"
                  className="flex-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="keyTerms">Key Terms/Vocabulary</Label>
              <Input
                id="keyTerms"
                placeholder="Comma-separated terms..."
                value={formData.keyTerms}
                onChange={(e) => updateField("keyTerms", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="eraImagery">Era Imagery Description</Label>
            <Textarea
              id="eraImagery"
              placeholder="Description of historical context images needed..."
              value={formData.eraImagery}
              onChange={(e) => updateField("eraImagery", e.target.value)}
              rows={2}
            />
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-end pt-4 border-t">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="outline" onClick={() => setShowPreview(true)}>
          <Eye className="w-4 h-4 mr-2" />
          Preview
        </Button>
        <Button onClick={handleSubmit}>
          <UserPlus className="w-4 h-4 mr-2" />
          Add to Council
        </Button>
      </div>
    </div>
  );
}