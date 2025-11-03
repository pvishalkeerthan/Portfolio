"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Achievements from "@/components/Achievements";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

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
