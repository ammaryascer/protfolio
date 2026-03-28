import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Leadership } from "@/components/sections/Leadership";
import { PublicHealth } from "@/components/sections/PublicHealth";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { AcademicEngagement } from "@/components/sections/AcademicEngagement";
import { InternationalExposure } from "@/components/sections/InternationalExposure";
import { Objectives } from "@/components/sections/Objectives";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Leadership />
      <PublicHealth />
      <Experience />
      <Education />
      <AcademicEngagement />
      <InternationalExposure />
      <Objectives />
      <Contact />
    </div>
  );
}
