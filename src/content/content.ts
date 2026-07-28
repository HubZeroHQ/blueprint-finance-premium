export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  promise: string;
  audience: string;
  image: string;
  imageAlt: string;
  capabilities: Array<{
    title: string;
    description: string;
  }>;
  process: Array<{
    title: string;
    description: string;
  }>;
  relatedInsight: string;
}

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  published: string;
  readTime: string;
  image: string;
  imageAlt: string;
  introduction: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
}

export const services: Service[] = [
  {
    slug: "wealth-management",
    title: "Private Wealth Management",
    shortTitle: "Wealth Management",
    summary:
      "Coordinated stewardship that brings investing, planning, tax strategy, and family priorities into one view.",
    promise: "A financial plan that moves with your life.",
    audience:
      "For families and founders who want one accountable team across the decisions that shape their wealth.",
    image: "/images/service-wealth.webp",
    imageAlt:
      "Advisor arranging planning documents and material samples on a stone table",
    capabilities: [
      {
        title: "Integrated financial planning",
        description:
          "We connect cash flow, tax exposure, estate structures, insurance, and major life decisions.",
      },
      {
        title: "Portfolio stewardship",
        description:
          "Your investment strategy reflects the purpose, timing, and risk capacity of each pool of capital.",
      },
      {
        title: "Decision coordination",
        description:
          "We work alongside your legal and tax professionals so important decisions are considered together.",
      },
      {
        title: "Family continuity",
        description:
          "Clear reporting and thoughtful education help each generation participate with confidence.",
      },
    ],
    process: [
      {
        title: "Understand",
        description:
          "We begin with your family, obligations, ambitions, and current financial architecture.",
      },
      {
        title: "Align",
        description:
          "We establish priorities, model trade-offs, and define a coordinated strategy.",
      },
      {
        title: "Steward",
        description:
          "We implement, monitor, and revisit the plan as markets and circumstances change.",
      },
    ],
    relatedInsight: "family-investment-policy",
  },
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    shortTitle: "Investment Advisory",
    summary:
      "Research-led portfolio design grounded in your objectives, time horizon, and real capacity for risk.",
    promise: "Investment discipline without market theater.",
    audience:
      "For individuals, families, trusts, and organizations seeking a durable investment policy and clear oversight.",
    image: "/images/service-investment.webp",
    imageAlt:
      "Layered topographic papers and an investment notebook in natural light",
    capabilities: [
      {
        title: "Investment policy",
        description:
          "We define objectives, liquidity needs, constraints, governance, and a practical rebalancing framework.",
      },
      {
        title: "Portfolio architecture",
        description:
          "Public and private investments are evaluated as one portfolio, with each allocation assigned a clear role.",
      },
      {
        title: "Manager research",
        description:
          "We assess process, incentives, team stability, fees, and the conditions under which a strategy may disappoint.",
      },
      {
        title: "Risk oversight",
        description:
          "Reporting focuses on exposures, liquidity, concentration, and progress toward the objectives that matter.",
      },
    ],
    process: [
      {
        title: "Define the mandate",
        description:
          "We document the portfolio's purpose before discussing products or allocations.",
      },
      {
        title: "Build deliberately",
        description:
          "Each holding must improve expected outcomes or make the total portfolio more resilient.",
      },
      {
        title: "Review with context",
        description:
          "Performance is judged against the mandate, the market environment, and the role of each allocation.",
      },
    ],
    relatedInsight: "staying-invested",
  },
  {
    slug: "retirement-planning",
    title: "Retirement Planning",
    shortTitle: "Retirement Planning",
    summary:
      "A practical transition from earning and accumulating to spending, giving, and living with confidence.",
    promise: "Turn accumulated wealth into a dependable plan.",
    audience:
      "For executives, business owners, and families approaching or already navigating retirement.",
    image: "/images/service-retirement.webp",
    imageAlt:
      "A quiet coastal path viewed through soft morning light",
    capabilities: [
      {
        title: "Income design",
        description:
          "We map dependable income, flexible withdrawals, and reserves for changing needs.",
      },
      {
        title: "Tax-aware sequencing",
        description:
          "Account types, realized gains, charitable plans, and future distributions are coordinated over time.",
      },
      {
        title: "Healthcare planning",
        description:
          "We incorporate coverage decisions and potential long-term care costs into the broader plan.",
      },
      {
        title: "Legacy choices",
        description:
          "Gifts, estate structures, and family conversations become part of the retirement plan, not an afterthought.",
      },
    ],
    process: [
      {
        title: "Frame the life ahead",
        description:
          "We clarify the experiences, commitments, and flexibility you want retirement to support.",
      },
      {
        title: "Test the plan",
        description:
          "We examine different market, inflation, spending, and longevity conditions.",
      },
      {
        title: "Adapt over time",
        description:
          "The plan is reviewed as life changes, with clear decisions rather than constant activity.",
      },
    ],
    relatedInsight: "planning-liquidity",
  },
  {
    slug: "family-office-services",
    title: "Family Office Services",
    shortTitle: "Family Office",
    summary:
      "A coordinated advisory structure for complex family wealth, governance, reporting, and continuity.",
    promise: "Complexity made governable.",
    audience:
      "For multigenerational families who need disciplined coordination without building a standalone office.",
    image: "/images/service-family.webp",
    imageAlt:
      "Bound archival documents and handwritten notes arranged for a family meeting",
    capabilities: [
      {
        title: "Consolidated oversight",
        description:
          "Assets, entities, advisors, cash flows, and obligations are organized into one decision framework.",
      },
      {
        title: "Family governance",
        description:
          "We help families define roles, meeting practices, shared principles, and methods for resolving decisions.",
      },
      {
        title: "Next-generation education",
        description:
          "Education is paced to each family member's experience and responsibilities.",
      },
      {
        title: "Philanthropic strategy",
        description:
          "Giving structures and grant decisions are aligned with the family's values and long-term intent.",
      },
    ],
    process: [
      {
        title: "Map the system",
        description:
          "We document entities, ownership, advisors, information flows, and current decision rights.",
      },
      {
        title: "Create the cadence",
        description:
          "We establish clear reporting, meetings, responsibilities, and escalation paths.",
      },
      {
        title: "Support continuity",
        description:
          "Governance and education evolve as the family and its responsibilities change.",
      },
    ],
    relatedInsight: "family-investment-policy",
  },
  {
    slug: "institutional-advisory",
    title: "Institutional Advisory",
    shortTitle: "Institutional Advisory",
    summary:
      "Investment governance and portfolio advice for foundations, endowments, and mission-led organizations.",
    promise: "A stronger connection between mission and capital.",
    audience:
      "For boards and investment committees that want rigorous advice, clear reporting, and better decisions.",
    image: "/images/service-institutional.webp",
    imageAlt:
      "Board meeting materials arranged in a bright, quiet conference room",
    capabilities: [
      {
        title: "Governance design",
        description:
          "Committee charters, delegated authority, policy, and meeting materials support accountable decisions.",
      },
      {
        title: "Asset allocation",
        description:
          "Portfolio structure reflects spending needs, mission, liquidity, and the organization's tolerance for uncertainty.",
      },
      {
        title: "Implementation support",
        description:
          "Manager selection, transitions, custody coordination, and reporting are managed with clear responsibilities.",
      },
      {
        title: "Committee education",
        description:
          "Concise education gives every committee member the context needed to contribute.",
      },
    ],
    process: [
      {
        title: "Clarify fiduciary priorities",
        description:
          "We align the board, committee, and staff around mandate, risk, and decision rights.",
      },
      {
        title: "Strengthen the portfolio",
        description:
          "Policy and implementation are evaluated together, including fees and operational complexity.",
      },
      {
        title: "Make oversight useful",
        description:
          "Reporting focuses meetings on decisions, exceptions, and progress rather than data volume.",
      },
    ],
    relatedInsight: "staying-invested",
  },
];

