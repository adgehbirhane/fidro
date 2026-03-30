import { ContactInfo, ContactForm } from "@/sections/contact"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-20 lg:py-28 overflow-hidden bg-background">
        <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
