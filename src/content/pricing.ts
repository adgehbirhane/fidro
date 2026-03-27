export const pricingHeader = {
  title: "Simple, transparent pricing",
  description: "Choose the plan that best fits your business. No hidden fees, ever.",
}

export const pricingTiers = [
  {
    name: "Starter",
    id: "tier-starter",
    priceMonthly: "$49",
    priceYearly: "$39",
    description: "Perfect for small gyms and studios just getting started.",
    features: [
      "Up to 100 members",
      "Basic member management",
      "Automated billing (1 currency)",
      "Standard attendance tracking",
      "Email support",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    id: "tier-professional",
    priceMonthly: "$99",
    priceYearly: "$79",
    description: "Advanced features for growing fitness centers.",
    features: [
      "Up to 1,000 members",
      "Advanced member analytics",
      "Automated billing (Multi-currency)",
      "QR & RFID attendance",
      "Priority email & chat support",
      "Marketing automation",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    priceMonthly: "$199",
    priceYearly: "$159",
    description: "Full-scale solution for multi-location health clubs.",
    features: [
      "Unlimited members",
      "Multi-location management",
      "Full API access",
      "Biometric attendance",
      "Dedicated account manager",
      "Custom reporting",
      "White-label options",
    ],
    mostPopular: false,
  },
]
