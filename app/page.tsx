import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover">
        <source
          src="https://pub-83945fce687543fd923c16ac5b4f8a9b.r2.dev/output.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}
