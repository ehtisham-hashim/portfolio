import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";
import LumaBar from "@/components/ui/futuristic-nav";
import ScrollSnapper from "@/components/ScrollSnapper";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      <ScrollSnapper />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <LetsConnect />
      <Footer />
      <LumaBar />
    </main>
  );
}
