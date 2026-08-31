/**
 * Single source of truth for every word and number on the site.
 *
 * ---------------------------------------------------------------------------
 * BEFORE DEPLOYING: fill in every value written as "[Add ...]".
 * Placeholders render as non-clickable, visibly-dashed text instead of broken
 * links, so nothing ships as a dead URL or an invented fact.
 * ---------------------------------------------------------------------------
 */

export const PLACEHOLDER_PREFIX = "[Add";

export function isPlaceholder(value: string | undefined | null): boolean {
  return !value || value.trim().startsWith(PLACEHOLDER_PREFIX);
}

export const site = {
  name: "Krish Desai",
  role: "Full-Stack AI Engineer",
  url: "https://desaikrish.com",
  locale: "en_US",
  title: "Krish Desai | Full-Stack AI Engineer & Automation Consultant",
  description:
    "Krish Desai, full-stack AI engineer building SaaS products, AI agents, n8n automation workflows, and healthcare EHR integrations for startups and businesses.",
  keywords: [
    "Full Stack AI Engineer",
    "AI Automation Engineer",
    "AI Agent Developer",
    "n8n Automation Developer",
    "Healthcare AI Engineer",
    "AI Integration Consultant",
    "SaaS Developer",
    "Full Stack Developer",
    "AI Powered Software",
    "AI Healthcare",
    "AI Voice Agents",
    "EHR Integration",
    "GoHighLevel Automation",
    "RAG Developer",
    "LLM Integration",
    "Next.js Developer",
    "Workflow Automation Consultant",
  ],
} as const;

export const profile = {
  email: "[Add email address]",
  github: "https://github.com/dkcoder02",
  linkedin: "https://www.linkedin.com/in/krishdesai117/",
} as const;

/**
 * Wordmark shown in the header only. site.name stays "Krish Desai" everywhere
 * that identity matters: page title, footer, Open Graph, and JSON-LD.
 */
export const navBrand = "AI Software";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Products", href: "#products" },
  { label: "Consulting", href: "#book" },
  { label: "Contact", href: "#contact" },
] as const;

export const focus = {
  label: "Focused on",
  phrases: ["AI Powered Software", "AI Healthcare"],
  body: "Two areas where I do my deepest work: products with intelligence built into them, and the clinical systems and patient workflows that healthcare runs on.",
} as const;

export const hero = {
  name: "Krish Desai",
  headline: "I build software that thinks, automates, and scales.",
  body: "Full-stack AI engineer building SaaS products, intelligent agents, healthcare automation, and production systems for startups and businesses.",
  primaryCta: { label: "View my work", href: "#products" },
  secondaryCta: { label: "Let's work together", href: "#contact" },
  disciplines: ["Full-Stack", "AI", "SaaS", "Automation", "Healthcare", "APIs"],
} as const;


export const engagements = [
  {
    index: "01",
    title: "Build a SaaS MVP",
    rating: "5.0",
    quote:
      "Krish is an incredible engineer. He helped me build the first version of my MVP. He was fast, strong technically and a good communicator.",
    attribution: "",
  },
  {
    index: "02",
    title: "Healthcare Automation, n8n, EHR Integration",
    rating: "5.0",
    quote:
      "Working with Krish has been awesome! Definitely the best developer that I have ever worked with, super knowledgeable in the automations space, easy to communicate with and very effective.",
    attribution: "",
  },
] as const;

