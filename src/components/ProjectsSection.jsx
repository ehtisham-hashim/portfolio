import React from 'react';
import Image from 'next/image';
import GsapScrollStack from './misc/GsapScrollStack';

import caresyncImg from '../../public/projects/caresync_2k.jpeg';
import hifazatImg from '../../public/projects/hifazat_ai_2K.jpeg';
import pakTwinImg from '../../public/projects/pak-twin.png';

const projects = [
  {
    title: "CareSync",
    category: "Healthcare Platform",
    description: "A comprehensive healthcare platform that connects patients with doctors seamlessly. Features include real-time scheduling, secure video consultations, and electronic health record management.",
    img: caresyncImg,
  },
  {
    title: "Hifazat AI",
    category: "AI Security System",
    description: "An advanced AI-driven security system that uses machine learning algorithms to detect anomalies and unauthorized access in real-time. Includes predictive threat modeling.",
    img: hifazatImg,
  },
  {
    title: "Pak Twin",
    category: "Digital Twin Tech",
    description: "A digital twin implementation modeling urban infrastructure. It provides urban planners with real-time analytics and simulation tools to optimize city resources and traffic.",
    img: pakTwinImg,
  }
];

export default function ProjectsSection() {
  return (
    <section className="w-full bg-white py-24 flex flex-col items-center justify-center overflow-clip">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-gray-300"></div>
          <span className="text-gray-500 uppercase tracking-widest text-sm">Projects</span>
          <div className="h-px w-12 bg-gray-300"></div>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight italic">Featured Work</h2>
      </div>
      
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
        <GsapScrollStack>
          {projects.map((proj, i) => (
            <div key={i} className="relative w-full h-[75vh] md:h-[70vh] rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-gray-50 flex flex-col md:flex-row">
              
              {/* Text Section: 65% height on mobile (order 2), 30% width on desktop (order 1) */}
              <div className="order-2 md:order-1 h-[65%] md:h-full w-full md:w-[30%] p-6 md:p-12 flex flex-col justify-center bg-white">
                <span className="text-blue-500 font-semibold tracking-wide text-xs md:text-sm mb-2">{proj.category}</span>
                <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900">{proj.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {proj.description}
                </p>
                <button className="mt-6 px-6 py-2.5 bg-gray-900 text-white rounded-full w-fit hover:bg-gray-800 transition-colors text-sm font-medium">
                  View Project
                </button>
              </div>

              {/* Image Section: 35% height on mobile (order 1), 70% width on desktop (order 2) */}
              <div className="order-1 md:order-2 relative h-[35%] md:h-full w-full md:w-[70%] bg-gray-100 border-b md:border-b-0 md:border-l border-gray-100">
                <Image 
                  src={proj.img} 
                  alt={proj.title} 
                  fill 
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 70vw"
                />
              </div>

            </div>
          ))}
        </GsapScrollStack>
      </div>
    </section>
  );
}
