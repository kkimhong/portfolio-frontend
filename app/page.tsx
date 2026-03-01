import { Navbar } from "@/features/home/components/navbar";
import { HeroSection } from "@/features/home/components/hero-section";
import { AboutSection } from "@/features/home/components/about-section";
import { ProjectsSection } from "@/features/home/components/projects-section";
import { ContactFooter } from "@/features/home/components/contact-footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactFooter />
    </main>
  );
}
