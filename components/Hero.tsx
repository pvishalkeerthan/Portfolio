"use client";
import { FaFileDownload } from "react-icons/fa";
import Image from "next/image"; // Import Image from next/image
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  // Define handleLinkClick function
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (typeof document !== "undefined") {
      const section = document.querySelector(link);
      if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="relative pb-20 pt-36 mt-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background grid and radial gradient */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col items-center justify-center relative my-20 z-10">
        {/* Profile Image */}
        <div className="flex items-center justify-center mb-8 fade-in">
          <Image
            src="/my.jpg"
            alt="Vishal Keerthan"
            width={300}
            height={300}
            className="rounded-full border-4 border-gray-900 dark:border-gray-100 object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <TextGenerateEffect
            words="Vishal Keerthan Parankusham"
            className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          />

          <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl text-gray-700 dark:text-gray-300 fade-in">
            Some collect trophies. I collect &apos;holy shit, that actually
            works&apos; moments.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-6 mb-6 fade-in">
            <a
              href="https://github.com/pvishalkeerthan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 hover:bg-purple-500/20 hover:scale-110 transition-all duration-300 flex items-center justify-center"
              aria-label="GitHub"
            >
              <Image
                src="/github-icon.svg"
                alt="GitHub"
                width={32}
                height={32}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-keerthan/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 hover:bg-purple-500/20 hover:scale-110 transition-all duration-300 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Image
                src="/link.svg"
                alt="LinkedIn"
                width={32}
                height={32}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.codechef.com/users/pvishal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 hover:bg-purple-500/20 hover:scale-110 transition-all duration-300 flex items-center justify-center"
              aria-label="CodeChef"
            >
              <Image
                src="/codechef.png"
                alt="CodeChef"
                width={32}
                height={32}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8 fade-in">
            <a
              href="https://drive.google.com/file/d/1RMq_VYRQa9kYam9gEhLz2QacojdwX40x/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <MagicButton
                title="Resume"
                icon={<FaFileDownload />}
                position="left"
                otherClasses="w-auto"
              />
            </a>
            <a
              href="mailto:p.vishalkeerthan@gmail.com"
              className="inline-block"
            >
              <MagicButton
                title="Lets Get in Touch"
                icon={null}
                position="right"
                otherClasses="w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
