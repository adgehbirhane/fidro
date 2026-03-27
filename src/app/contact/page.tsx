import { ContactForm } from "@/sections/contact/ContactForm"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-muted/30 py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your fitness business? Reach out to our team today.
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}
