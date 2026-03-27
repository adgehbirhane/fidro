"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Users, 
  CreditCard, 
  Clock, 
  Ticket, 
  BarChart3, 
  ChevronRight,
  ShieldCheck,
  Zap
} from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
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
        { name: "Invoice #8291", amount: "$99.00", status: "Paid" },
        { name: "Invoice #8292", amount: "$149.00", status: "Processing" },
        { name: "Invoice #8293", amount: "$79.00", status: "Paid" },
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

export function Features() {
  const [activeTab, setActiveTab] = React.useState(features[0].id)
  const activeFeature = features.find(f => f.id === activeTab) || features[0]

  return (
    <section id="features" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Everything you need to <span className="text-primary">scale your gym</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Built by fitness professionals for fitness professionals. Streamline your workflow and focus on what matters most: your members.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Feature List */}
          <div className="lg:col-span-5 space-y-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden",
                  activeTab === feature.id
                    ? "bg-background shadow-lg border-primary/20 ring-1 ring-primary/20"
                    : "bg-transparent border-transparent hover:bg-background/50"
                )}
              >
                {activeTab === feature.id && (
                  <motion.div
                    layoutId="active-bg"
                    className="absolute inset-0 bg-primary/5 -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="flex items-start space-x-4">
                  <div className={cn(
                    "p-3 rounded-xl transition-colors duration-300",
                    activeTab === feature.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:text-primary"
                  )}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={cn(
                      "text-lg font-bold transition-colors",
                      activeTab === feature.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <ChevronRight className={cn(
                    "h-5 w-5 mt-1 transition-transform duration-300",
                    activeTab === feature.id ? "text-primary translate-x-1" : "text-muted-foreground/30"
                  )} />
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Demo */}
          <div className="lg:col-span-7 h-full">
             <div className="relative rounded-3xl border bg-background shadow-2xl overflow-hidden h-full min-h-[500px] flex flex-col">
                <div className="p-6 border-b bg-muted/30 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <activeFeature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground">{activeFeature.demo.title}</h4>
                  </div>
                  <div className="flex space-x-2">
                     <div className="h-2 w-12 bg-muted rounded-full" />
                     <div className="h-2 w-8 bg-muted rounded-full" />
                  </div>
                </div>

                <div className="p-8 flex-1 overflow-auto">
                   <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                         <div className="grid grid-cols-2 gap-4">
                            {activeFeature.demo.stats.map((stat, i) => (
                              <div key={i} className="p-4 rounded-2xl bg-muted/30 border border-muted flex flex-col justify-center">
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                                <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                              </div>
                            ))}
                         </div>

                         <div className="space-y-4">
                            <p className="text-sm font-bold text-muted-foreground">RECENT ACTIVITY</p>
                            <div className="space-y-3">
                               {activeFeature.demo.items.map((item, i) => (
                                 <div key={i} className="p-4 rounded-xl border bg-card flex items-center justify-between group hover:border-primary/30 transition-colors">
                                    <div className="flex items-center space-x-4">
                                       <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground text-sm">
                                          {item.name[0]}
                                       </div>
                                       <div>
                                          <p className="text-sm font-bold text-foreground">{item.name}</p>
                                          <p className="text-xs text-muted-foreground">
                                             {"plan" in item ? item.plan : "time" in item ? item.time : "usage" in item ? item.usage : item.amount}
                                          </p>
                                       </div>
                                    </div>
                                    <div className={cn(
                                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                                      "status" in item && item.status === "Active" ? "bg-emerald-100 text-emerald-700" :
                                      "status" in item && item.status === "Paid" ? "bg-emerald-100 text-emerald-700" :
                                      "status" in item && item.status === "Pending" ? "bg-amber-100 text-amber-700" :
                                      "trend" in item && item.trend === "Up" ? "bg-emerald-100 text-emerald-700" :
                                      "bg-muted text-muted-foreground"
                                    )}>
                                       {"status" in item ? item.status : "trend" in item ? item.trend : "method" in item ? item.method : "In Gym"}
                                    </div>
                                 </div>
                               ))}
                            </div>
                         </div>
                      </motion.div>
                   </AnimatePresence>
                </div>

                <div className="p-6 border-t bg-muted/10 mt-auto">
                   <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
                      <div className="flex items-center space-x-2">
                         <ShieldCheck className="h-4 w-4 text-primary" />
                         <span>Secure Data Encryption</span>
                      </div>
                      <div className="flex items-center space-x-2">
                         <Zap className="h-4 w-4 text-primary" />
                         <span>Real-time Syncing</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
