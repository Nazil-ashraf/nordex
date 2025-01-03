"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Years Warranty",
    value: "25",
    postfix: "+",
    description: "Our product comes with an unmatched 25-year warranty, ensuring long-term reliability ",
  },
  {
    postfix: "+",
    metric: "Projects",
    value: "100",
    description: "We have Satisfied customer all over the world and completed 100+ projects",
  },
  {
    metric: "Customer Support",
    value: "24 ",
    postfix: "hrs",
    description: "Expert specialist support tailored to your project needs, from planning to completion.",
  },
  {
    metric: "Sustainable Choice",
    value: "100",
    description: "Plastic Free Packaging, FSC Certification, EcoVadis Verified and more.",
    postfix: "%"
  },
];

const AchievementsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);


  const boxVariant = {
    hidden: { opacity: 0, x: -100 }, // Start from left (x: -100)
    visible: { opacity: 1, x: 0 },   // Move to center (x: 0)
  };
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="  flex flex-col lg:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <motion.div
              ref={ref}

              key={index}
              className="sm:border-[#33353F] border bg-[black] shadow-md py-8 px-10 rounded-md  grid grid-row  min-h-[300px] mx-4 my-4 sm:my-0 sm:w-full md:w-1/2"
              initial="hidden"
              animate={controls}
              variants={boxVariant}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >

              <div className="text-white text-4xl font-bold flex flex-row justify-center">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </div>
              <p className="text-2xl font-bold text-primary-500 mb-4 text-center ">{achievement.metric}</p>
              <p className="text-[#545279] text-base text-center ">{achievement.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
