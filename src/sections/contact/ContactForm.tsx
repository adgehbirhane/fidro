"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
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
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<string | null>(null)

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

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Using Formspree for backend-less form submission
      const formSpreeEndpoint = 'https://formspree.io/f/xjgpwwel'
      
      const formData = new FormData()
      formData.append('fullName', data.fullName)
      formData.append('email', data.email)
      formData.append('businessName', data.businessName)
      formData.append('interestedIn', data.interestedIn)
      if (data.message) {
        formData.append('message', data.message)
      }

      const response = await fetch(formSpreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      // Success
      setIsSubmitted(true)
      form.reset()
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleTryAgain = () => {
    setIsSubmitted(false)
    setSubmitError(null)
    form.reset()
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
                onClick={handleTryAgain}
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

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-800">Submission Error</p>
                    <p className="text-sm text-red-700">{submitError}</p>
                  </div>
                </motion.div>
              )}

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
                              disabled={isSubmitting}
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
                              disabled={isSubmitting}
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
                            disabled={isSubmitting}
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
                        <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
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
                            disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
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
