"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MessageSquare, CheckCircle2, MapPin, Sparkles, Clock } from "lucide-react"
import { CustomButton } from "@/components/custom-button"
import { contactData } from "@/lib/constants"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import SocialMedia from "@/components/shared/social-media"

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  interestedIn: z.string().min(1, "Please select an option"),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      businessName: "",
      interestedIn: "",
      message: "",
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Info */}
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="h-3 w-3 text-primary" />
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary">Get in Touch</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
                Let&apos;s build the <span className="text-primary">future</span> of your gym.
              </h1>
              
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                {contactData.description}
              </p>
            </div>

            {/* Contact Information Grid (2x2 on LG) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="space-y-3"
              >
                <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Email Us</p>
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="text-base font-bold text-foreground hover:text-primary transition-colors block break-words"
                  >
                    {contactData.email}
                  </a>
                  <p className="text-[11px] text-muted-foreground mt-1">Response within 2 hours</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="space-y-3"
              >
                <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Call Us</p>
                  <a 
                    href={`tel:${contactData.phone}`}
                    className="text-base font-bold text-foreground hover:text-primary transition-colors block"
                  >
                    {contactData.phone}
                  </a>
                  <p className="text-[11px] text-muted-foreground mt-1">Available 24/7 support</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="space-y-3"
              >
                <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Working Hours</p>
                  <p className="text-base font-bold text-foreground">Monday — Friday</p>
                  <p className="text-[11px] text-muted-foreground mt-1">8:00 AM — 6:00 PM (EAT)</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="space-y-3"
              >
                <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Social Channels</p>
                  <div className="flex items-center gap-3">
                    <SocialMedia />
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1">Join our community</p>
                </div>
              </motion.div>
            </div>

            {/* Standalone Location Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="pt-10 border-t border-primary/10 max-w-xl"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex p-2.5 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Our Headquarters</p>
                  <p className="text-base font-bold text-foreground leading-snug">
                    Sent Marian Gurd, Shola — Addis Ababa, Ethiopia
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Sent+Marian+Gurd+Shola,Addis+Ababa,Ethiopia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-primary font-bold hover:underline mt-1 block"
                  >
                    Get Directions on Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1 max-w-lg">
            <div className="bg-background border shadow-xl rounded-2xl p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20 space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">Message Sent</h3>
                      <p className="text-muted-foreground font-medium max-w-sm mx-auto">
                        Thank you for reaching out. We&apos;ll get back to you within 2 hours.
                      </p>
                    </div>
                    <CustomButton 
                      variant="outline" 
                      onClick={() => {
                        setIsSubmitted(false)
                        form.reset()
                      }} 
                    >
                      Send Another Message
                    </CustomButton>
                  </motion.div>
                ) : (
                  <div key="form">
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">Book a Demo</h3>
                      <p className="text-muted-foreground text-sm">Experience Fidro firsthand.</p>
                    </div>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Full Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="John Doe" 
                                    className="h-12 rounded-xl border bg-muted/10 focus-visible:ring-primary/20 transition-all"
                                    {...field as React.InputHTMLAttributes<HTMLInputElement>} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Work Email</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="john@gym.com" 
                                    className="h-12 rounded-xl border bg-muted/10 focus-visible:ring-primary/20 transition-all"
                                    {...field as React.InputHTMLAttributes<HTMLInputElement>} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="businessName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Business Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your Gym Name" 
                                  className="h-12 rounded-xl border bg-muted/10 focus-visible:ring-primary/20 transition-all"
                                  {...field as React.InputHTMLAttributes<HTMLInputElement>} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="interestedIn"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Solution</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-12 rounded-xl border bg-muted/10 focus:ring-primary/20 transition-all">
                                    <SelectValue placeholder="Select a solution" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="rounded-xl border border-primary/10">
                                  <SelectItem value="starter">Starter Plan</SelectItem>
                                  <SelectItem value="professional">Professional Plan</SelectItem>
                                  <SelectItem value="enterprise">Enterprise</SelectItem>
                                  <SelectItem value="exploring">Just exploring</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="How can we help?" 
                                  className="min-h-[120px] rounded-xl border bg-muted/10 focus-visible:ring-primary/20 transition-all resize-none"
                                  {...field as React.TextareaHTMLAttributes<HTMLTextAreaElement>} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <CustomButton 
                          type="submit" 
                          className="w-full h-14" 
                          withArrow
                        >
                          Send Message
                        </CustomButton>
                      </form>
                    </Form>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
