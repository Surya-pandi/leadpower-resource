import {
  Atom,
  Bot,
  Boxes,
  CircuitBoard,
  Factory,
  Gauge,
  HeartPulse,
  Layers3,
  Orbit,
  ShieldCheck,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Resource Models", href: "/resource-models" },
];

export type Capability = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  services: string[];
  icon: LucideIcon;
};

export const capabilities: Capability[] = [
  {
    slug: "mechanical",
    number: "01",
    title: "Mechanical Engineering",
    summary:
      "Precision product engineering from early architecture through manufacturing release.",
    services: [
      "Product Design",
      "CAD Engineering",
      "Manufacturing Engineering",
      "Design Validation",
      "Mechanical Analysis",
    ],
    icon: Orbit,
  },
  {
    slug: "electrical",
    number: "02",
    title: "Electrical Engineering",
    summary:
      "Robust electrical architectures engineered for performance, safety, and production.",
    services: [
      "Electrical Design",
      "Control Systems",
      "Wiring Architecture",
      "Power Systems",
      "Testing & Validation",
    ],
    icon: CircuitBoard,
  },
  {
    slug: "embedded",
    number: "03",
    title: "Embedded Systems",
    summary:
      "Hardware-aware software and integration expertise for intelligent products.",
    services: [
      "Embedded Software",
      "Firmware Development",
      "Hardware Validation",
      "Integration Engineering",
      "System Testing",
    ],
    icon: Atom,
  },
];

export const industries = [
  {
    number: "01",
    title: "High-Tech Capital Equipment",
    summary:
      "Engineering support for complex, precision-driven equipment and advanced manufacturing platforms.",
    icon: Bot,
  },
  {
    number: "02",
    title: "Medical Equipment",
    summary:
      "Disciplined engineering for reliable, testable, and safety-critical medical systems.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Industrial Equipment",
    summary:
      "Product and manufacturing expertise for durable, scalable industrial machinery.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Automotive",
    summary:
      "Cross-functional engineering for increasingly connected and electrified vehicle systems.",
    icon: Gauge,
  },
];

export const differentiators = [
  {
    title: "OEM-native thinking",
    copy: "We work inside product-development realities: quality gates, release cycles, validation, and manufacturing readiness.",
    icon: Boxes,
  },
  {
    title: "Specialists, precisely matched",
    copy: "Our focus is engineering depth. Every resource is aligned to the technical challenge and operating environment.",
    icon: Sparkles,
  },
  {
    title: "Integrated delivery",
    copy: "From a single critical specialist to a dedicated cross-functional team, we adapt without adding friction.",
    icon: Layers3,
  },
  {
    title: "Built for continuity",
    copy: "Structured knowledge transfer, transparent communication, and partnership models that protect momentum.",
    icon: ShieldCheck,
  },
];

export const resourceModels = [
  {
    number: "01",
    title: "Dedicated Engineers",
    copy: "Specialized experts embedded into your product organization, aligned to your tools, standards, and roadmap.",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "Project-Based Teams",
    copy: "Outcome-focused, cross-functional teams structured around a defined engineering work package.",
    icon: Boxes,
  },
  {
    number: "03",
    title: "Contract Engineering Resources",
    copy: "Rapid access to proven expertise when technical demand, capacity, or timelines shift.",
    icon: Gauge,
  },
  {
    number: "04",
    title: "Long-Term Partnerships",
    copy: "A scalable engineering extension built for sustained programs, evolving requirements, and continuity.",
    icon: Orbit,
  },
];