export const insights: Insight[] = [
  {
    slug: "staying-invested",
    title: "The discipline of staying invested through uncertain markets",
    excerpt:
      "A sound investment policy gives uncertainty a place in the plan before it appears in the headlines.",
    category: "Investment perspective",
    published: "July 16, 2026",
    readTime: "6 min read",
    image: "/images/insight-markets.webp",
    imageAlt:
      "Topographic papers and textured portfolio materials in natural light",
    introduction:
      "Market uncertainty is not an interruption to investing. It is one of the conditions a durable portfolio must be designed to withstand.",
    sections: [
      {
        heading: "A policy is most valuable when confidence is scarce",
        paragraphs: [
          "Investors often treat a written policy as administrative work. Its real value appears when markets make every choice feel urgent. A useful policy documents what the portfolio is for, which risks are acceptable, and what evidence would justify a change.",
          "That discipline separates a change in price from a change in the investment case. It also gives families and committees a shared point of reference when emotions and opinions diverge.",
        ],
      },
      {
        heading: "Liquidity creates patience",
        paragraphs: [
          "The ability to remain invested begins outside the growth portfolio. Near-term spending, taxes, capital calls, and major commitments need their own funding plan. When those obligations are secure, long-term assets have more time to recover and compound.",
          "This is why portfolio design and financial planning should not be separated. A target allocation that ignores the timing of real cash needs is incomplete.",
        ],
      },
      {
        heading: "Rebalance with purpose",
        paragraphs: [
          "Rebalancing should restore the portfolio to its intended risk, not express a short-term forecast. The process can be calendar-based, threshold-based, or a combination of both, but the rules should be understood before stress arrives.",
          "A measured process will never remove discomfort. It can prevent discomfort from becoming an unplanned strategy.",
        ],
      },
    ],
  },
  {
    slug: "planning-liquidity",
    title: "Planning liquidity before a business transition",
    excerpt:
      "Early alignment across capital, tax, and family priorities creates more options when timing matters.",
    category: "Founder planning",
    published: "June 24, 2026",
    readTime: "7 min read",
    image: "/images/insight-liquidity.webp",
    imageAlt:
      "Organized planning papers beside a bound notebook and fountain pen",
    introduction:
      "A business transition concentrates years of decisions into a short period. The strongest plans begin before the transaction structure is fixed.",
    sections: [
      {
        heading: "Start with the life the capital must support",
        paragraphs: [
          "A transaction value is not a financial plan. Founders need a view of future spending, family commitments, taxes, philanthropy, reinvestment, and the level of flexibility they want to preserve.",
          "That view creates a practical minimum outcome and helps distinguish essential capital from capital that can remain at risk.",
        ],
      },
      {
        heading: "Coordinate advisors early",
        paragraphs: [
          "Legal, tax, investment, and transaction advice often arrive from different professionals. Important opportunities can be lost when each discipline works from a different set of assumptions.",
          "A shared decision calendar and clear ownership reduce last-minute changes and help the founder understand which choices are reversible.",
        ],
      },
      {
        heading: "Prepare for the emotional transition",
        paragraphs: [
          "Liquidity changes a balance sheet quickly. Identity, routine, and family expectations may take longer to adjust. A measured investment schedule can create space for thoughtful decisions without leaving near-term needs exposed.",
          "The objective is not to deploy capital as quickly as possible. It is to establish a structure the family can understand and live with.",
        ],
      },
    ],
  },
  {
    slug: "family-investment-policy",
    title: "What a family investment policy should clarify",
    excerpt:
      "A useful policy defines purpose, risk, decision rights, and the conditions that deserve a review.",
    category: "Family governance",
    published: "May 29, 2026",
    readTime: "5 min read",
    image: "/images/insight-policy.webp",
    imageAlt:
      "Archival family documents arranged beside a textured green folio",
    introduction:
      "A family investment policy is both a portfolio document and a governance tool. Its value depends on whether people can use it to make decisions.",
    sections: [
      {
        heading: "Define purpose before allocation",
        paragraphs: [
          "Capital may support current spending, future generations, philanthropy, entrepreneurship, or several goals at once. Each purpose has a different time horizon and different tolerance for loss.",
          "Separating these purposes creates a clearer foundation for allocation and makes trade-offs easier to explain.",
        ],
      },
      {
        heading: "Name the decision makers",
        paragraphs: [
          "A policy should state what the family decides, what an investment committee decides, and what can be delegated to an advisor. It should also explain how exceptions are documented.",
          "Clarity matters most during periods of disagreement, transition, or urgency.",
        ],
      },
      {
        heading: "Make review conditions explicit",
        paragraphs: [
          "A policy should not change because markets are uncomfortable. It should be reviewed when the family's objectives, liquidity, tax position, governance, or ability to bear risk have changed.",
          "Scheduled reviews create a healthy cadence. Event-driven reviews make sure the policy remains connected to real life.",
        ],
      },
    ],
  },
];

