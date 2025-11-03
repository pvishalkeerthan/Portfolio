"use client";

import React from "react";
import Image from "next/image";

interface Category {
  name: string;
  items: { name: string; icon?: string }[];
  icon?: string;
}

const TechStack = () => {
  const categories: Category[] = [
    {
      name: "Languages",
      items: [
        { name: "C", icon: "/c.png" },
        { name: "C++", icon: "/c++.png" },
        { name: "Java", icon: "/java.png" },
        { name: "Python", icon: "/python.png" },
        { name: "JavaScript", icon: "/javascript-icon.svg" },
        { name: "TypeScript", icon: "/ts.svg" },
        { name: "Kotlin", icon: "/kotlin.png" },
        { name: "HTML", icon: "/w3_html5-icon.svg" },
        { name: "CSS", icon: "/w3_css-icon.svg" },
      ],
      icon: "/javascript-icon.svg",
    },
    {
      name: "Web Tech",
      items: [
        { name: "ReactJS", icon: "/reactjs-icon.svg" },
        { name: "NextJS", icon: "/nextjs-icon.svg" },
        { name: "NodeJS", icon: "/nodejs-icon.svg" },
        { name: "Express.js", icon: "/express.png" },
        { name: "TailwindCSS", icon: "/tailwindcss-icon.svg" },
        { name: "Bootstrap", icon: "/getbootstrap-icon.svg" },
        { name: "Material-UI", icon: "/material.png" },
        { name: "ShadCN", icon: "/shadcn.png" },
        { name: "Socket.io", icon: "/socket.png" },
        { name: "Redux", icon: "/redux.png" },
      ],
      icon: "/reactjs-icon.svg",
    },
    {
      name: "Cloud & DevOps",
      items: [
        { name: "AWS", icon: "/aws.png" },
        { name: "Firebase", icon: "/firebase.png" },
        { name: "Docker", icon: "/dock.svg" },
        { name: "Git", icon: "/git.svg" },
        { name: "GitHub", icon: "/git.svg" },
        { name: "Vercel", icon: "/vercel.png" },
        { name: "Cloudflare", icon: "/cloud.svg" },
      ],
      icon: "/git.svg",
    },
    {
      name: "Databases",
      items: [
        { name: "PostgreSQL", icon: "/postgressql.png" },
        { name: "MySQL", icon: "/mysql.png" },
        { name: "MongoDB", icon: "/mongodb-icon.svg" },
        { name: "Redis", icon: "/redis.png" },
        { name: "Supabase", icon: "/supabase.png" },
      ],
      icon: "/mongodb-icon.svg",
    },
    {
      name: "Design",
      items: [
        { name: "Figma", icon: "/figma.png" },
        { name: "Canva", icon: "/canva.png" },
        { name: "AutoCAD", icon: "/autocad.png" },
        { name: "Draw.io", icon: "/draw.png" },
        { name: "Excalidraw", icon: "/excalidraw.png" },
      ],
      icon: "/excalidraw.png",
    },
  ];

  return (
    <section id="tech-stack" className="w-full py-20">
      <h1 className="heading mb-10">
        My <span className="text-purple">Tech Stack</span>
      </h1>

      {/* Grid layout: 3-2 format with centered alignment */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* First row: 3 items */}
        <div className="grid md:col-span-2 lg:col-span-3 grid-cols-1 md:grid-cols-3 gap-8">
          {categories.slice(0, 3).map((category, catIndex) => (
            <CategoryCard key={catIndex} category={category} />
          ))}
        </div>

        {/* Second row: 2 items centered */}
        <div className="grid md:col-span-2 lg:col-span-3 grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {categories.slice(3).map((category, catIndex) => (
            <CategoryCard key={catIndex + 3} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div
      className="rounded-2xl border border-white/[0.1] p-8 group/tech hover:shadow-xl transition duration-200 backdrop-blur-sm"
      style={{
        background:
          "linear-gradient(135deg, rgba(4,7,29,0.8) 0%, rgba(12,14,35,0.8) 100%)",
      }}
    >
      <div className="flex items-center gap-3 mb-4 border-b border-purple-500/30 pb-2">
        {category.icon && (
          <div className="w-8 h-8 relative">
            <Image
              src={category.icon}
              alt={category.name}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        )}
        <h3 className="text-xl font-bold text-purple">{category.name}</h3>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {category.items.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-3 rounded-lg border border-white/[0.1] bg-slate-900/30 hover:border-purple-500/50 hover:bg-purple-900/20 transition-all duration-300 group/item cursor-pointer"
          >
            {tech.icon ? (
              <div className="w-8 h-8 relative mb-2">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="object-contain group-hover/item:scale-110 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="w-8 h-8 mb-2 flex items-center justify-center bg-gradient-to-br from-purple-700/30 to-blue-700/30 rounded-lg group-hover/item:from-purple-600/50 group-hover/item:to-blue-600/50 transition-all duration-300">
                <span className="text-xs font-bold text-gray-300">
                  {tech.name.charAt(0)}
                </span>
              </div>
            )}
            <span className="text-[10px] sm:text-xs text-center text-gray-400 group-hover/item:text-white transition-colors duration-300 font-medium">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
