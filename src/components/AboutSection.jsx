"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
import { TypingText } from "./lightswind/typing-text";
import AnimatedContent from "./text-animations/AnimatedContent";

gsap.registerPlugin(ScrollTrigger);

const WoofyHoverImage = dynamic(
  () => import("./lightswind/woofy-hover-image"),
  { ssr: false }
);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useGSAP(() => {
    // Scroll animations are handled by AnimatedContent wrappers
  }, { scope: sectionRef });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Preload images to prevent lag when scrolling into view on mobile
    const img1 = new Image();
    img1.src = "/my-images/sketch.jpeg";
    const img2 = new Image();
    img2.src = "/my-images/image-3.jpeg";
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="main-section relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center py-20"
    >
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-gray-500 uppercase tracking-widest text-sm">About</span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center lg:items-center">
        
        {/* Left Column */}
        <div className="w-full lg:w-[45%] flex flex-col gap-6 relative">
          {/* Tilted Card */}
          <AnimatedContent distance={150} direction="vertical" duration={1.2} delay={0} scrub={true}>
            <div className="relative rotate-[-3deg] bg-[#fdfdfd] rounded-3xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100">
              <div className="rounded-2xl overflow-hidden bg-white aspect-[4/3] relative w-full">
                {!isMobile ? (
                  <WoofyHoverImage
                    src="/my-images/sketch.jpeg"
                    hoverSrc="/my-images/image-3.jpeg"
                    alt="Ehtisham Hashim"
                    width="100%"
                    height="100%"
                    effectType="inversion"
                    maskRadius={0.35}
                    turbulenceIntensity={0.2}
                    animationSpeed={0.8}
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                ) : (
                  <img
                    src="/my-images/sketch.jpeg"
                    alt="Ehtisham Hashim"
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                )}
              </div>
            </div>
          </AnimatedContent>

          {/* Socials & Name */}
          <AnimatedContent distance={50} direction="horizontal" duration={1} delay={0.1} scrub={true}>
            <div className="flex justify-between items-end px-4 mt-2">
              {/* Social Icons */}
              <div className="flex gap-4 text-gray-400 flex-wrap">
                <a href="https://x.com/ehtishm2hashim" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://github.com/ehtisham-hashim" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://threads.net/@ehtisham_hashim" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6 0 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/></svg>
                </a>
              </div>
              
              {/* Name Details */}
              <div className="text-right flex flex-col justify-end">
                <h3 className="font-bold text-lg text-slate-800 leading-none mb-1">Ehtisham</h3>
                <a href="https://www.instagram.com/ehtisham_hashim/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">@ehtisham_hashim</a>
              </div>
            </div>
          </AnimatedContent>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[55%] flex flex-col pt-8 lg:pt-0">
          {/* Who Am I with TypingText */}
          <AnimatedContent distance={50} direction="vertical" duration={1} delay={0.2} scrub={true}>
            <div className="mb-6">
              <TypingText
                as="h2"
                color="text-slate-800"
                fontSize="text-3xl md:text-4xl"
                fontWeight="font-bold"
                className="font-kalam italic"
              >
                Who Am I
              </TypingText>
            </div>
          </AnimatedContent>

          {/* Paragraph Placeholder */}
          <AnimatedContent distance={50} direction="vertical" duration={1} delay={0.3} scrub={true}>
            <div className="relative text-slate-600 text-[15px] leading-relaxed mb-10">
              {/* Sparkle icon at top right of text area */}
              <svg className="absolute -top-6 -right-2 w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
              </svg>
              <p>
                As a full stack developer, I focus on transforming ideas into user friendly applications while solving problems and improving experiences. I help startups and teams build <span className="text-blue-500 font-medium underline decoration-blue-500/50 underline-offset-[5px] decoration-dashed">clean interfaces</span> and strong backends, supported by my knowledge of <span className="text-blue-500 font-medium underline decoration-blue-500/50 underline-offset-[5px] decoration-dashed">modern web technologies</span>, AI, and experience in tools like React, Node.js, and PostgreSQL. I often spend my free time building <span className="text-blue-500 font-medium underline decoration-blue-500/50 underline-offset-[5px] decoration-dashed">AI solutions</span>. And I aim to be your reliable partner in bringing ideas to life.
              </p>
            </div>
          </AnimatedContent>

          {/* Experience List */}
          <AnimatedContent distance={80} direction="vertical" duration={1} delay={0.4} scrub={true}>
            <div className="flex flex-col border-l-2 border-gray-100 pl-6 mb-10 gap-5 text-[13px] md:text-sm text-slate-600">
              <div className="flex justify-between items-center w-full">
                <span className="font-semibold text-slate-800 w-[35%]">Full Stack Developer</span>
                <span className="w-[35%]">Freelance Practice</span>
                <span className="text-right text-gray-400 w-[30%]">2023 &rarr; Now</span>
              </div>
              <div className="flex justify-between items-center w-full">
                <span className="font-semibold text-slate-800 w-[35%]">Frontend Developer</span>
                <span className="w-[35%]">Tech Studio</span>
                <span className="text-right text-gray-400 w-[30%]">2021 &rarr; 2023</span>
              </div>
            </div>
          </AnimatedContent>

          {/* Buttons */}
          <AnimatedContent distance={100} direction="horizontal" duration={1} delay={0.5} scrub={true}>
            <div className="flex gap-4 self-start sm:self-end mt-4">
              <a href="https://drive.google.com/file/d/1NVD46RHikcVtV-qmxc18SujpZy1miqC5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex items-center justify-center border border-gray-200 rounded-[20px] px-8 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:text-white hover:font-bold hover:border-slate-900">
                <span className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 translate-y-full rounded-full bg-slate-900 transition-transform duration-500 ease-out group-hover:-translate-y-1/2"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  My CV
                </span>
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1NVD46RHikcVtV-qmxc18SujpZy1miqC5" download className="flex items-center justify-center border border-gray-200 bg-[#f4f4f5] rounded-[20px] w-12 h-12 hover:bg-gray-200 transition-colors text-slate-700 shrink-0" title="Download CV">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
