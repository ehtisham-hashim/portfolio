import React from 'react';

export default function Footer() {
  return (
    <section className="w-full bg-white flex justify-center pb-4 md:pb-8">
      {/* Container matching Iridescence sizing */}
      <div className="relative w-[95vw] md:w-[90vw] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl bg-[#0a0a0a] flex flex-col pt-16 md:pt-24 border border-[#222]">
        
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col z-10">
          
          {/* Top Section: Heading & CTA */}
          <div className="mb-20 md:mb-28">
            <h2 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight">
              Turn your <span className="font-[family-name:var(--font-kalam)] italic text-gray-300 font-normal">Ideas</span><br/>
              Into Reality 
              <button className="inline-flex items-center justify-center bg-[#bbf7d0] text-black rounded-2xl p-4 ml-4 md:ml-6 hover:scale-105 hover:bg-[#a7f3d0] transition-all align-middle shadow-lg">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
              </button>
            </h2>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 md:mb-28">
            <div>
              <h4 className="text-gray-100 font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Full Stack Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Frontend Engineering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Backend Architecture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Implementation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Performance Optimization</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-100 font-semibold mb-6 text-lg">Projects</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">E-commerce Platforms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SaaS Applications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dashboards & Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Landing Pages</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-100 font-semibold mb-6 text-lg">Info</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Me</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resume</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-100 font-semibold mb-6 text-lg">Socials</h4>
              <div className="grid grid-cols-2 gap-3 max-w-[140px]">
                <a href="#" className="bg-[#1c1c1c] aspect-square rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-[#2a2a2a]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="bg-[#1c1c1c] aspect-square rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-[#2a2a2a]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="#" className="bg-[#1c1c1c] aspect-square rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-[#2a2a2a]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                </a>
                <a href="#" className="bg-[#1c1c1c] aspect-square rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-[#2a2a2a]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Large Chopped Name */}
        <div className="w-full relative flex justify-center overflow-hidden pt-4" style={{ height: "clamp(5rem, 16vw, 16rem)" }}>
          <h1 
            className="absolute font-[family-name:var(--font-montserrat)] font-black text-center whitespace-nowrap uppercase tracking-tighter"
            style={{ 
              lineHeight: 0.8,
              bottom: "0",
              transform: "translateY(15%)",
              background: "linear-gradient(180deg, #ffffff 0%, #d4d4d8 35%, #71717a 70%, #18181b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "0px 4px 20px rgba(0,0,0,0.2)"
            }}
          >
            {/* Desktop - dynamically sizes to screen width without overflowing */}
            <span className="hidden md:inline text-[8.5vw]">Ehtisham Hashim</span>
            {/* Mobile */}
            <span className="inline md:hidden text-[19vw]">Ehtisham</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
