// Vocabulary definitions for complex terms
// Used by VocabTooltip component throughout the application

export const vocabularyDefinitions: Record<string, string> = {
  // Main Card Tooltips
  "radical": "Someone who wants big, revolutionary changes to society",
  "reformer": "A person who works to improve or change existing systems",
  "intersectional": "Fighting against multiple types of discrimination at once (like caste AND gender)",
  "constitutional": "Related to a country's fundamental laws and rights",

  // General Terms (for main page)
  "philosopher": "A person who studies big questions about life, knowledge, and reality",
  "advocate": "Someone who publicly supports and fights for a cause or group of people",

  // General Historical Terms
  "enlightenment": "A historical movement (1700s) that valued reason, science, and individual rights",
  "colonial rule": "When one country takes control of another country or region and governs it",
  "independence movement": "An organized effort by people to free their country from foreign control",
  "social reform": "Efforts to improve society by changing laws, customs, or practices",
  "patriarchal": "A society or system where men hold most of the power",
  "oppression": "Cruel or unjust treatment that keeps people from having freedom or rights",
  "discrimination": "Treating people unfairly because of their identity (gender, race, caste, etc.)",

  // Mary Wollstonecraft Profile Tooltips
  "vindication": "A strong defense or justification of something",
  "femme covert": "A legal rule where married women had no independent rights—everything belonged to their husbands",
  "natural rights": "Rights that all humans are believed to have just by being born, like freedom and equality",
  "rational": "Based on reason and logical thinking rather than emotion or tradition",
  "rationally": "Based on reason and logical thinking rather than emotion or tradition",

  // Mahatma Gandhi Profile Tooltips
  "dharma": "Religious and moral duty according to Hindu philosophy",
  "satyagraha": "Non-violent resistance or \"truth-force\"—fighting injustice without violence",
  "brahmacharya": "Practicing celibacy or sexual restraint for spiritual purposes",
  "swaraj": "Self-rule or independence (both personal and political)",
  "ahimsa": "Non-violence in thought, word, and action",
  "purdah": "Practice of keeping women separate from men or in seclusion",

  // Aristotle Profile Tooltips
  "polis": "Greek city-state; the ideal community for human flourishing",
  "deliberative faculty": "The ability to think things through and make decisions",
  "virtue ethics": "Moral philosophy focused on developing good character rather than following rules",
  "teleology": "The study of purpose or design in nature—the idea that everything has a natural purpose",
  "natural slavery": "Aristotle's belief that some people are naturally suited to be slaves (a deeply flawed idea)",
  "polymath": "A person with expertise in many different subjects",

  // Jyotirao Phule Profile Tooltips
  "caste system": "A rigid social hierarchy in India that divides people into groups based on birth",
  "brahminical patriarchy": "A system where upper-caste men hold religious and social power",
  "satyashodhak": "Truth-seeker; a member of Phule's reform organization",
  "shudra": "The fourth group in traditional Indian caste hierarchy, considered \"lower caste\"",
  "shudras": "The fourth group in traditional Indian caste hierarchy, considered \"lower caste\"",
  "ati-shudra": "People outside the caste system entirely; also called \"untouchables\" or Dalits",
  "gulamgiri": "Slavery; Phule's term for how the caste system enslaved people",

  // Dr. B.R. Ambedkar Profile Tooltips
  "dalit": "Term meaning \"broken\" or \"oppressed\"; the preferred term for those formerly called \"untouchables\"",
  "dalits": "Term meaning \"broken\" or \"oppressed\"; the preferred term for those formerly called \"untouchables\"",
  "hindu code bill": "A comprehensive law reform that gave Hindu women rights in marriage, divorce, and property",
  "constitutional morality": "Following constitutional principles over traditional customs or religious rules",
  "annihilation of caste": "Ambedkar's vision of completely destroying the caste system",
  "separate electorate": "A political system where minorities vote separately to ensure their representation",
  "jurist": "An expert in law; a legal scholar",
};

// Helper function to get definition (case-insensitive)
export function getDefinition(term: string): string | undefined {
  const lowerTerm = term.toLowerCase();
  return vocabularyDefinitions[lowerTerm];
}

// Check if a term has a definition
export function hasDefinition(term: string): boolean {
  return getDefinition(term) !== undefined;
}
