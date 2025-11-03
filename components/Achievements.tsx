"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

interface Achievement {
  id: number;
  title: string;
  description: string;
  position?: string; // e.g., "1st Place", "Winner", "5th Place"
  date?: string;
  organization?: string;
  category?: "Hackathon" | "Competition" | "Certificate" | "Achievement";
  icon?: React.ReactNode;
  colors?: number[][];
  animationSpeed?: number;
  containerClassName?: string;
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Code For Good",
      description:
        "Built AI assessment platform with ML algorithms for 8-language voice analysis, securing 1st place among 40 teams.",
      position: "1st Place",
      date: "July 2025",
      organization: "J.P. Morgan Chase",
      category: "Hackathon",
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ],
      animationSpeed: 3,
      containerClassName: "bg-pink-900 rounded-3xl overflow-hidden",
    },
    {
      id: 2,
      title: "Google Solution Challenge",
      description:
        "Launched Sakhi women's safety app with AI threat detection, winning 1st among 50+ teams.",
      position: "1st Place",
      date: "February 2025",
      category: "Hackathon",
      colors: [[125, 211, 252]],
      animationSpeed: 3,
      containerClassName: "bg-sky-600 rounded-3xl overflow-hidden",
    },
    {
      id: 3,
      title: "INNO-VA-THON 2.0",
      description:
        "Created BoB blockchain intelligence platform using Solana, achieving 3rd place.",
      position: "3rd Place",
      date: "January 2025",
      category: "Hackathon",
      colors: [[34, 197, 94]],
      animationSpeed: 5,
      containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden",
    },
    {
      id: 4,
      title: "EduHacks National",
      description:
        "Created test.ai platform, earning Top 10 recognition and Best UI/UX Award from 96 national teams.",
      position: "Top 10 + Best UI/UX",
      date: "October 2024",
      category: "Hackathon",
      colors: [[168, 85, 247]],
      animationSpeed: 3,
      containerClassName: "bg-purple-900 rounded-3xl overflow-hidden",
    },
    {
      id: 5,
      title: "HackFusion",
      description:
        "Won 1st place among 50+ teams for developing Community Manager, a sustainability platform.",
      position: "1st Place",
      date: "March 2024",
      category: "Hackathon",
      colors: undefined,
      animationSpeed: 5.1,
      containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden",
    },
    {
      id: 6,
      title: "National Ideathon",
      description:
        "Designed user experience solution with interactive prototyping, securing 5th place in 180+ teams competition.",
      position: "5th Place",
      date: "March 2024",
      category: "Competition",
      colors: [[59, 130, 246]],
      animationSpeed: 3,
      containerClassName: "bg-blue-900 rounded-3xl overflow-hidden",
    },
  ];

  const getDefaultColors = (index: number) => {
    const colorSets = [
      [[125, 211, 252]],
      [
        [255, 166, 158],
        [221, 255, 247],
      ],
      [[34, 197, 94]],
      [[168, 85, 247]],
      [[236, 72, 153]],
      [[59, 130, 246]],
    ];
    return colorSets[index % colorSets.length];
  };

  return (
    <section className="w-full py-20" id="achievements">
      <h1 className="heading mb-10">
        My <span className="text-purple">Achievements</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20 max-w-7xl mx-auto">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            colors={achievement.colors || getDefaultColors(index)}
            animationSpeed={achievement.animationSpeed || 3}
            containerClassName={
              achievement.containerClassName ||
              "bg-purple-900 rounded-3xl overflow-hidden"
            }
          />
        ))}
      </div>
    </section>
  );
};

interface AchievementCardProps {
  achievement: Achievement;
  colors: number[][];
  animationSpeed: number;
  containerClassName: string;
}

const AchievementCard = ({
  achievement,
  colors,
  animationSpeed,
  containerClassName,
}: AchievementCardProps) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] w-full h-[35rem] rounded-3xl p-4 relative"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={animationSpeed}
              containerClassName={containerClassName}
              colors={colors}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-6 py-4 h-full flex flex-col justify-center items-center text-center">
        <div>
          <h2
            className="dark:text-white text-center text-2xl opacity-100
         relative z-10 text-white font-bold mb-6 transition duration-200"
          >
            {achievement.title}
          </h2>
          {achievement.position && (
            <div className="mb-3">
              <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-bold border border-purple-500/30">
                {achievement.position}
              </span>
            </div>
          )}
          {achievement.organization && (
            <div className="mb-3">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30">
                {achievement.organization}
              </span>
            </div>
          )}
        </div>

        <div className="mt-auto">
          <p
            className="text-sm opacity-100
         relative z-10 text-gray-300 text-center
         transition duration-200 leading-relaxed"
          >
            {achievement.description}
          </p>
          {achievement.date && (
            <div className="mt-4">
              <span className="text-gray-500 text-xs">{achievement.date}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
