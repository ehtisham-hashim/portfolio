"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GsapScrollStack({ children }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".gsap-stack-card");

      // By using CSS `position: sticky` on the cards, we completely eliminate 
      // the vibration/jitter issues caused by JS pinning during smooth scroll!
      // We only use GSAP for the beautiful scale and blur effects.
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          gsap.to(card, {
            scale: 1 - (cards.length - index) * 0.04, // Dynamic scale down
            opacity: 0.3, // Fade out
            filter: "blur(8px)", // Blur for depth
            ease: "none",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top 90%", // Start animating when the next card enters the view
              end: "top 15%", // End animating when the next card is stuck
              scrub: true,
            },
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col gap-[20vh] md:gap-[30vh] pb-[20vh] md:pb-[30vh]"
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className="gsap-stack-card sticky top-[15vh] w-full transform origin-top flex justify-center will-change-transform"
          style={{ zIndex: index }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
