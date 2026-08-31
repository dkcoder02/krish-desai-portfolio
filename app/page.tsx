import { About } from "@/components/sections/about";
import { Booking } from "@/components/sections/booking";
import { Builder } from "@/components/sections/builder";
import { ClientExperience } from "@/components/sections/client-experience";
import { Contact } from "@/components/sections/contact";
import { Expertise } from "@/components/sections/expertise";
import { Focus } from "@/components/sections/focus";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteNav } from "@/components/sections/site-nav";
import { Systems } from "@/components/sections/systems";
import { RevealRuntime } from "@/components/ui/reveal-runtime";

export default function Home() {
  return (
    <>
      <RevealRuntime />
      <SiteNav />
      <main id="main" className="flex-1">
        <Hero />
        <Focus />
        <About />
        <Expertise />
        <Builder />
        <Process />
        <Systems />
        <ClientExperience />
        <Booking />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
