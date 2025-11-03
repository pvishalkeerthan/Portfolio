import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image"; // Import the Image component

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          layout="fill" // Adjusts to the container size
          objectFit="cover" // Ensures the image covers the container
          className="opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Seeking new opportunities in{" "}
          <span className="text-purple">technology</span> and innovation.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Looking for the next impossible problem to solve. Let's connect.
        </p>
        <a href="mailto:p.vishalkeerthan@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center ml-32 mr-28">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Vishal Keerthan
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={info.img}
                alt="social media icon"
                width={20} // Adjust width as needed
                height={20} // Adjust height as needed
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
