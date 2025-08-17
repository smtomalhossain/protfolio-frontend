import { ProjectsCardData } from "@/lib/data";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm ";

export default function Home() {

  return (

    <section className=" bg-gradient-to-r from-blue-100 to-blue-400
        min-h-screen relative overflow-hidden">

      <main className="lg:pt-[72px] max-sm:pt-[6px] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-30">
        <div className="mt-5">
          <HeroSection />
        </div>
        <div className="mt-5">
          <ExperienceSection />
        </div>
        <div id="skills" className="mt-25 ">
          <Skills />
        </div>
        <div>
          <Projects projects={ProjectsCardData} />

        </div>
        <div className="">
          <ContactForm />
        </div>
      </main>
    </section>


  );
}
