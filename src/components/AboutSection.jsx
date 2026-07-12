"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

gsap.registerPlugin(ScrollTrigger);

const WoofyHoverImage = dynamic(
  () => import("./lightswind/woofy-hover-image"),
  { ssr: false }
);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Simple fade in animation for panels when section enters view
      const panels = gsap.utils.toArray(".about-panel");

      gsap.fromTo(
        panels,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%", // Trigger fade when section is 40% visible
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center"
    >
      {/* Title */}
      <div className="w-full text-center pt-10 pb-4">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 italic"
          style={{ fontFamily: "var(--font-kalam), cursive" }}
        >
          Who I Am
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto px-4 gap-6 md:gap-10 items-center">
        {/* Left: Image */}
        <div className="w-full md:w-[38%] flex-shrink-0">
          <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-white max-w-[280px] mx-auto md:max-w-full">
            <WoofyHoverImage
              src="/my-images/image-2.jpeg"
              hoverSrc="/my-images/image-3.jpeg"
              alt="Ehtisham Hashim"
              width="100%"
              height={340}
              effectType="inversion"
              maskRadius={0.35}
              turbulenceIntensity={0.2}
              animationSpeed={0.8}
              className="w-full"
            />
          </div>
          <p
            className="text-center mt-3 text-base font-semibold text-slate-700"
            style={{ fontFamily: "var(--font-kalam), cursive" }}
          >
            Ehtisham Hashim
          </p>
          {/* Social icons below image */}
          <div className="flex justify-center gap-4 mt-2 text-slate-500">
            <a
              href="https://github.com/ehtisham-hashim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/ehtisham-hashim"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-slate-800 transition-colors"
              aria-label="Download CV"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Text panels */}
        <div className="w-full md:w-[62%] relative">
          {/* Panel 1: Bio */}
          <div className="about-panel">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
              As a full stack developer, I focus on transforming ideas into
              user-friendly applications while solving problems and improving
              experiences. I help startups and teams build{" "}
              <span className="text-[#0066FF] font-semibold">clean interfaces</span>{" "}
              and strong backends, supported by my knowledge of{" "}
              <span className="text-[#0066FF] font-semibold">modern web technologies</span>,
              databases, and experience in tools like React, Node.js, PostgreSQL, and MongoDB.
            </p>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              I often spend my free time building{" "}
              <span className="text-[#0066FF] font-semibold">AI solutions</span>.
              And I aim to be your reliable partner in bringing ideas to life.
            </p>
          </div>

          {/* Panel 2: CTA */}
          <div className="about-panel mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors duration-300 shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
