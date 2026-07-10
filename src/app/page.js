import HeroSection from "@/components/HeroSection";
import TempSection from "@/components/TempSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      <HeroSection />
      <TempSection />
    </main>
  );
}
