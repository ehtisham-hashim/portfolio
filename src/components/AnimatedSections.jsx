'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Observer } from 'gsap/Observer';

gsap.registerPlugin(Observer);

export default function AnimatedSections({ data }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    let sections = gsap.utils.toArray("section.anim-section");
    let images = gsap.utils.toArray(".bg");
    let outerWrappers = gsap.utils.toArray(".outer");
    let innerWrappers = gsap.utils.toArray(".inner");
    let headings = gsap.utils.toArray(".section-heading");
    let currentIndex = -1;
    let wrap = gsap.utils.wrap(0, sections.length);
    let animating = false;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index); // make sure it's valid
      animating = true;
      let fromTop = direction === -1,
          dFactor = fromTop ? -1 : 1,
          tl = gsap.timeline({
            defaults: { duration: 1.25, ease: "power1.inOut" },
            onComplete: () => animating = false
          });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      
      tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
          yPercent: i => i ? -100 * dFactor : 100 * dFactor
        }, { 
          yPercent: 0 
        }, 0)
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(headings[index], { 
            autoAlpha: 0, 
            yPercent: 150 * dFactor
        }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2"
            // SplitText stagger removed (plugin not installed)
        }, 0.2);

      currentIndex = index;
    }

    const obs = Observer.create({
      target: containerRef.current,
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true
    });

    gotoSection(0, 1);

    return () => obs.kill();
  }, { scope: containerRef });

  // Default data if none provided
  const sectionsData = data || [
    { title: "Scroll down", bgImage: "url('https://assets.codepen.io/16327/site-landscape-1.jpg')" },
    { title: "Animated with GSAP", bgColor: "#111" },
    { title: "GreenSock", bgColor: "#222" },
    { title: "Animation platform", bgColor: "#333" },
    { title: "Keep scrolling", bgColor: "#444" }
  ];

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden text-white uppercase select-none">
      {sectionsData.map((sec, i) => (
        <section key={i} className="anim-section absolute top-0 left-0 w-full h-full invisible">
          <div className="outer w-full h-full overflow-hidden">
            <div className="inner w-full h-full overflow-hidden">
              <div 
                className="bg absolute top-0 left-0 w-full h-full flex items-center justify-center bg-cover bg-center"
                style={{
                  backgroundColor: sec.bgColor,
                  backgroundImage: sec.bgImage ? `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.1) 100%), ${sec.bgImage}` : 'none'
                }}
              >
                <h2 className="section-heading text-[clamp(1rem,6vw,10rem)] font-semibold leading-tight text-center w-[90vw] max-w-[1200px] z-50 normal-case">
                  {sec.title}
                </h2>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
