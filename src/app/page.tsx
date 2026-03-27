import { Hero } from "@/sections/home/Hero";
import { Features } from "@/sections/home/Features";
import { PricingPreview } from "@/sections/home/PricingPreview";
import { Testimonials } from "@/sections/home/Testimonials";
import { CTA } from "@/sections/home/CTA";
import { Industries } from "@/sections/home/Industries";
import { About } from "@/sections/home/About";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Industries/>
      <About />
      <PricingPreview />
      <Testimonials />
      <CTA />
    </div>
  );
}
