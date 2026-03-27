import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { Industries } from "@/components/industries";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { About } from "@/components/about";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Industries />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}
