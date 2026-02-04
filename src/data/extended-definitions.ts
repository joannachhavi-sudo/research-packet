// Extended definitions for "Learn More" modals
// Each term has a simple definition, more detail, and examples

export interface ExtendedDefinition {
  term: string;
  simpleDefinition: string;
  moreDetail: string;
  examples: string[];
}

export const extendedDefinitions: Record<string, ExtendedDefinition> = {
  // Main Card Terms
  "radical": {
    term: "Radical",
    simpleDefinition: "Someone who wants big, revolutionary changes to society",
    moreDetail: "A radical person believes the current system is deeply flawed and needs complete transformation, not just small improvements. In Mary Wollstonecraft's time, wanting women to have the same rights as men was considered radical because most people thought women were naturally inferior.",
    examples: [
      "Demanding votes for women (radical in 1790s)",
      "Arguing women should attend university",
      "Saying women should control their own money"
    ]
  },
  "reformer": {
    term: "Reformer",
    simpleDefinition: "A person who works to improve or change existing systems",
    moreDetail: "Reformers believe society can be improved through gradual changes rather than revolution. They work within existing systems to fix problems. Gandhi was a reformer who wanted India's independence but also tried to work with British authorities when possible.",
    examples: [
      "Advocating for new laws through petitions",
      "Working with government to change policies",
      "Organizing peaceful protests for change"
    ]
  },
  "intersectional": {
    term: "Intersectional",
    simpleDefinition: "Fighting against multiple types of discrimination at once (like caste AND gender)",
    moreDetail: "Intersectionality recognizes that people can face multiple forms of oppression at the same time. For example, a Dalit woman in India faced discrimination both for her caste AND for being a woman. Jyotirao Phule understood this and fought against both caste oppression and gender inequality together.",
    examples: [
      "A Dalit woman facing both caste and gender discrimination",
      "Fighting for girls' education when girls were denied schooling due to both gender and caste",
      "Recognizing that poor women face different challenges than wealthy women"
    ]
  },
  "constitutional": {
    term: "Constitutional",
    simpleDefinition: "Related to a country's fundamental laws and rights",
    moreDetail: "A constitution is the supreme law of a country that defines citizens' rights and how the government works. Constitutional rights are the most protected rights because they're written into this fundamental document. Dr. Ambedkar helped write India's Constitution to ensure equal rights for all citizens.",
    examples: [
      "The right to vote written into a country's constitution",
      "Freedom of speech as a constitutional right",
      "Equal protection under law for all citizens"
    ]
  },

  // General Historical Terms
  "philosopher": {
    term: "Philosopher",
    simpleDefinition: "A person who studies big questions about life, knowledge, and reality",
    moreDetail: "Philosophers try to understand fundamental questions: What is truth? What is justice? How should we live? They use reason and logic rather than experiments to explore these questions. Ancient Greek philosophers like Aristotle shaped how we think about ethics, politics, and science.",
    examples: [
      "Asking 'What makes an action right or wrong?'",
      "Exploring 'What does it mean to live a good life?'",
      "Debating 'How should society be organized?'"
    ]
  },
  "advocate": {
    term: "Advocate",
    simpleDefinition: "Someone who publicly supports and fights for a cause or group of people",
    moreDetail: "Advocates speak up on behalf of others who may not have a voice or platform. They use their position, knowledge, or influence to push for changes that will help the people or causes they support. Advocates can work through writing, speeches, organizing, or legal action.",
    examples: [
      "Speaking at public meetings about women's education",
      "Writing articles defending the rights of lower castes",
      "Organizing campaigns for legislative change"
    ]
  },
  "enlightenment": {
    term: "Enlightenment",
    simpleDefinition: "A historical movement (1700s) that valued reason, science, and individual rights",
    moreDetail: "The Enlightenment was an intellectual movement in 18th-century Europe that emphasized reason over tradition and religion. Enlightenment thinkers believed humans could use logic and science to improve society. They promoted ideas like natural rights, democracy, and education for all—ideas that influenced revolutions in America and France.",
    examples: [
      "Believing all humans have natural rights from birth",
      "Using scientific method instead of relying on superstition",
      "Arguing that education should be available to everyone"
    ]
  },
  "colonial rule": {
    term: "Colonial Rule",
    simpleDefinition: "When one country takes control of another country or region and governs it",
    moreDetail: "Colonial powers like Britain, France, and Spain conquered territories around the world and ruled them for their own benefit. The colonized people had little say in their own governance and were often exploited for resources and labor. India was under British colonial rule for nearly 200 years until independence in 1947.",
    examples: [
      "British rule over India from 1858-1947",
      "European powers dividing up Africa in the 1800s",
      "Spanish colonization of Central and South America"
    ]
  },
  "independence movement": {
    term: "Independence Movement",
    simpleDefinition: "An organized effort by people to free their country from foreign control",
    moreDetail: "Independence movements bring together people who want their country to govern itself rather than be ruled by a foreign power. These movements can use various methods: peaceful protests, civil disobedience, armed resistance, or political negotiation. India's independence movement included figures like Gandhi, Ambedkar, and many others.",
    examples: [
      "India's freedom struggle against British rule",
      "American Revolution against British control",
      "African independence movements in the 1960s"
    ]
  },
  "social reform": {
    term: "Social Reform",
    simpleDefinition: "Efforts to improve society by changing laws, customs, or practices",
    moreDetail: "Social reformers identify problems in society—like discrimination, poverty, or injustice—and work to fix them. This can involve changing laws, educating the public, or challenging harmful traditions. In 19th-century India, reformers like Phule and Ram Mohan Roy worked to end practices like child marriage and caste discrimination.",
    examples: [
      "Abolishing slavery",
      "Ending child marriage",
      "Establishing public education for girls"
    ]
  },
  "patriarchal": {
    term: "Patriarchal",
    simpleDefinition: "A society or system where men hold most of the power",
    moreDetail: "In patriarchal societies, men typically control political leadership, moral authority, social privilege, and property ownership. Women have fewer rights and less power. Most historical societies have been patriarchal, though the degree varies. Feminist movements challenge patriarchal systems to achieve gender equality.",
    examples: [
      "Only men being allowed to vote or own property",
      "Fathers having complete authority over family decisions",
      "Women needing male permission to work or travel"
    ]
  },
  "oppression": {
    term: "Oppression",
    simpleDefinition: "Cruel or unjust treatment that keeps people from having freedom or rights",
    moreDetail: "Oppression is the systematic mistreatment of a group of people by those in power. It can take many forms: legal discrimination, economic exploitation, social exclusion, or violence. Oppressed groups are denied basic rights and opportunities that others enjoy. Fighting oppression is central to movements for civil rights, women's rights, and caste equality.",
    examples: [
      "Denying education to certain groups",
      "Forcing people to work without fair wages",
      "Excluding people from public spaces based on their identity"
    ]
  },
  "discrimination": {
    term: "Discrimination",
    simpleDefinition: "Treating people unfairly because of their identity (gender, race, caste, etc.)",
    moreDetail: "Discrimination means treating people differently based on characteristics like their gender, race, caste, religion, or disability rather than their individual merits. It can be personal (individual prejudice) or systemic (built into laws and institutions). Anti-discrimination efforts aim to ensure everyone is treated fairly regardless of their identity.",
    examples: [
      "Refusing to hire women for certain jobs",
      "Not allowing Dalits to use public wells",
      "Paying people of different races different wages for the same work"
    ]
  },

  // Mary Wollstonecraft Terms
  "vindication": {
    term: "Vindication",
    simpleDefinition: "A strong defense or justification of something",
    moreDetail: "To vindicate means to clear from blame or prove something right. Wollstonecraft's famous book 'A Vindication of the Rights of Woman' was a passionate defense of women's right to education and equality. She was vindicating—defending and justifying—women's capacity for reason and their deserving of rights.",
    examples: [
      "Defending women's right to education against critics",
      "Proving that women are capable of rational thought",
      "Justifying why women deserve the same rights as men"
    ]
  },
  "femme covert": {
    term: "Femme Covert",
    simpleDefinition: "A legal rule where married women had no independent rights—everything belonged to their husbands",
    moreDetail: "Under 'femme covert' (French for 'covered woman'), a married woman's legal identity was 'covered' by her husband's. She couldn't own property, sign contracts, keep her own wages, or sue in court. Her husband controlled everything. This legal doctrine existed in England and America until the late 1800s. Wollstonecraft strongly criticized this system.",
    examples: [
      "A wife's inheritance automatically becoming her husband's property",
      "Women being unable to keep money they earned from work",
      "Husbands having legal right to 'correct' (punish) their wives"
    ]
  },
  "natural rights": {
    term: "Natural Rights",
    simpleDefinition: "Rights that all humans are believed to have just by being born, like freedom and equality",
    moreDetail: "Natural rights philosophy says certain rights come from being human, not from government. Thinkers like John Locke said life, liberty, and property were natural rights. Wollstonecraft argued that if men have natural rights, women must too—since both are equally human and equally capable of reason.",
    examples: [
      "The right to life and personal safety",
      "The right to liberty and freedom of thought",
      "The right to own property and control one's own labor"
    ]
  },
  "rational": {
    term: "Rational",
    simpleDefinition: "Based on reason and logical thinking rather than emotion or tradition",
    moreDetail: "Rationality means using logic, evidence, and careful thinking to understand the world and make decisions. Enlightenment thinkers valued rationality highly. Wollstonecraft's key argument was that women ARE rational beings capable of reason, contradicting those who claimed women were too emotional or simple-minded for education.",
    examples: [
      "Making decisions based on evidence rather than superstition",
      "Using logical arguments to persuade others",
      "Questioning traditions that don't make logical sense"
    ]
  },
  "rationally": {
    term: "Rationally",
    simpleDefinition: "Based on reason and logical thinking rather than emotion or tradition",
    moreDetail: "Acting rationally means making decisions through careful thought and logic rather than just following emotions or traditions. Wollstonecraft argued that women, when properly educated, could act as rationally as men in all areas of life.",
    examples: [
      "Analyzing a problem step-by-step before deciding",
      "Weighing pros and cons of different choices",
      "Questioning rules that don't have logical justification"
    ]
  },

  // Gandhi Terms
  "dharma": {
    term: "Dharma",
    simpleDefinition: "Religious and moral duty according to Hindu philosophy",
    moreDetail: "Dharma is a complex concept in Hinduism that refers to one's moral and religious duties, the right way of living, and the natural order of the universe. Different people have different dharmas based on their position in life. Gandhi believed in following one's dharma—doing one's duty—but he interpreted this broadly to include social service and fighting for justice.",
    examples: [
      "A student's dharma to study and learn",
      "A leader's dharma to serve and protect the people",
      "Everyone's dharma to be truthful and nonviolent"
    ]
  },
  "satyagraha": {
    term: "Satyagraha",
    simpleDefinition: "Non-violent resistance or 'truth-force'—fighting injustice without violence",
    moreDetail: "Gandhi coined the term 'satyagraha' combining 'satya' (truth) and 'agraha' (firmness/force). It means holding firmly to truth and justice through nonviolent means. Rather than fighting back with violence, satyagrahis accept suffering themselves to expose injustice. Gandhi used satyagraha in South Africa and India against colonial oppression.",
    examples: [
      "The Salt March—peacefully breaking unjust salt laws",
      "Hunger strikes to protest unfair treatment",
      "Refusing to obey unjust laws while accepting punishment"
    ]
  },
  "brahmacharya": {
    term: "Brahmacharya",
    simpleDefinition: "Practicing celibacy or sexual restraint for spiritual purposes",
    moreDetail: "Brahmacharya traditionally means celibacy, especially for students and spiritual seekers. Gandhi practiced brahmacharya from age 36, believing it gave him spiritual strength and self-control. He also believed it was necessary for those devoted to public service. This vow had implications for his views on women and marriage.",
    examples: [
      "Religious students avoiding romantic relationships to focus on study",
      "Spiritual leaders practicing celibacy as part of their devotion",
      "Gandhi's vow of celibacy to devote himself to public service"
    ]
  },
  "swaraj": {
    term: "Swaraj",
    simpleDefinition: "Self-rule or independence (both personal and political)",
    moreDetail: "Swaraj literally means 'self-rule' in Sanskrit. Gandhi used it to mean two things: political independence for India from British rule, AND personal self-discipline and self-governance. He believed true freedom required both—a free nation AND individuals who could govern themselves morally and spiritually.",
    examples: [
      "India governing itself rather than being ruled by Britain",
      "Individuals controlling their own desires and impulses",
      "Communities making decisions for themselves locally"
    ]
  },
  "ahimsa": {
    term: "Ahimsa",
    simpleDefinition: "Non-violence in thought, word, and action",
    moreDetail: "Ahimsa means 'not harming' and is a central principle in Hinduism, Buddhism, and Jainism. Gandhi made ahimsa central to his philosophy, extending it beyond just physical violence to include avoiding harmful words, thoughts, and economic exploitation. He believed ahimsa was the most powerful force for change.",
    examples: [
      "Refusing to use weapons even when attacked",
      "Speaking truthfully but kindly, without harsh words",
      "Not participating in systems that harm others economically"
    ]
  },
  "purdah": {
    term: "Purdah",
    simpleDefinition: "Practice of keeping women separate from men or in seclusion",
    moreDetail: "Purdah (meaning 'curtain' or 'veil') refers to practices that seclude women from public life or separate them from men. This can include wearing full-body coverings, living in separate quarters, or avoiding public spaces. While some defended it as protection for women, reformers like Gandhi (eventually) criticized it as limiting women's freedom.",
    examples: [
      "Women staying in separate sections of homes",
      "Women veiling their faces in public",
      "Women not being allowed in certain public spaces"
    ]
  },

  // Aristotle Terms
  "polis": {
    term: "Polis",
    simpleDefinition: "Greek city-state; the ideal community for human flourishing",
    moreDetail: "The polis (plural: poleis) was the basic political unit in ancient Greece—a city and its surrounding territory functioning as an independent state. Aristotle considered the polis the highest form of community, where humans could achieve their full potential through participation in civic life. Only citizens (free adult males) could fully participate.",
    examples: [
      "Athens as a famous Greek polis with its own government and laws",
      "Citizens debating and voting on community matters",
      "The polis providing education, courts, and public spaces"
    ]
  },
  "deliberative faculty": {
    term: "Deliberative Faculty",
    simpleDefinition: "The ability to think things through and make decisions",
    moreDetail: "Aristotle believed the deliberative faculty—the capacity to reason about choices and make decisions—was what made humans unique. He claimed women had this faculty but that it was 'without authority,' meaning women could reason but shouldn't make decisions. This was used to justify excluding women from political life. Modern thinkers reject this view as sexist.",
    examples: [
      "Weighing different options before choosing",
      "Considering consequences of actions",
      "Debating which policies are best for society"
    ]
  },
  "virtue ethics": {
    term: "Virtue Ethics",
    simpleDefinition: "Moral philosophy focused on developing good character rather than following rules",
    moreDetail: "Virtue ethics asks 'What kind of person should I be?' rather than 'What rules should I follow?' For Aristotle, virtues like courage, honesty, and justice are character traits developed through practice. A virtuous person does the right thing because it's become part of who they are, not just because of rules or consequences.",
    examples: [
      "Developing honesty by practicing truthfulness",
      "Becoming generous by regularly giving to others",
      "Building courage by facing fears gradually"
    ]
  },
  "teleology": {
    term: "Teleology",
    simpleDefinition: "The study of purpose or design in nature—the idea that everything has a natural purpose",
    moreDetail: "Teleology comes from the Greek 'telos' meaning 'end' or 'purpose.' Aristotle believed everything in nature has a purpose it's designed to fulfill. An acorn's purpose is to become an oak tree; a knife's purpose is to cut. He applied this to humans too—problematically claiming women's purpose was domestic while men's was public leadership.",
    examples: [
      "A seed's purpose to grow into a plant",
      "Eyes designed for the purpose of seeing",
      "Aristotle claiming humans are 'designed' for life in the polis"
    ]
  },
  "natural slavery": {
    term: "Natural Slavery",
    simpleDefinition: "Aristotle's belief that some people are naturally suited to be slaves (a deeply flawed idea)",
    moreDetail: "Aristotle argued some people are 'natural slaves' who lack the full capacity for reason and are better off being ruled by others. This idea was used for centuries to justify slavery and oppression. It is now universally rejected as morally wrong and scientifically baseless—there is no natural category of people suited for slavery.",
    examples: [
      "Aristotle claiming some people are 'living tools'",
      "Using this idea to justify conquest and enslavement",
      "Modern rejection: all humans have equal capacity for reason and deserve freedom"
    ]
  },
  "polymath": {
    term: "Polymath",
    simpleDefinition: "A person with expertise in many different subjects",
    moreDetail: "A polymath is someone whose knowledge spans many different fields. Aristotle was perhaps history's greatest polymath—he wrote about logic, physics, biology, ethics, politics, poetry, and more. Renaissance figures like Leonardo da Vinci were also polymaths. Today, increasing specialization makes polymaths rarer.",
    examples: [
      "Aristotle writing on biology, ethics, politics, and logic",
      "Leonardo da Vinci as artist, scientist, and engineer",
      "A modern scientist who also writes philosophy and plays music professionally"
    ]
  },

  // Jyotirao Phule Terms
  "caste system": {
    term: "Caste System",
    simpleDefinition: "A rigid social hierarchy in India that divides people into groups based on birth",
    moreDetail: "The caste system divides Hindu society into hereditary groups with different social statuses and occupations. At the top are Brahmins (priests/scholars), then Kshatriyas (warriors), Vaishyas (merchants), and Shudras (laborers). Below all these are Dalits ('untouchables'), considered outside the system entirely. One's caste is determined by birth and traditionally couldn't be changed.",
    examples: [
      "Being born into a particular occupation",
      "Not being allowed to marry outside one's caste",
      "Dalits being prohibited from using the same wells as upper castes"
    ]
  },
  "brahminical patriarchy": {
    term: "Brahminical Patriarchy",
    simpleDefinition: "A system where upper-caste men hold religious and social power",
    moreDetail: "Brahminical patriarchy describes how upper-caste (especially Brahmin) men controlled Indian society through both caste hierarchy and gender hierarchy. They had exclusive access to education, religious rituals, and property. Women and lower castes were kept subordinate through religious justifications. Phule and Ambedkar both fought against this double system of oppression.",
    examples: [
      "Only Brahmin men allowed to read sacred texts",
      "Women of all castes denied education",
      "Religious rules controlling what lower castes could wear, eat, and do"
    ]
  },
  "satyashodhak": {
    term: "Satyashodhak",
    simpleDefinition: "Truth-seeker; a member of Phule's reform organization",
    moreDetail: "The Satyashodhak Samaj ('Truth-Seekers' Society') was founded by Jyotirao Phule in 1873 to fight caste discrimination and promote education. Members rejected Brahmin religious authority, performed their own marriage ceremonies, and worked to educate lower castes and women. The movement was revolutionary in challenging the religious basis of caste.",
    examples: [
      "Conducting marriages without Brahmin priests",
      "Opening schools for Shudra and Dalit children",
      "Publishing books exposing the injustice of caste"
    ]
  },
  "shudra": {
    term: "Shudra",
    simpleDefinition: "The fourth group in traditional Indian caste hierarchy, considered 'lower caste'",
    moreDetail: "Shudras are the fourth varna (caste group) in the traditional Hindu system, traditionally assigned to serve the upper three castes. They were denied education, religious knowledge, and many rights. Phule himself was from a Shudra caste (mali/gardener) and dedicated his life to fighting for Shudra rights and dignity.",
    examples: [
      "Traditional occupations like farming, crafts, and service",
      "Being prohibited from studying religious texts",
      "Phule identifying himself proudly as a Shudra reformer"
    ]
  },
  "shudras": {
    term: "Shudras",
    simpleDefinition: "The fourth group in traditional Indian caste hierarchy, considered 'lower caste'",
    moreDetail: "Shudras are the fourth varna (caste group) in the traditional Hindu system, traditionally assigned to serve the upper three castes. They were denied education, religious knowledge, and many rights. Phule himself was from a Shudra caste (mali/gardener) and dedicated his life to fighting for Shudra rights and dignity.",
    examples: [
      "Traditional occupations like farming, crafts, and service",
      "Being prohibited from studying religious texts",
      "Phule identifying himself proudly as a Shudra reformer"
    ]
  },
  "ati-shudra": {
    term: "Ati-Shudra",
    simpleDefinition: "People outside the caste system entirely; also called 'untouchables' or Dalits",
    moreDetail: "Ati-Shudras (meaning 'below Shudras') were considered so low they were outside the caste system entirely. They were forced into occupations considered 'polluting' (like handling dead animals or cleaning latrines) and faced extreme discrimination—forbidden from temples, schools, and public wells. Today they prefer the term 'Dalit' (meaning 'broken' or 'oppressed').",
    examples: [
      "Being forced to live outside villages",
      "Upper castes refusing to touch or be near them",
      "Being denied access to public water sources"
    ]
  },
  "gulamgiri": {
    term: "Gulamgiri",
    simpleDefinition: "Slavery; Phule's term for how the caste system enslaved people",
    moreDetail: "Gulamgiri means 'slavery' in Marathi. Phule wrote a powerful book called 'Gulamgiri' (1873) comparing the caste system to slavery. He argued that just as American slavery was wrong, so was the 'slavery' of lower castes in India. He dedicated the book to Americans who had fought to end slavery, drawing a direct connection between these struggles.",
    examples: [
      "Lower castes forced to work without fair payment",
      "No freedom to choose one's occupation or spouse",
      "Religious justifications used to keep people in servitude"
    ]
  },

  // Ambedkar Terms
  "dalit": {
    term: "Dalit",
    simpleDefinition: "Term meaning 'broken' or 'oppressed'; the preferred term for those formerly called 'untouchables'",
    moreDetail: "Dalit is the self-chosen name for those historically called 'untouchables' or 'outcastes.' The word means 'broken' or 'crushed' in Marathi, reflecting the oppression this community has faced. Dr. Ambedkar, himself a Dalit, became their greatest champion, fighting for their rights through education, law, and politics.",
    examples: [
      "Ambedkar founding the Independent Labour Party for Dalits",
      "Dalit movements demanding access to temples and public spaces",
      "Constitutional protections for Dalits in independent India"
    ]
  },
  "dalits": {
    term: "Dalits",
    simpleDefinition: "Term meaning 'broken' or 'oppressed'; the preferred term for those formerly called 'untouchables'",
    moreDetail: "Dalits is the self-chosen name for those historically called 'untouchables' or 'outcastes.' The word means 'broken' or 'crushed' in Marathi, reflecting the oppression this community has faced. Dr. Ambedkar, himself a Dalit, became their greatest champion, fighting for their rights through education, law, and politics.",
    examples: [
      "Ambedkar founding the Independent Labour Party for Dalits",
      "Dalit movements demanding access to temples and public spaces",
      "Constitutional protections for Dalits in independent India"
    ]
  },
  "hindu code bill": {
    term: "Hindu Code Bill",
    simpleDefinition: "A comprehensive law reform that gave Hindu women rights in marriage, divorce, and property",
    moreDetail: "The Hindu Code Bill was a set of laws Ambedkar championed as Law Minister that revolutionized Hindu family law. It gave women rights to divorce, inherit property, and choose their spouses. It also abolished caste restrictions on marriage. Though controversial and passed in parts after Ambedkar resigned, it transformed the legal status of Hindu women.",
    examples: [
      "Women gaining the right to divorce abusive husbands",
      "Daughters inheriting property equally with sons",
      "Legal recognition of inter-caste marriages"
    ]
  },
  "constitutional morality": {
    term: "Constitutional Morality",
    simpleDefinition: "Following constitutional principles over traditional customs or religious rules",
    moreDetail: "Constitutional morality means being guided by the values in the constitution—equality, liberty, fraternity—even when they conflict with tradition or popular opinion. Ambedkar emphasized this because he knew that without it, a democratic constitution could be undermined by social prejudices. It means putting constitutional rights above religious or caste customs.",
    examples: [
      "Upholding equality even if traditions say some groups are 'lower'",
      "Protecting minority rights against majority tyranny",
      "Following legal processes even when they're inconvenient"
    ]
  },
  "annihilation of caste": {
    term: "Annihilation of Caste",
    simpleDefinition: "Ambedkar's vision of completely destroying the caste system",
    moreDetail: "'Annihilation of Caste' is Ambedkar's famous 1936 speech (published as a book) arguing that caste cannot simply be reformed—it must be completely destroyed. He argued that caste is rooted in Hindu religious texts and cannot end without rejecting those texts. This radical position put him in conflict with Gandhi, who wanted to reform caste but preserve Hindu tradition.",
    examples: [
      "Rejecting the religious basis for caste hierarchy",
      "Calling for inter-caste marriage to break down caste barriers",
      "Arguing that 'untouchability' cannot be ended without ending caste itself"
    ]
  },
  "separate electorate": {
    term: "Separate Electorate",
    simpleDefinition: "A political system where minorities vote separately to ensure their representation",
    moreDetail: "In a separate electorate system, members of a minority group vote only for candidates from their own group, ensuring they get representatives who truly represent them. Ambedkar demanded this for Dalits, fearing they would never get fair representation if they had to rely on upper-caste voters. The Poona Pact (1932) with Gandhi replaced this with reserved seats.",
    examples: [
      "Dalits voting for Dalit-only candidates in special constituencies",
      "Ensuring minority communities have guaranteed representatives",
      "The debate between separate electorates vs. reserved seats"
    ]
  },
  "jurist": {
    term: "Jurist",
    simpleDefinition: "An expert in law; a legal scholar",
    moreDetail: "A jurist is someone with deep knowledge of law—a legal scholar, judge, or lawyer of great learning. Ambedkar was one of India's greatest jurists, with law degrees from Columbia, the London School of Economics, and Gray's Inn. His legal expertise was essential in drafting India's Constitution and reforming discriminatory laws.",
    examples: [
      "Ambedkar chairing the Constitution Drafting Committee",
      "Legal scholars who interpret and analyze laws",
      "Judges known for their deep understanding of legal principles"
    ]
  }
};

// Get extended definition for a term
export function getExtendedDefinition(term: string): ExtendedDefinition | undefined {
  const lowerTerm = term.toLowerCase();
  return extendedDefinitions[lowerTerm];
}

// Check if a term has an extended definition
export function hasExtendedDefinition(term: string): boolean {
  return getExtendedDefinition(term) !== undefined;
}