export const expertise = [
  {
    index: "01",
    title: "Full-Stack Product Engineering",
    summary: "Complete products, from the data model to the screen a customer uses.",
    featured: false,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "AWS",
      "Supabase",
      "Authentication",
      "Multi-tenant SaaS",
      "Dashboards",
      "Web applications",
      "Mobile applications",
    ],
  },
  {
    index: "02",
    title: "AI Engineering",
    summary: "Model-backed features that hold up against real inputs and real users.",
    featured: false,
    skills: [
      "OpenAI APIs",
      "Claude APIs",
      "AI agents",
      "Agentic workflows",
      "RAG",
      "AI chat systems",
      "AI-powered SaaS",
      "LLM integrations",
      "Tool calling",
      "Structured outputs",
      "AI application architecture",
    ],
  },
  {
    index: "03",
    title: "AI Automation",
    summary: "Business processes wired together so they run without a person in the loop.",
    featured: false,
    skills: [
      "n8n",
      "Zapier",
      "Claude AI Automation",
      "Webhooks",
      "REST APIs",
      "JSON transformation",
      "Workflow orchestration",
      "Error handling",
      "Retry logic",
      "Notifications",
      "CRM automation",
      "EHR integrations",
      "Business process automation",
    ],
  },
  {
    index: "04",
    title: "Healthcare Technology",
    summary: "A specialization: clinical systems, patient workflows, and the care they require.",
    featured: true,
    skills: [
      "Healthcare workflows",
      "EHR integrations",
      "Patient onboarding automation",
      "Practice management integrations",
      "Healthcare APIs",
      "Secure data workflows",
      "HIPAA-conscious architecture",
      "Healthcare AI automation",
    ],
  },
  {
    index: "05",
    title: "Voice AI",
    summary: "Conversational systems that take action, not just answer questions.",
    featured: false,
    skills: [
      "AI voice agents",
      "Conversational AI",
      "Voice workflows",
      "API integrations",
      "Automated calling workflows",
    ],
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Understand",
    body: "Understand the business problem and the user workflow before writing anything.",
  },
  {
    step: "02",
    title: "Architect",
    body: "Design the system, integrations, data model, and AI architecture.",
  },
  {
    step: "03",
    title: "Build",
    body: "Develop the product with scalable engineering practices.",
  },
  {
    step: "04",
    title: "Integrate",
    body: "Connect APIs, AI models, automation platforms, and external systems.",
  },
  {
    step: "05",
    title: "Ship",
    body: "Deploy, monitor, test, document, and iterate.",
  },
] as const;

export const systems = {
  title: "I think in systems.",
  intro:
    "Most of the hard part is not the screen. It is what sits behind it: where state lives, what talks to what, and what happens when one piece fails.",
  columns: [
    {
      label: "Product",
      nodes: ["User", "Web / Mobile App", "API Layer", "Application Logic", "Database"],
    },
    {
      label: "Intelligence",
      nodes: ["AI Models", "Agent Layer", "Tools / APIs", "Automation", "External Systems"],
    },
  ],
  loop: {
    label: "Healthcare sync",
    nodes: ["CRM", "n8n", "EHR"],
  },
} as const;

export const about = {
  paragraphs: [
    "I'm Krish Desai, a software engineer with 5+ years of experience building full-stack applications and AI-powered software.",
    "Over the last few years, my work has moved beyond traditional web development into AI agents, automation, SaaS products, voice AI, and healthcare technology.",
    "I enjoy working close to the product: understanding the problem, designing the architecture, writing the software, integrating external systems, and getting the product into production.",
    "Alongside client work, I build my own products to explore ideas and turn engineering experience into real software.",
  ],
} as const;

export const builder = {
  title: "I don't just build for clients.",
  body: "I build my own products to test ideas, learn faster, and understand what it takes to take software from an idea to a real product.",
  products: [
    {
      name: "UptimeRobot.app",
      url: "https://uptimerobot.app/",
      domain: "uptimerobot.app",
      description:
        "Monitoring SaaS that runs scheduled checks against endpoints and services, records status over time, and notifies the right people when something breaks or recovers.",
    },
    {
      name: "AgenticOverflow",
      url: "https://agenticoverflow.app/",
      domain: "agenticoverflow.app",
      description:
        "An AI product built around agentic workflows: models, tools, and automation composed into something people can actually use.",
    },
  ],
} as const;


export const booking = {
  label: "Consulting",
  title: "Book a 30 minute call",
  body: "If you are adding AI to a SaaS product, automating a workflow, or deciding what to build first, a short call is usually faster than a long email thread. Bring the problem and we will talk through the architecture and what it takes to ship.",
  url: "https://cal.com/krish-desai-ai/30min",
  cta: "Book a 30 minute call",
  topicsLabel: "What we can cover",
  topics: [
    "Adding AI to an existing SaaS product",
    "Choosing between agents, RAG, and direct model calls",
    "Automation workflows across the tools you already run",
    "Integrating external systems, APIs, and webhooks",
    "Healthcare and EHR integration questions",
    "Scoping an MVP, and what it takes to ship it",
  ],
  meta: [
    { label: "Length", value: "30 minutes" },
    { label: "Format", value: "Video call" },
    { label: "Good for", value: "Founders, CTOs, product teams" },
  ],
  note: "You will leave with a concrete recommendation on approach and scope.",
} as const;

export const contact = {
  title: "Have a product or workflow worth building?",
  body: "If you're building an AI product, SaaS platform, healthcare solution, or business automation system, I'd be happy to discuss the architecture and implementation.",
} as const;
