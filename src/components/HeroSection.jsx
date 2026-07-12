"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import img1 from "../../public/my-images/image-1.jpeg";
import img2 from "../../public/my-images/image-2.jpeg";
import img3 from "../../public/my-images/image-3.jpeg";

import mongoImg from "../../public/logos/MongoDB_leaf.jpeg";
import postgresImg from "../../public/logos/PostgreSQL_elephant.jpeg";
import reactImg from "../../public/logos/React_logo_3D.jpeg";
import nodeImg from "../../public/logos/Node.js_hexagon.jpeg";

const Iridescence = dynamic(() => import("./backgrounds/Iridescence"), { ssr: false });

const SPRING_CONFIG = { damping: 25, stiffness: 120 };
const IRIDESCENCE_COLOR = [0.878, 1.0, 1.0];

export default function HeroSection() {
  const [step, setStep] = useState(0); // 0 = Ehtisham, 1 = MERN, 2 = PERN

  useEffect(() => {
    const timer = setInterval(() => setStep((s) => (s + 1) % 3), 2500);
    return () => clearInterval(timer);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, SPRING_CONFIG);
  const smoothMouseY = useSpring(mouseY, SPRING_CONFIG);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Use depth values for parallax
  const maxOffset = 40;
  const tX1 = useTransform(smoothMouseX, [-1, 1], [-maxOffset * 0.4, maxOffset * 0.4]);
  const tY1 = useTransform(smoothMouseY, [-1, 1], [-maxOffset * 0.4, maxOffset * 0.4]);
  
  const tX2 = useTransform(smoothMouseX, [-1, 1], [-maxOffset * 0.6, maxOffset * 0.6]);
  const tY2 = useTransform(smoothMouseY, [-1, 1], [-maxOffset * 0.6, maxOffset * 0.6]);
  
  const tX3 = useTransform(smoothMouseX, [-1, 1], [-maxOffset * 0.8, maxOffset * 0.8]);
  const tY3 = useTransform(smoothMouseY, [-1, 1], [-maxOffset * 0.8, maxOffset * 0.8]);

  return (
    <section className="relative w-full min-h-screen bg-white flex items-start justify-center pt-[12vh] pb-12 overflow-hidden">
      <div className="relative w-[90vw] h-[80vh] md:h-[100vh] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-white flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Iridescence color={IRIDESCENCE_COLOR} mouseReact={false} amplitude={0.2} speed={1.0} />
        </div>
        
        {/* Images with Parallax Hover and Opacity Crossfade */}
        <motion.div 
          style={{ x: tX1, y: tY1 }}
          className="absolute top-4 left-2 md:top-8 md:left-[10%] transform -rotate-6 w-32 sm:w-40 md:w-48 lg:w-56 aspect-[4/3] rounded-xl overflow-hidden border-[4px] border-white shadow-lg z-20 bg-slate-100"
        >
          <Image src={img1} alt="Image 1" fill placeholder="blur" priority className={`object-cover transition-opacity duration-700 ease-in-out ${step === 0 ? "opacity-100" : "opacity-0"}`} />
          <Image src={mongoImg} alt="Mongo" fill placeholder="blur" priority className={`object-cover transition-opacity duration-700 ease-in-out ${step === 1 ? "opacity-100" : "opacity-0"}`} />
          <Image src={postgresImg} alt="Postgres" fill placeholder="blur" priority className={`object-cover transition-opacity duration-700 ease-in-out ${step === 2 ? "opacity-100" : "opacity-0"}`} />
        </motion.div>
        
        <motion.div 
          style={{ x: tX2, y: tY2 }}
          className="absolute top-4 right-2 md:top-8 md:right-[10%] transform rotate-6 w-32 sm:w-40 md:w-48 lg:w-56 aspect-[4/3] rounded-xl overflow-hidden border-[4px] border-white shadow-lg z-20 bg-slate-100"
        >
          <Image src={img2} alt="Image 2" fill placeholder="blur" priority className={`object-cover transition-opacity duration-700 ease-in-out ${step === 0 ? "opacity-100" : "opacity-0"}`} />
          <Image src={reactImg} alt="React" fill placeholder="blur" priority className={`object-cover transition-opacity duration-700 ease-in-out ${step === 1 || step === 2 ? "opacity-100" : "opacity-0"}`} />
        </motion.div>
        
        <motion.div 
          style={{ x: tX3, y: tY3 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 rotate-3 w-36 sm:w-44 md:w-52 lg:w-60 aspect-[4/3] rounded-xl overflow-hidden border-[4px] border-white shadow-lg z-20 bg-slate-100"
        >
          <Image src={img3} alt="Image 3" fill placeholder="blur" priority className={`object-cover transition-opacity duration-700 ease-in-out ${step === 0 ? "opacity-100" : "opacity-0"}`} />
          <Image src={nodeImg} alt="Node" fill placeholder="blur" priority className={`object-cover transition-opacity duration-700 ease-in-out ${step === 1 || step === 2 ? "opacity-100" : "opacity-0"}`} />
        </motion.div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none px-4">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-center text-slate-800 max-w-5xl leading-tight transition-colors duration-500" style={{ fontFamily: "var(--font-kalam), cursive" }}>
            Hey! I am <span className={step === 0 ? "text-[#0066FF] transition-colors duration-500" : "transition-colors duration-500"}>Ehtisham.</span> A Full Stack
            <br />
            <span className="text-slate-600 text-2xl sm:text-3xl md:text-3xl lg:text-4xl mt-2 block">
              developer in <span className={step === 1 ? "text-[#0066FF] transition-colors duration-500" : "transition-colors duration-500"}>MERN</span> and <span className={step === 2 ? "text-[#0066FF] transition-colors duration-500" : "transition-colors duration-500"}>PERN</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
