
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/features/home/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('../assets/img/hero_section.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="min-h-screen bg-black/50 flex flex-col items-center justify-center">
      <Navbar />
      <HeroSection />
      </div>
    </div>
  );
}
