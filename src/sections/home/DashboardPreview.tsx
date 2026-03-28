"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Users, 
  Search, 
  Bell, 
  FileText,
  CreditCard,
  Settings,
  Package,
  TrendingUp,
  CheckCircle2,
  UserCircle
} from "lucide-react"

interface WindowProps {
  title: string
  subtitle: string
  logoText: string
  className?: string
  style?: React.CSSProperties
  zIndex: number
  delay?: number
  children: React.ReactNode
}

const WindowFrame = ({ title, subtitle, logoText, className, zIndex, delay = 0, children }: WindowProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40, x: 20 }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={`absolute bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-teal-100 overflow-hidden flex flex-col ${className}`}
    style={{ zIndex }}
  >
    {/* Top Bar */}
    <div className="h-12 border-b border-teal-50 flex items-center justify-between px-4 bg-gradient-to-r from-teal-50 to-white sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <span className="text-teal-700 font-black text-lg tracking-tighter uppercase">{logoText}</span>
        <div className="hidden md:flex items-center bg-teal-50/50 rounded-md px-2 py-1 gap-2 border border-teal-100">
          <Search className="h-3 w-3 text-teal-400" />
          <div className="h-2 w-16 bg-teal-100 rounded-full" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Bell className="h-4 w-4 text-teal-400" />
        <div className="flex items-center gap-2">
          <div className="text-[10px] text-right hidden sm:block">
            <p className="font-bold text-teal-900 leading-none">Abebe Kebede</p>
            <p className="text-teal-600 leading-none mt-0.5">Admin</p>
          </div>
          <UserCircle className="h-7 w-7 text-teal-300" />
        </div>
      </div>
    </div>

    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <div className="w-40 border-r border-teal-50 bg-gradient-to-b from-teal-50/30 to-white p-3 flex flex-col gap-1 hidden md:flex">
        {[
          { icon: Users, label: "Members", active: true },
          { icon: CreditCard, label: "Subscriptions" },
          { icon: CheckCircle2, label: "Attendance" },
          { icon: Package, label: "Day Passes" },
          { icon: TrendingUp, label: "Analytics" },
          { icon: FileText, label: "Reports" },
          { icon: Settings, label: "Settings" },
        ].map((item, i) => (
          <div 
            key={i} 
            className={`flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors ${
              item.active ? "bg-teal-100 text-teal-700" : "text-teal-600 hover:bg-teal-50"
            }`}
          >
            <item.icon className="h-3.5 w-3.5" />
            <span className="text-[10px] font-bold truncate">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-5 bg-white relative">
        <div className="mb-6">
          <h3 className="text-xl font-black text-teal-900 tracking-tight">{title}</h3>
          <p className="text-[10px] font-bold text-teal-600 mt-1 uppercase tracking-widest">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  </motion.div>
)

const Stepper = ({ steps, currentStep = 1 }: { steps: string[], currentStep?: number }) => (
  <div className="flex items-center justify-between w-full mb-8 relative px-4">
    <div className="absolute top-1/2 left-0 w-full h-px bg-teal-100 -translate-y-1/2 -z-0" />
    {steps.map((step, i) => (
      <div key={i} className="relative z-10 flex flex-col items-center gap-2">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-black border-2 ${
          i + 1 <= currentStep ? "bg-teal-600 border-teal-600 text-white" : "bg-white border-teal-200 text-teal-400"
        }`}>
          {i + 1}
        </div>
        <span className={`text-[8px] font-bold whitespace-nowrap ${
          i + 1 <= currentStep ? "text-teal-700" : "text-teal-400"
        }`}>{step}</span>
      </div>
    ))}
  </div>
)

export function DashboardPreview({ className }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-6xl aspect-[21/9] flex items-center justify-center ${className}`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* LEFT WINDOW - BACK */}
      <WindowFrame 
        title="Member Registration - MEM-2026-001" 
        subtitle="New Member | Nov 20, 2026" 
        logoText="FIDRO"
        zIndex={10}
        delay={0}
        className="left-0 top-[10%] w-[55%] h-[75%]"
      >
        <Stepper steps={["Personal Info", "Plan Selection", "Payment", "Access Card", "Complete"]} currentStep={2} />
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-2 w-1/3 bg-teal-100 rounded-full" />
              <div className="h-12 bg-teal-50 rounded-lg border border-teal-100 flex items-center px-3">
                <div className="h-2 w-3/4 bg-teal-200/50 rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-1/3 bg-teal-100 rounded-full" />
              <div className="h-12 bg-teal-50 rounded-lg border border-teal-100 flex items-center px-3">
                <div className="h-2 w-1/2 bg-teal-200/50 rounded-full" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
              <p className="text-[8px] font-black text-teal-600 uppercase mb-2">Selected Plan</p>
              <p className="text-sm font-black text-teal-900">Premium Monthly</p>
              <p className="text-xs text-teal-700 mt-1">4,500 ETB / month</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
              <p className="text-[8px] font-black text-teal-600 uppercase mb-2">Branch</p>
              <p className="text-sm font-black text-teal-900">Bole Branch</p>
              <p className="text-xs text-teal-700 mt-1">Addis Ababa</p>
            </div>
          </div>
        </div>
      </WindowFrame>

      {/* CENTER WINDOW - MIDDLE */}
      <WindowFrame 
        title="Subscription Payment - SUB-892" 
        subtitle="Member: Sarah Johnson | Premium Plan" 
        logoText="FIDRO"
        zIndex={20}
        delay={0.2}
        className="left-[20%] top-[5%] w-[60%] h-[85%]"
      >
        <Stepper steps={["Verification", "Payment", "Receipt", "Access Update", "Notification"]} currentStep={2} />
        <div className="space-y-6">
          <div className="flex gap-8 border-b border-teal-50 pb-4">
            <div className="text-teal-700 border-b-2 border-teal-600 pb-2 text-[10px] font-black uppercase tracking-widest">Payment Details</div>
            <div className="text-teal-400 text-[10px] font-black uppercase tracking-widest">History</div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-xl border border-teal-200">
              <p className="text-[8px] font-black text-teal-600 uppercase mb-1">Amount</p>
              <p className="text-lg font-black text-teal-900">4,500.00 ETB</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
              <p className="text-[8px] font-black text-teal-600 uppercase mb-1">Member Since</p>
              <p className="text-sm font-black text-teal-900">Jan 2025</p>
            </div>
            <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
              <p className="text-[8px] font-black text-teal-600 uppercase mb-1">Member ID</p>
              <p className="text-sm font-black text-teal-900">MEM-892</p>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button className="px-4 py-2 rounded-lg border border-red-100 text-red-500 text-[10px] font-black uppercase tracking-widest hover:bg-red-50 transition-colors">Cancel</button>
            <button className="px-6 py-2 rounded-lg bg-teal-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-teal-200 hover:bg-teal-700 transition-colors">Process Payment</button>
          </div>
        </div>
      </WindowFrame>

      {/* RIGHT WINDOW - FRONT */}
      <WindowFrame 
        title="Attendance Analytics" 
        subtitle="Today's Activity | Bole Branch" 
        logoText="FIDRO"
        zIndex={30}
        delay={0.4}
        className="right-0 bottom-[5%] w-[50%] h-[70%]"
      >
        <div className="flex gap-6 h-full">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-4 w-4 text-teal-500" />
              <span className="text-[10px] font-black text-teal-900 uppercase">Today&apos;s Check-ins</span>
            </div>
            <div className="aspect-video bg-gradient-to-br from-teal-100 to-teal-50 rounded-xl overflow-hidden relative border border-teal-200 group">
               <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent group-hover:scale-110 transition-transform duration-700" />
               {/* Chart Bars */}
               <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-around px-4 pb-2">
                  {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                    <div key={i} className="w-6 bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-md transition-all duration-500 hover:from-teal-600 hover:to-teal-500" style={{ height: `${height}%` }} />
                  ))}
               </div>
               <div className="absolute top-2 right-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-teal-200">
                  <p className="text-[8px] font-black text-teal-700 uppercase">Total: 48</p>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-teal-50 rounded-lg border border-teal-100">
                <p className="text-[8px] font-black text-teal-600 uppercase">Peak Hour</p>
                <p className="text-sm font-black text-teal-900">6:00 PM</p>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg border border-teal-100">
                <p className="text-[8px] font-black text-teal-600 uppercase">Avg Stay</p>
                <p className="text-sm font-black text-teal-900">52 min</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-teal-50/50 rounded-xl border border-teal-100 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-black text-teal-600 uppercase tracking-widest">Recent Activity</span>
              <span className="text-[8px] font-black text-teal-700 uppercase">Live</span>
            </div>
            <div className="space-y-3">
              {[
                { name: "Sarah J.", time: "2 min ago", action: "Check-in" },
                { name: "Michael K.", time: "5 min ago", action: "Check-out" },
                { name: "Emma R.", time: "8 min ago", action: "Check-in" },
              ].map((activity, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-teal-100 last:border-0">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-teal-200 flex items-center justify-center text-[8px] font-black text-teal-700">
                      {activity.name[0]}
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-teal-900">{activity.name}</p>
                      <p className="text-[7px] text-teal-600">{activity.time}</p>
                    </div>
                  </div>
                  <span className="text-[8px] font-black text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full">
                    {activity.action}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WindowFrame>

      {/* FLOATING DECORATIONS */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-10 top-1/2 bg-white p-4 rounded-2xl shadow-2xl border border-teal-50 z-40 hidden xl:flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
          <Users className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[8px] font-black text-teal-600 uppercase">New Member</p>
          <p className="text-xs font-black text-teal-900">Welcome!</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-10 top-[30%] bg-white p-4 rounded-2xl shadow-2xl border border-teal-50 z-40 hidden xl:flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[8px] font-black text-teal-600 uppercase">Payment</p>
          <p className="text-xs font-black text-teal-900">Successful</p>
        </div>
      </motion.div>
    </div>
  )
}
