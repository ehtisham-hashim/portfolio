import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import TempSection from "@/components/TempSection";
import LumaBar from "@/components/ui/futuristic-nav";
import ScrollSnapper from "@/components/ScrollSnapper";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      <ScrollSnapper />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <TempSection />
      <LumaBar />
    </main>
  );
}
