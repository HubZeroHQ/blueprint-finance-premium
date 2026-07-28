export interface NavigationItem {
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  { label: "Firm", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Resources", href: "/resources" },
];

export const footerNavigation = {
  firm: [
    { label: "About", href: "/about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Contact", href: "/contact" },
  ],
  expertise: [
    { label: "Private Wealth Management", href: "/services/wealth-management" },
    { label: "Investment Advisory", href: "/services/investment-advisory" },
    { label: "Retirement Planning", href: "/services/retirement-planning" },
    { label: "Family Office Services", href: "/services/family-office-services" },
    { label: "Institutional Advisory", href: "/services/institutional-advisory" },
  ],
  resources: [
    { label: "Insights", href: "/insights" },
    { label: "Resources", href: "/resources" },
    { label: "FAQs", href: "/faqs" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} satisfies Record<string, NavigationItem[]>;
