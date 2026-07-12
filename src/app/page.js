import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TempSection from "@/components/TempSection";
import LumaBar from "@/components/ui/futuristic-nav";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      <HeroSection />
      <AboutSection />
      <TempSection />
      <LumaBar />
    </main>
  );
}
