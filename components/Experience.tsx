import React from "react";
import Image from "next/image";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-12 max-w-7xl mx-auto">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 min-h-[200px] justify-start"
          >
            <div className="flex lg:flex-row flex-col lg:items-start p-4 py-6 md:p-6 lg:p-8 gap-4">
              <Image
                src={card.thumbnail}
                alt={card.title}
                width={60}
                height={60}
                className="w-16 h-16 object-contain"
              />
              <div className="flex-1">
                <h1 className="text-start text-xl md:text-2xl font-bold mb-3">
                  {card.title}
                </h1>
                <p className="text-start text-gray-300 mt-2 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
