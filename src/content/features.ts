import { Users, CreditCard, Clock, BarChart3, Dumbbell, Activity, Trophy, Building2, Ticket, ShieldCheck, Zap } from "lucide-react"

export const featuresHeader = {
  title: "Everything you need to scale your gym",
  description: "Built by fitness professionals for fitness professionals. Streamline your workflow and focus on what matters most: your members.",
}

export const features = [
  {
    id: "members",
    title: "Member Management",
    description: "Comprehensive member profiles with digital document storage and automated access credentials.",
    icon: Users,
    color: "bg-blue-500",
    demo: {
      title: "Member Directory",
      stats: [
        { label: "Active Members", value: "1,284" },
        { label: "New This Month", value: "+12%" },
      ],
      items: [
        { name: "Alex Rivera", plan: "Pro Plan", status: "Active" },
        { name: "Sarah Chen", plan: "Basic", status: "Pending" },
        { name: "Marcus Thorne", plan: "Elite", status: "Active" },
      ]
    }
  },
  {
    id: "billing",
    title: "Subscription System",
    description: "Automated recurring payments, flexible billing cycles, and automated renewal reminders.",
    icon: CreditCard,
    color: "bg-emerald-500",
    demo: {
      title: "Revenue Overview",
      stats: [
        { label: "MRR", value: "$42,500" },
        { label: "Churn Rate", value: "2.1%" },
      ],
      items: [
        { name: "Invoice #8291", amount: "99.00 ETB", status: "Paid" },
        { name: "Invoice #8292", amount: "149.00 ETB", status: "Processing" },
        { name: "Invoice #8293", amount: "79.00 ETB", status: "Paid" },
      ]
    }
  },
  {
    id: "attendance",
    title: "Attendance Tracking",
    description: "Real-time tracking with support for QR codes, RFID tags, and biometric scanning.",
    icon: Clock,
    color: "bg-amber-500",
    demo: {
      title: "Live Attendance",
      stats: [
        { label: "In Gym Now", value: "48" },
        { label: "Peak Time", value: "6:00 PM" },
      ],
      items: [
        { name: "David Kim", time: "10:15 AM", method: "QR Code" },
        { name: "Elena Rossi", time: "10:12 AM", method: "RFID" },
        { name: "James Wilson", time: "09:58 AM", method: "Fingerprint" },
      ]
    }
  },
  {
    id: "daypass",
    title: "Day Pass Management",
    description: "Temporary access control for guests and referrals with automated follow-ups.",
    icon: Ticket,
    color: "bg-purple-500",
    demo: {
      title: "Guest Logs",
      stats: [
        { label: "Today Guests", value: "14" },
        { label: "Conversion", value: "22%" },
      ],
      items: [
        { name: "Robert Fox", type: "Day Pass", status: "Active" },
        { name: "Jenny Wilson", type: "Referral", status: "Converted" },
        { name: "Guy Hawkins", type: "Guest", status: "Expired" },
      ]
    }
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    description: "Powerful insights into member behavior, revenue trends, and facility utilization.",
    icon: BarChart3,
    color: "bg-indigo-500",
    demo: {
      title: "Performance Metrics",
      stats: [
        { label: "Avg Visit", value: "52 min" },
        { label: "Retention", value: "94%" },
      ],
      items: [
        { name: "Cardio Zone", usage: "85%", trend: "Up" },
        { name: "Weight Area", usage: "92%", trend: "Stable" },
        { name: "Studio 1", usage: "64%", trend: "Up" },
      ]
    }
  }
]

export const industriesHeader = {
  title: "Tailored for your fitness niche",
  description: "Whether you run a local boutique studio or a global health club network, Fidro scales with your ambition.",
}

export const industries = [
  {
    name: "Fitness Centers",
    description: "End-to-end member lifecycle management from lead capture to long-term retention.",
    icon: Activity,
  },
  {
    name: "Boutique Gyms",
    description: "Streamlined equipment scheduling, class management, and automated member billing.",
    icon: Dumbbell,
  },
  {
    name: "Health Clubs",
    description: "Premium member experiences with advanced access control and integrated wellness tracking.",
    icon: Building2,
  },
  {
    name: "Personal Training",
    description: "Client-focused management, session scheduling, and transparent payment processing.",
    icon: Users,
  },
  {
    name: "Multi-location Groups",
    description: "Centralized operations and analytics across multiple sites with global reporting.",
    icon: Trophy,
  },
]

export const securityFeatures = [
  {
    title: "Data Protection",
    description: "Enterprise-grade encryption for all member data and financial records.",
    icon: ShieldCheck,
  },
  {
    title: "99.9% Uptime",
    description: "Reliable cloud infrastructure ensuring your gym is always operational.",
    icon: Zap,
  },
]
