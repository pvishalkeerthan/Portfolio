"use client";

import React, { useState, useRef, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const About = () => {
  // GitHub stats - update with your GitHub username
  const githubUsername = "pvishalkeerthan";
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Ensure audio is ready when component mounts
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, []);

  const toggleMusic = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error("Error playing audio:", error);
        // If autoplay fails, try loading first
        audioRef.current.load();
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.error("Failed to play audio:", err);
        }
      }
    }
  };

  return (
    <section id="about" className="w-full py-20">
      <h1 className="heading mb-10">
        About <span className="text-purple">Me</span>
      </h1>

      {/* Audio player for background music */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        className="hidden"
      >
        <source src="/song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Disk Player - Sticky Bottom */}
      {isPlaying && (
        <div className="fixed bottom-6 right-6 z-[5000] flex items-center gap-4 bg-black/80 backdrop-blur-md border border-purple-500/50 rounded-2xl px-5 py-4 shadow-2xl">
          {/* Spinning Music Disk */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div 
              className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-900 via-purple-700 to-purple-900 border-4 border-purple-500/50 shadow-inner animate-spin"
              style={{
                animationDuration: '3s',
                backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0.6) 30%, rgba(79,70,229,0.8) 50%, rgba(139,92,246,0.6) 70%, rgba(139,92,246,0.3) 100%)',
              }}
            >
              {/* Center hole */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-black border-2 border-purple-400/30"></div>
              </div>
              {/* Grooves */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/20" style={{ margin: '8px' }}></div>
              <div className="absolute inset-0 rounded-full border border-purple-400/15" style={{ margin: '16px' }}></div>
            </div>
          </div>
          
          {/* Track Info */}
          <div className="flex flex-col min-w-[120px]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1 h-5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
            <span className="text-purple-300 text-xs font-medium mt-1">Now Playing</span>
            <span className="text-white text-sm font-semibold">The Search</span>
          </div>

          {/* Pause Button */}
          <button
            onClick={toggleMusic}
            className="w-10 h-10 rounded-full bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Pause music"
          >
            <svg
              className="w-5 h-5 text-purple-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          </button>

        </div>
      )}

      <BentoGrid className="w-full">
        {/* Achievements Section */}
        <BentoGridItem
          id={1}
          className="lg:col-span-5 md:col-span-6 md:row-span-2 lg:min-h-[40vh]"
          imgClassName="w-full h-full opacity-30"
          img={"/tech.jpg"}
        >
          <div className="relative h-full w-full flex flex-col px-5 p-5 lg:p-10 z-10">
            <div className="absolute top-6 right-6 z-20">
              <button
                onClick={toggleMusic}
                className="w-16 h-16 rounded-full bg-purple-500/40 backdrop-blur-sm border-2 border-purple-400/70 hover:bg-purple-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-purple-500/30"
                aria-label="Toggle music"
              >
                {isPlaying ? (
                  <svg
                    className="w-7 h-7 text-purple-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7 text-purple-300 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
            <div className="font-sans text-lg lg:text-3xl font-bold mb-4 text-white mt-auto">
              🏆 7x National Hackathon Champ · 2x Open Source Winner · Web 2
              Developer
            </div>
          </div>
        </BentoGridItem>

        {/* GitHub Status */}
        <BentoGridItem
          id={2}
          title="📊 GitHub Status"
          description="Latest contributions and coding stats"
          className="lg:col-span-2 md:col-span-6 md:row-span-2"
          imgClassName=""
          titleClassName="justify-center"
        >
          <div className="relative h-full w-full flex flex-col p-4 lg:p-8">
            <div className="font-sans text-lg lg:text-xl font-bold z-10 mb-3 text-center whitespace-nowrap">
              GitHub Status
            </div>
            <div className="flex-1 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&card_width=400`}
                alt="GitHub Stats"
                className="w-full h-full object-contain scale-110"
              />
            </div>
          </div>
        </BentoGridItem>

        {/* GDSC Web Lead & Community */}
        <BentoGridItem
          id={3}
          className="lg:col-span-3 md:col-span-6 md:row-span-2"
          imgClassName="w-full h-full opacity-60"
          img={"/gdsc.png"}
          titleClassName="justify-start"
        >
          <div className="relative h-full w-full flex flex-col px-5 p-5 lg:p-10 z-10">
            <div className="font-sans text-lg lg:text-2xl font-bold z-10 mb-3 mt-auto">
              🚀 GDSC Web Lead · 5K Run Organizer
            </div>
            <div className="font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              Leading the next wave of developers. Organizing events that spark innovation. Building communities that last.
            </div>
          </div>
        </BentoGridItem>
      </BentoGrid>
    </section>
  );
};

export default About;
