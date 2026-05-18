import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/features/home/components/navbar";
import Image from "next/image";
export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <Image
        src="/images/hero_section.jpg"
        alt="Hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}
