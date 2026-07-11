"use client";

import dynamic from "next/dynamic";

const Iridescence = dynamic(() => import("./Iridescence"), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-white flex items-start justify-center pt-[12vh] overflow-hidden">
      <div className="relative w-[90vw] h-[83vh] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-white flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Iridescence
            color={[0.878, 1.0, 1.0]}
            mouseReact={false}
            amplitude={0.2}
            speed={1.0}
          />
        </div>
      </div>
    </section>
  );
}
