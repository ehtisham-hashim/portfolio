"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface LoopingWordsProps {
  words: string[];
  className?: string;
}

export function LoopingWords({ words, className }: LoopingWordsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLLIElement | null)[]>([]);

  // Prepend the last word so words[0] starts in the center focus
  const duplicatedWords = [words[words.length - 1], ...words, ...words];
  const totalOriginal = words.length;

  useEffect(() => {
    let ctx = gsap.context(() => {
      const firstEl = wordsRef.current[1];
      if (firstEl && selectorRef.current) {
        gsap.set(selectorRef.current, { width: firstEl.offsetWidth });
      }

      let index = 0;
      function playNext() {
        index++;
        const targetWidthEl = wordsRef.current[(index % totalOriginal) + 1];
        if (targetWidthEl && selectorRef.current) {
          gsap.to(selectorRef.current, { 
            width: targetWidthEl.offsetWidth, 
            duration: 0.5, 
            ease: "power2.out" 
          });
        }

        gsap.to(ulRef.current, {
          yPercent: -(index * 100) / duplicatedWords.length,
          duration: 1.2,
          ease: "power3.inOut",
          onComplete: () => {
            if (index === totalOriginal) {
              index = 0;
              gsap.set(ulRef.current, { yPercent: 0 });
            }
            gsap.delayedCall(1, playNext);
          }
        });
      }

      gsap.delayedCall(2.2, playNext);
    }, containerRef);
    
    return () => ctx.revert();
  }, [totalOriginal, duplicatedWords.length]);

  return (
    <div className={cn("flex items-center justify-center", className)} ref={containerRef}>
      <div 
        className="relative h-[2.7em] px-[0.2em] text-[11vw] md:text-[6vw] leading-[0.9] font-bold uppercase whitespace-nowrap"
        style={{
          maskImage: "linear-gradient(180deg, transparent 0%, transparent 15%, black 45%, black 55%, transparent 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(180deg, transparent 0%, transparent 15%, black 45%, black 55%, transparent 85%, transparent 100%)"
        }}
      >
        <ul ref={ulRef} className="flex flex-col items-center m-0 p-0 list-none">
          {duplicatedWords.map((word, i) => (
            <li
              key={i}
              ref={(el) => {
                wordsRef.current[i] = el;
              }}
              className="text-foreground tracking-tight"
            >
              <p className="m-0">{word}</p>
            </li>
          ))}
        </ul>

        {/* Selector Edge Boxes */}
        <div
          ref={selectorRef}
          className="absolute left-1/2 top-1/2 h-[0.9em] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 will-change-transform"
        >
          {/* Top Left */}
          <div className="absolute top-0 left-0 w-[0.125em] h-[0.125em] border-t-[0.035em] border-l-[0.035em] border-primarylw" />
          {/* Top Right */}
          <div className="absolute top-0 right-0 w-[0.125em] h-[0.125em] border-t-[0.035em] border-r-[0.035em] border-primarylw" />
          {/* Bottom Left */}
          <div className="absolute bottom-0 left-0 w-[0.125em] h-[0.125em] border-b-[0.035em] border-l-[0.035em] border-primarylw" />
          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0 w-[0.125em] h-[0.125em] border-b-[0.035em] border-r-[0.035em] border-primarylw" />
        </div>
      </div>
    </div>
  );
}
