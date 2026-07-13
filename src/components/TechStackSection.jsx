"use client";

import React from "react";
import LogoLoop from "./misc/LogoLoop";

const logos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", alt: "Express" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", alt: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", alt: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", alt: "GitHub" },
  { src: "/antigravity.png", alt: "Antigravity" }
];

export default function TechStackSection() {
  return (
    <section className="w-full bg-white py-16 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-[90%] md:w-[75%] flex flex-col gap-14">
        <LogoLoop 
          logos={logos} 
          direction="left" 
          speed={40} 
          logoHeight={50} 
          gap={80} 
          scaleOnHover={true} 
          fadeOut={true}
        />
        <div className="hidden md:block">
          <LogoLoop 
            logos={[...logos].reverse()} 
            direction="right" 
            speed={40} 
            logoHeight={50} 
            gap={80} 
            scaleOnHover={true} 
            fadeOut={true}
          />
        </div>
      </div>
    </section>
  );
}