export const leadership = [
  {
    name: "Mara Ellison",
    role: "Chief Executive Officer",
    image: "/images/mara-ellison.webp",
    alt: "Portrait of Mara Ellison, fictional Chief Executive Officer",
    bio: "Mara guides Aurevia's client experience and long-term direction. Her work centers on helping families connect capital with purpose, governance, and continuity.",
  },
  {
    name: "Dev Malik",
    role: "Chief Investment Officer",
    image: "/images/dev-malik.webp",
    alt: "Portrait of Dev Malik, fictional Chief Investment Officer",
    bio: "Dev leads investment research and portfolio strategy. He brings a policy-first approach to allocation, manager selection, and risk oversight.",
  },
  {
    name: "Elena Park",
    role: "Head of Family Advisory",
    image: "/images/elena-park.webp",
    alt: "Portrait of Elena Park, fictional Head of Family Advisory",
    bio: "Elena helps families navigate complex decisions across generations, with a focus on governance, education, and thoughtful communication.",
  },
  {
    name: "Jonah Reed",
    role: "Head of Institutional Advisory",
    image: "/images/jonah-reed.webp",
    alt: "Portrait of Jonah Reed, fictional Head of Institutional Advisory",
    bio: "Jonah advises boards and investment committees on governance, policy, and portfolio implementation for mission-led pools of capital.",
  },
] as const;

