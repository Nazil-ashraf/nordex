"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const achievementArray = [
    { title: '25-Year Warranty', description: "A comprehensive system and application warranty on all installations completed by an Excel Partner." },
    { title: 'Safe And Secure', description: "Ensuring safety with fully CPR-compliant products as standard for reliable and secure installations." },
    { title: '24*7 Customer Support ', description: "Expert specialist support tailored to your project needs, from planning to completion." },
    { title: 'Sustainable Choice ', description: "100% Plastic Free Packaging, FSC Certification, EcoVadis Verified and more." }
  ]

  return (
    <section className="text-white" id="about">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/main.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          {/* <h2 className="text-4xl font-bold text-white mb-4">About Me</h2> */}
          <p className="text-3xl  mb-3">
            <strong className={"text-4xl font-bold text-[#545279] mb-4"}> NORDEX</strong> is a world-class premium performance end-to-end infrastructure solution – designed, manufactured, supported and delivered – <i>without compromise.</i>
          </p>

          {/* <div className="flex flex-row flex-wrap justify-start mt-8 gap-8">
            {achievementArray?.map((item) =>
              <div className="flex flex-col gap-5 p-8 bg-black  text-center">
                <div className="text-[orange] text-2xl font-bold">
                  {item.title}
                </div>
                <div>
                  {item.description}
                </div>

              </div>

            )}
          </div> */}


          {/* <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div> */}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
