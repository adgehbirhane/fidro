"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { CustomButton } from "@/components/custom-button"
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
  )
}

// Export ContactInfo for import in contact page
export { ContactInfo } from "./ContactInfo"