export const values = [
  {
    title: "Clarity before activity",
    description:
      "We define the decision and its purpose before recommending a product or transaction.",
  },
  {
    title: "Alignment without ambiguity",
    description:
      "Our advice is organized around client objectives, with fees and responsibilities explained plainly.",
  },
  {
    title: "Discipline with perspective",
    description:
      "We prepare for uncertainty rather than pretending it can be forecast away.",
  },
  {
    title: "Stewardship across generations",
    description:
      "Good advice should make the next decision, and the next generation, more capable.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Aurevia gave our family a common language for decisions we had postponed for years.",
    name: "Camille and Rowan Mercer",
    context: "Founders and private clients",
  },
  {
    quote:
      "The team brings rigor without turning every meeting into a lesson in financial jargon.",
    name: "Leila Moreno",
    context: "Foundation board chair",
  },
] as const;

export const faqs = [
  {
    question: "Who does Aurevia Capital serve?",
    answer:
      "We work with families, founders, executives, trusts, foundations, endowments, and other mission-led organizations. The fictional firm is designed to demonstrate how a real advisory practice can communicate clearly across several client types.",
  },
  {
    question: "Is Aurevia independent?",
    answer:
      "Within this fictional demonstration, Aurevia is presented as an independent, fee-only advisory firm. It does not receive commissions for recommending investment products.",
  },
  {
    question: "How does a relationship begin?",
    answer:
      "A first conversation focuses on what you are navigating, the decisions ahead, and the support already around you. If the fit is promising, the next step is a written scope, fee schedule, and list of responsibilities.",
  },
  {
    question: "Does Aurevia provide tax or legal advice?",
    answer:
      "Aurevia coordinates with tax and legal professionals but does not replace them. Recommendations that depend on tax or legal interpretation should be reviewed by a qualified professional in the relevant jurisdiction.",
  },
  {
    question: "How are advisory fees structured?",
    answer:
      "The fictional firm uses transparent annual advisory fees based on the scope and complexity of the relationship. A real implementation should replace this demonstration copy with its current Form ADV, fee schedule, and required disclosures.",
  },
  {
    question: "Where is Aurevia based?",
    answer:
      "The fictional office is presented in San Francisco, California, with client relationships supported across the United States.",
  },
  {
    question: "Is the information on this site investment advice?",
    answer:
      "No. Aurevia Capital, its people, contact details, services, and publications are fictional and exist only as a HubZero Blueprint demonstration. Nothing on this site is a recommendation or offer.",
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
