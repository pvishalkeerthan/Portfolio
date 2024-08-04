import { FaArrowDown } from "react-icons/fa";
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
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
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

      <div className="flex flex-col items-center justify-center relative my-20 z-10 ">
        <div className="flex items-center justify-center mb-8 fade-in">
          {/* Replace with your image */}
          <img
            src="my.jpg"
            alt="Vishal Keerthan"
            className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full border-4 border-gray-900 dark:border-gray-100 object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <TextGenerateEffect
            words="Vishal Keerthan Parankusham"
            className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6"
          />

          <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl text-gray-700 dark:text-gray-300 fade-in">
            Hi! I'm Vishal Keerthan, a passionate Computer Science student
            dedicated to developing innovative digital solutions and
            transforming ideas into impactful technology.
          </p>

          <a onClick={(e) => handleLinkClick(e, "#about")} className="mt-8">
            <MagicButton
              title="Explore My Work"
              icon={<FaArrowDown />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
