"use client";

import React, { useState, useEffect } from "react";
import { LoopingWords } from "./lightswind/looping-words";
import Stepper, { Step } from "./misc/Stepper";
import DotField from "./DotField";
import PixelSnow from "./backgrounds/PixelSnow";

export default function LetsConnect() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full bg-white pt-8 pb-24 flex flex-col items-center justify-center overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        {!isMobile ? (
          <DotField 
            dotRadius={1.5}
            dotSpacing={14}
            cursorRadius={200}
            cursorForce={0.09}
            bulgeOnly={true}
            bulgeStrength={18}
            glowRadius={100}
            sparkle={true}
            waveAmplitude={2}
            gradientFrom="#00f4fa"
            gradientTo="#0039e3"
            glowColor="#00e9fd"
          />
        ) : (
          <PixelSnow 
            color="#00baff"
            density={0.05}
            speed={1.0}
            pixelResolution={100}
          />
        )}
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <LoopingWords words={['Lets Connect', 'Book a Call']} className="mb-8" />
        
        <div className="w-full max-w-4xl px-4 mt-8 relative z-10">
          <Stepper initialStep={1}>
            <Step>
              <div className="text-center py-4">
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm">We learn about your goals and specific requirements.</p>
              </div>
            </Step>
            <Step>
              <div className="text-center py-4">
                <h3 className="text-xl font-bold mb-2">Strategy</h3>
                <p className="text-gray-600 text-sm">We craft a detailed execution plan tailored to you.</p>
              </div>
            </Step>
            <Step>
              <div className="text-center py-4">
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p className="text-gray-600 text-sm">Our team starts building the requested solution.</p>
              </div>
            </Step>
            <Step>
              <div className="text-center py-4">
                <h3 className="text-xl font-bold mb-2">Launch</h3>
                <p className="text-gray-600 text-sm">We deploy the project and ensure everything runs smoothly.</p>
              </div>
            </Step>
          </Stepper>
        </div>
      </div>
    </section>
  );
}
