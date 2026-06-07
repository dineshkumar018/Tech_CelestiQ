import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { Products } from "@/components/sections/Products";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Programs />
      <WhyChooseUs />
      <Portfolio />
      <Products />
      <Reviews />
      <Contact />
    </div>
  );
}
