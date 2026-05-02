"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const wireItems = [
  {
    label: "CURRENT FOCUS",
    text: "Understanding how high-performance rule engines process and block network requests in real time."
  },
  {
    label: "RECENT LAUNCH",
    text: "ClimateOS: A constraint-aware decision engine providing prioritized, resource-aware action plans.",
    link: "https://github.com/pvishalkeerthan/ClimateOS"
  }
];

export default function Home() {

  const [wireIndex, setWireIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWireIndex((prev) => (prev + 1) % wireItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [wireItems.length]);

  return (
    <div className="min-h-full lg:h-full w-full flex flex-col pt-2 px-3 pb-0 box-border">
      {/* Masthead */}
      <header className="flex flex-col items-center justify-center pb-3 double-hairline-b mb-4 shrink-0 relative">
        <a 
          href="https://drive.google.com/file/d/1mLC_25jNq3-y8NmLJBW4qcwFnFkbUoMm/view" 
          target="_blank" 
          rel="noreferrer" 
          className="absolute right-0 top-0 hidden md:flex flex-col items-center hover:scale-105 transition-transform cursor-pointer group z-10"
          title="Click or Scan for Resume"
        >
          <div className="relative w-16 h-16 mix-blend-multiply group-hover:scale-105 transition-transform mb-0.5">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&bgcolor=EDE2D5&data=https://drive.google.com/file/d/1mLC_25jNq3-y8NmLJBW4qcwFnFkbUoMm/view" 
              alt="QR Code" 
              className="w-full h-full object-contain contrast-[1.1]"
            />
          </div>
          <span className="font-courier text-[9px] uppercase tracking-widest text-news-ink font-bold group-hover:text-news-accent transition-colors">Resume</span>
        </a>
        <div className="w-full flex justify-between text-xs sm:text-sm font-courier uppercase tracking-widest mb-2 hairline-b pb-2 md:pr-20">
          <div>
            <a href="https://github.com/pvishalkeerthan" target="_blank" rel="noreferrer" className="text-news-accent hover:underline mr-4 font-bold">GitHub</a>
            <a href="https://www.linkedin.com/in/vishal-keerthan/" target="_blank" rel="noreferrer" className="text-news-accent hover:underline mr-4 font-bold">LinkedIn</a>
            <a href="mailto:p.vishalkeerthan@gmail.com" className="text-news-accent hover:underline font-bold">Email</a>
          </div>
          <div className="font-bold hidden lg:block text-center flex-1">
            *** LATE CITY DISPATCH ***
          </div>
          <div className="text-right whitespace-nowrap">
            Vol. 1 • 2026
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center w-full mt-2">
          <h1 className="font-playfair font-black tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-center leading-none mt-0 transition-all duration-300">
            Vishal Keerthan Parankusham
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:grid lg:grid-cols-4 gap-4 lg:gap-2 xl:gap-4 overflow-x-hidden transition-all duration-300">
        
        {/* Left Column (Col 1) */}
        <section className="flex flex-col gap-2 lg:pr-4 lg:hairline-r overflow-y-auto lg:overflow-y-auto order-2 lg:order-1 border-b lg:border-b-0 border-news-ink pb-6 lg:pb-0 scrollbar-visible">
          {/* Portrait & Brief */}
          <div className="border-b border-news-ink pb-2 shrink-0 flex flex-col">
            <div className="bg-news-ink text-news-bg p-2.5 text-xs font-courier leading-tight">
              <span className="font-playfair text-news-bg text-3xl float-left mr-1.5 leading-[0.8] font-bold">V</span>
              enturing into DevOps, Distributed systems, and Scalable architecture for production systems.
            </div>
            <div className="w-full h-[240px] sm:h-[195px] lg:h-[min(205px,25vh)] xl:h-[min(225px,25vh)] relative border border-news-ink overflow-hidden mix-blend-multiply filter grayscale contrast-[1.15] sepia-[.1] shrink-0 transition-all duration-300">
              <Image 
                src="/image.jpeg" 
                alt="Vishal Keerthan Parankusham" 
                fill 
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            <p className="text-[10px] font-courier text-right uppercase text-news-ink mt-1 hairline-t pt-1">Fig 1. — The Developer</p>
          </div>

          {/* Experience */}
          <div className="flex-1 min-h-[150px] overflow-hidden flex flex-col">
            <h2 className="font-oswald uppercase text-sm sm:text-base hairline-b pb-1 mb-1 shrink-0 transition-all">Experience</h2>
            <div className="text-xs overflow-y-auto pr-2">
              {/* Experience 1 */}
              <div className="mb-2 lg:mb-8">
                <div className="flex justify-between items-baseline lg:mb-1">
                  <span className="font-bold font-oswald uppercase block text-news-accent text-[11px] lg:text-sm">Software Engineer</span>
                  <span className="font-courier text-[9px] lg:text-[10px] uppercase">Dec '25 – Mar '26</span>
                </div>
                <p className="font-bold italic mt-0.5 mb-1 lg:mb-2 text-news-ink/80 text-[11px] lg:text-xs">Geode Labs</p>
                <p className="leading-tight lg:leading-relaxed mt-0.5 lg:mt-1 text-justify-newspaper">
                  Built and shipped end-to-end features for ETHStars and Geode across live production systems. Designed backend services powering real-time data accuracy.
                </p>
              </div>
              {/* Experience 2 */}
              <div className="mb-2 lg:mb-8">
                <div className="flex justify-between items-baseline lg:mb-1">
                  <span className="font-bold font-oswald uppercase block text-news-accent text-[11px] lg:text-sm">OS Developer</span>
                  <span className="font-courier text-[9px] lg:text-[10px] uppercase">Sep '24 – Nov '24</span>
                </div>
                <p className="font-bold italic mt-0.5 mb-1 lg:mb-2 text-news-ink/80 text-[11px] lg:text-xs">Hacktoberfest · DevFest AI</p>
                <p className="leading-tight lg:leading-relaxed mt-0.5 lg:mt-1 text-justify-newspaper">
                  Contributed across multiple repos (backend fixes, UI improvements). Ranked Top 15 out of 500+ teams competing in full-stack problem statements.
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* Center Main (Col 2 & 3) */}
        <section className="col-span-1 lg:col-span-2 flex flex-col gap-2 lg:pr-4 lg:hairline-r overflow-y-auto lg:overflow-y-auto order-1 lg:order-2 border-b lg:border-b-0 border-news-ink pb-6 lg:pb-0 scrollbar-visible">
          {/* Core Identity - Redesigned for Editorial Impact */}
          <article className="shrink-0 mb-8 pb-10 border-b-2 border-news-ink">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-news-accent text-news-bg px-2 py-0.5 text-[9px] font-oswald uppercase tracking-widest font-black animate-pulse">Breaking</span>
              <span className="border border-news-ink px-2 py-0.5 text-[9px] font-oswald uppercase tracking-widest font-bold">Special Dispatch</span>
              <span className="font-courier text-[9px] uppercase text-news-ink/60 italic ml-auto hidden sm:block">Filing: System Architecture</span>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
              <div className="flex-1">
                <h1 className="font-playfair text-5xl sm:text-4xl md:text-5xl lg:text-[2.5rem] xl:text-[3.2rem] font-black leading-[0.8] uppercase tracking-tighter mb-2 transition-all duration-300">
                  Product<br/>Engineer
                </h1>
                <div className="font-lora text-xs md:text-sm lg:text-sm xl:text-base italic leading-tight text-news-ink/90 max-w-lg border-l-2 border-news-accent pl-2 mt-4 transition-all duration-300">
                  Full-Stack Developer & DevOps Engineer building high-performance, resilient systems.
                </div>
              </div>
              
              <div className="w-full md:w-auto shrink-0 flex flex-col gap-2 md:text-right">

                <div className="mt-4 hidden md:block">
                  <span className="font-oswald text-[10px] uppercase text-news-accent font-black block mb-2 tracking-widest">Accolades</span>
                  <div className="font-oswald uppercase text-xs flex flex-col gap-1.5 font-bold">
                    <div className="border-b border-news-ink/20 pb-1">JPMC Code for Good ’25</div>
                    <div className="border-b border-news-ink/20 pb-1">7× Hackathon Winner</div>
                    <div className="pb-1">Top 15 DevFest ’24</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          
       

          <h2 className="font-oswald uppercase text-base hairline-b pb-1 mb-1 shrink-0">Project Briefs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 flex-1 min-h-[200px] overflow-y-auto pr-2 pb-2">
            
            {/* Project 1 */}
            <a 
              href="https://github.com/pvishalkeerthan/Sambhav" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col sm:pr-4 sm:hairline-r group cursor-pointer p-1 -m-1 rounded-sm transition-all duration-200"
            >
              <h3 className="font-playfair text-lg font-bold leading-tight mb-1 group-hover:text-news-accent group-hover:underline group-hover:decoration-[3px] group-hover:underline-offset-4 transition-all duration-200 shrink-0">
                Sambhav: AI Career Platform
              </h3>
              <div className="text-[10px] sm:text-[11px] text-justify-newspaper line-clamp-3">
                Empowering marginalized communities through AI-driven skill development. Features smart assessment logic, voice evaluation via Whisper and Gemini, and a real-time placement dashboard.
              </div>
              <div className="mt-2 text-[9px] font-courier uppercase tracking-tight text-news-ink/60 italic">
                Stack: Next.js 15, Flask, Supabase, Whisper, Gemini
              </div>
            </a>

            {/* Project 2 */}
            <a 
              href="https://github.com/pvishalkeerthan/sakhi" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col group cursor-pointer p-1 -m-1 rounded-sm transition-all duration-200"
            >
              <h3 className="font-playfair text-lg font-bold leading-tight mb-1 group-hover:text-news-accent group-hover:underline group-hover:decoration-[3px] group-hover:underline-offset-4 transition-all duration-200 shrink-0">
                Sakhi: Women Safety App
              </h3>
              <div className="text-[10px] sm:text-[11px] text-justify-newspaper line-clamp-3">
                A tech-powered security platform empowering women through geofencing, spycam detection, and legal aid chatbots. Features real-time SOS alerts triggered by device movement.
              </div>
              <div className="mt-2 text-[9px] font-courier uppercase tracking-tight text-news-ink/60 italic">
                Stack: React, Node.js, MongoDB, Geolocation
              </div>
            </a>

            {/* Project 3 */}
            <a 
              href="https://github.com/pvishalkeerthan/Bob-blockchain" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col sm:pr-4 sm:hairline-r group cursor-pointer p-1 -m-1 rounded-sm transition-all duration-200"
            >
              <h3 className="font-playfair text-lg font-bold leading-tight mb-1 group-hover:text-news-accent group-hover:underline group-hover:decoration-[3px] group-hover:underline-offset-4 transition-all duration-200 shrink-0">
                Bob: Crowdsourced Intelligence
              </h3>
              <div className="text-[10px] sm:text-[11px] text-justify-newspaper line-clamp-3">
                A Solana-powered marketplace for data labeling and content rating. Businesses set bounties in SOL while global contributors earn rewards for high-quality ML data insights.
              </div>
              <div className="mt-2 text-[9px] font-courier uppercase tracking-tight text-news-ink/60 italic">
                Stack: Solana, Web3, React, Node.js
              </div>
            </a>

            {/* Project 4 */}
            <a 
              href="https://github.com/pvishalkeerthan/wakey-wakey" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col group cursor-pointer p-1 -m-1 rounded-sm transition-all duration-200"
            >
              <h3 className="font-playfair text-lg font-bold leading-tight mb-1 group-hover:text-news-accent group-hover:underline group-hover:decoration-[3px] group-hover:underline-offset-4 transition-all duration-200 shrink-0">
                Wakey-Wakey: Uptime Monitoring
              </h3>
              <div className="text-[10px] sm:text-[11px] text-justify-newspaper line-clamp-3">
                Decentralized uptime monitoring utilizing a global validator network. Provides real-time latency analytics and response trends while rewarding node operators with SOL.
              </div>
              <div className="mt-2 text-[9px] font-courier uppercase tracking-tight text-news-ink/60 italic">
                Stack: Solana, Next.js, Prisma, WebSockets
              </div>
            </a>

            {/* Project 5 */}
            <a 
              href="https://github.com/pvishalkeerthan/Think_Track" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col sm:pr-4 sm:hairline-r group cursor-pointer p-1 -m-1 rounded-sm transition-all duration-200"
            >
              <h3 className="font-playfair text-lg font-bold leading-tight mb-1 group-hover:text-news-accent group-hover:underline group-hover:decoration-[3px] group-hover:underline-offset-4 transition-all duration-200 shrink-0">
                ThinkTrack: Personalized Testing
              </h3>
              <div className="text-[10px] sm:text-[11px] text-justify-newspaper line-clamp-3">
                A gamified learning platform featuring customizable quizzes, collaborative test-taking, and AI-powered progress tracking to visualize educational growth and milestones.
              </div>
              <div className="mt-2 text-[9px] font-courier uppercase tracking-tight text-news-ink/60 italic">
                Stack: React, Node.js, Gamification Engine
              </div>
            </a>

            {/* Project 6 */}
            <a 
              href="https://github.com/pvishalkeerthan/PromptScape" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col group cursor-pointer p-1 -m-1 rounded-sm transition-all duration-200"
            >
              <h3 className="font-playfair text-lg font-bold leading-tight mb-1 group-hover:text-news-accent group-hover:underline group-hover:decoration-[3px] group-hover:underline-offset-4 transition-all duration-200 shrink-0">
                PromptScape: AI Creativity
              </h3>
              <div className="text-[10px] sm:text-xs text-justify-newspaper line-clamp-3">
                A dynamic prompt-sharing space where users explore and share creative inputs for AI tools. Built with robust search, user profiles, and seamless Google authentication.
              </div>
              <div className="mt-2 text-[9px] font-courier uppercase tracking-tight text-news-ink/60 italic">
                Stack: Next.js, MongoDB, Tailwind CSS
              </div>
            </a>

          </div>
        </section>

        {/* Right Column (Col 4) */}
        <section className="flex flex-col gap-2 overflow-y-auto lg:overflow-y-auto order-3 lg:order-3 pb-6 lg:pb-0 scrollbar-visible">
          {/* Achievements */}
          <div className="flex-1 min-h-[150px] flex flex-col">
            <h2 className="font-oswald uppercase text-base hairline-b py-1 mb-2 shrink-0">Hall of Fame</h2>
            <div className="overflow-y-auto pr-2 flex flex-col gap-2 scrollbar-visible">
              <div className="border-l-2 border-news-accent pl-2">
                <span className="font-bold font-oswald uppercase text-[10px] block text-news-ink leading-tight">1st Place • JPMC Code for Good '25</span>
                <p className="text-[9px] font-courier leading-tight mt-0.5 text-news-ink/80">Built an AI platform for Sambhav Foundation featuring multilingual onboarding and ML assessments.</p>
              </div>
              <div className="border-l-2 border-news-accent pl-2">
                <span className="font-bold font-oswald uppercase text-[10px] block text-news-ink leading-tight">1st Place (State) • Google Solution Challenge</span>
                <p className="text-[9px] font-courier leading-tight mt-0.5 text-news-ink/80">Developed Sakhi, a women’s safety platform with real-time tracking and AI threat detection.</p>
              </div>
              <div className="border-l-2 border-news-accent pl-2">
                <span className="font-bold font-oswald uppercase text-[10px] block text-news-ink leading-tight">3rd Place • INNO-VA-THON 2.0</span>
                <p className="text-[9px] font-courier leading-tight mt-0.5 text-news-ink/80">Built 'BoB', a Solana-powered data labeling marketplace with crypto-incentivized quests.</p>
              </div>
              <div className="border-l-2 border-news-accent pl-2">
                <span className="font-bold font-oswald uppercase text-[10px] block text-news-ink leading-tight">1st Place • HackFusion Hackathon</span>
                <p className="text-[9px] font-courier leading-tight mt-0.5 text-news-ink/80">Delivered a full-stack community orchestration platform with real-time chat and financial tracking.</p>
              </div>
              <div className="border-l-2 border-news-accent pl-2">
                <span className="font-bold font-oswald uppercase text-[10px] block text-news-ink leading-tight">National Finalist • NewGen Ideathon</span>
                <p className="text-[9px] font-courier leading-tight mt-0.5 text-news-ink/80">Designed a QR-based college bus tracking system with real-time route management.</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="shrink-0 pt-2 hairline-t">
            <h2 className="font-oswald uppercase text-base hairline-b pb-1 mb-1">Tech Stack</h2>
            <div className="font-courier text-[10px] xl:text-xs leading-relaxed">
              <span className="font-bold font-oswald uppercase text-news-accent text-[11px] xl:text-xs block mb-0.5">Languages & Frontend</span>
              JavaScript, TypeScript, Python, ReactJS, NextJS, TailwindCSS, Redux
              <span className="font-bold font-oswald uppercase text-news-accent text-[11px] xl:text-xs block mt-2 mb-0.5">Backend & Systems</span>
              NodeJS, Express.js, REST APIs, JWT, Socket.io, Firebase
              <span className="font-bold font-oswald uppercase text-news-accent text-[10px] lg:text-[11px] xl:text-xs block mt-2 mb-0.5">Database & ORMs</span>
              PostgreSQL, MySQL, MongoDB, Redis, Prisma ORM, Supabase
              <span className="font-bold font-oswald uppercase text-news-accent text-[10px] lg:text-[11px] xl:text-xs block mt-2 mb-0.5">DevOps & Cloud</span>
              Git, GitHub Actions, Docker, Nginx, AWS, Vercel
            </div>
          </div>

          {/* On The Wire (Slider) */}
          <div className="shrink-0 pt-6 pb-0 md:py-2 hairline-t mb-2">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-oswald uppercase text-[10px] tracking-widest text-news-accent flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-news-accent animate-pulse"></span>
                On The Wire
              </h2>
              <div className="flex gap-1">
                {wireItems.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setWireIndex(i)}
                    className={`w-2 h-2 transition-colors ${wireIndex === i ? 'bg-news-accent' : 'bg-news-ink/20'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="relative h-24 w-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 w-full h-full flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${wireIndex * 100}%)` }}
              >
                {wireItems.map((item, idx) => (
                  <div key={idx} className="w-full h-full flex-shrink-0 pr-1">
                    <span className="font-bold font-oswald text-xs uppercase block leading-tight text-news-ink mb-1">{item.label}</span>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className="font-courier text-xs leading-relaxed text-justify-newspaper line-clamp-3 transition-colors cursor-pointer group block">
                        {item.text.includes("ClimateOS") ? (
                          <>
                            <span className="font-bold group-hover:text-news-accent group-hover:underline decoration-news-accent/30 underline-offset-2 transition-colors">ClimateOS</span>
                            {item.text.slice(item.text.indexOf("ClimateOS") + 9)}
                          </>
                        ) : item.text}
                      </a>
                    ) : (
                      <p className="font-courier text-xs leading-relaxed text-justify-newspaper line-clamp-3">
                        {item.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

      </main>

      {/* Editorial Footer */}
      <footer className="w-full hairline-t hairline-b py-1 flex justify-center items-center gap-4 text-[10px] sm:text-[11px] font-playfair italic text-news-ink/80 shrink-0 mt-auto relative">
        <div className="absolute left-0 flex items-center h-full">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        </div>
        
        <span className="whitespace-nowrap">Coffee brewed.</span>
        <span className="not-italic text-[10px] sm:text-xs">★</span>
        <span className="whitespace-nowrap">Anime queued.</span>
      </footer>
    </div>
  );
}
