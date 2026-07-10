'use client';

import dynamic from 'next/dynamic';

const FloatingLines = dynamic(() => import('./FloatingLines'), { ssr: false });
const TextType = dynamic(() => import('./TextType'), { ssr: false });
const PixelSnow = dynamic(() => import('./PixelSnow'), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background PixelSnow behind the sandbox */}
      <div className="absolute inset-0 w-full h-full">
        <PixelSnow
          color="#ffffff"
          speed={2.5}
          density={0.15}
          flakeSize={0.012}
        />
      </div>

      {/* Sandbox Capsule Container: 90vw width (5% gap left/right), 80vh height (10% gap top/bottom) */}
      <div className="relative w-[90vw] h-[80vh] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-800 bg-black flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <FloatingLines
            linesGradient={["#087689", "#056aeb", "#06b6d4"]}
            enabledWaves={["middle", "bottom"]}
            lineCount={9}
            lineDistance={77.5}
            bendRadius={14.5}
            bendStrength={15.0}
            mixBlendMode="normal"
            animationSpeed={1.8}
            interactive={false}
            parallax={true}
            parallaxStrength={0.2}
          />
        </div>
        
        {/* Text Overlay */}
        <div className="relative z-10 text-center px-6 md:px-12 select-none">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight font-sans">
            <TextType
              text={[
                "Hey! My name is Ehtisham",
                "and I am a Full Stack Developer"
              ]}
              textColors={["#ffffff"]}
              loop={true}
              typingSpeed={60}
              deletingSpeed={30}
              pauseDuration={2000}
            />
          </h1>
        </div>
      </div>
    </section>
  );
}
