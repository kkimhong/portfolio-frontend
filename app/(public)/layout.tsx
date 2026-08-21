import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import Providers from "../providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kruyk | Portfolio",
  description:
    "Full-stack developer portfolio — projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning>
        <main className="relative min-h-screen overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="fixed inset-0 h-screen w-screen object-cover">
            <source
              src="https://pub-83945fce687543fd923c16ac5b4f8a9b.r2.dev/output.mp4"
              type="video/mp4"
            />
          </video>
          <div className="fixed inset-0 bg-black/40" />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <Providers>{children}</Providers>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
