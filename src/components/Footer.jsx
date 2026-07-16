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
                <li>Full Stack Development</li>
                <li>Frontend Engineering</li>
                <li>Backend Architecture</li>
                <li>UI/UX Implementation</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-100 font-semibold mb-6 text-lg">Projects</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#caresync" className="hover:text-white transition-colors">CareSync</a></li>
                <li><a href="#hifazat-ai" className="hover:text-white transition-colors">Hifazat AI</a></li>
                <li><a href="#pak-twin" className="hover:text-white transition-colors">Pak Twin</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-100 font-semibold mb-6 text-lg">Info</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
                <li><a href="https://drive.google.com/file/d/1NVD46RHikcVtV-qmxc18SujpZy1miqC5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Resume</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-100 font-semibold mb-6 text-lg">Socials</h4>
              <div className="grid grid-cols-3 gap-3 max-w-[180px]">
                <a href="https://x.com/ehtishm2hashim" target="_blank" rel="noopener noreferrer" className="bg-[#1c1c1c] aspect-square rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-[#2a2a2a]" title="X (Twitter)">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-gray-300"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-ehtisham-hashim-930439291/" target="_blank" rel="noopener noreferrer" className="bg-[#1c1c1c] aspect-square rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-[#2a2a2a]" title="LinkedIn">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-gray-300"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/ehtisham-hashim" target="_blank" rel="noopener noreferrer" className="bg-[#1c1c1c] aspect-square rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-[#2a2a2a]" title="GitHub">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-gray-300"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://threads.net/@ehtisham_hashim" target="_blank" rel="noopener noreferrer" className="bg-[#1c1c1c] aspect-square rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-[#2a2a2a]" title="Threads">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-gray-300"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6 0 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/></svg>
                </a>
                <a href="mailto:ehtisham.dev.ai@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-[#1c1c1c] aspect-square rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-[#2a2a2a]" title="Email">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-gray-300"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </a>
                <a href="https://wa.me/923180057581" target="_blank" rel="noopener noreferrer" className="bg-[#1c1c1c] aspect-square rounded-xl flex items-center justify-center hover:bg-[#2a2a2a] transition-colors border border-[#2a2a2a]" title="WhatsApp">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-gray-300"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
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
