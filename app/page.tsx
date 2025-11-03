"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Achievements = dynamic(() => import("@/components/Achievements"), { ssr: false });
const TechStack = dynamic(() => import("@/components/TechStack"), { ssr: false });

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black-100">
      {/* Background covering full width */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-black-100"></div>
      </div>

      <main className="flex-1 flex justify-center items-center flex-col overflow-hidden">
        <div className="w-full max-w-7xl px-5 sm:px-10">
          <FloatingNav navItems={navItems} />
          <Hero />
          <About />
          <Experience />
          <RecentProjects />
          <Achievements />
          <TechStack />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
