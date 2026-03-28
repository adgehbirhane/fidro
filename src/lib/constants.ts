import { Rocket, Heart, Shield, Globe } from "lucide-react"

export const SITE_NAME = "Fidro"
export const SITE_DESCRIPTION = "Comprehensive fitness and gym management system"
export const CONTACT_EMAIL = "sales@fidro.com"

export const navItems = [
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Industries", href: "/#industries" },
  { name: "About", href: "/#about" },
  { name: "Blog", href: "/blog" },
]

export const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "/#features" },
      { name: "Pricing", href: "/#pricing" },
      { name: "API Docs", href: "#" },
      { name: "Integrations", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/#about" },
      { name: "Success Stories", href: "#" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Status", href: "#" },
      { name: "Terms", href: "#" },
    ],
  },
]

export const heroData = {
  title: "Transform Your Fitness Business with Fidro",
  description: "The all-in-one platform to streamline your operations, boost member engagement, and maximize your revenue with ease.",
  primaryCTA: "Request Demo",
  secondaryCTA: "Watch Demo",
  benefits: [
    "Member Management",
    "Automated Billing",
    "Attendance Tracking",
  ],
  trustedBy: "TRUSTED BY 10+ FITNESS CENTERS WORLDWIDE",
}

export const contactData = {
  title: "Ready to elevate your business?",
  description: "Book a personalized demo or reach out to our sales team to find the perfect solution for your fitness business.",
  email: "support@fidro.et",
  phone: "+251 934-905008",
  chat: "Available 24/7",
}

export const aboutData = {
  title: "Our mission is to empower fitness businesses",
  description: "Founded by fitness enthusiasts and software engineers, Fidro was built to solve the real-world challenges of running modern health clubs and boutique gyms.",
}

export const aboutValues = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible in fitness management software.",
    icon: Rocket,
  },
  {
    title: "Reliability",
    description: "Your business runs 24/7, and so does Fidro. We guarantee 99.9% uptime for all our services.",
    icon: Shield,
  },
  {
    title: "Global Vision",
    description: "Supporting fitness centers across 40+ countries with localized payment and tax support.",
    icon: Globe,
  },
  {
    title: "Member First",
    description: "We design every feature with the end-member experience in mind to drive engagement.",
    icon: Heart,
  },
]
