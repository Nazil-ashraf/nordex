"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Slider from "./Slider";


const HeroSection = () => {


  return (
    <section className="lg:py-16">
      <div className="flex flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 mt-10 text-center sm:text-left justify-self-start"
        >
          <TypeAnimation
            className="text-transparent h-[500px] bg-clip-text bg-gradient-to-b from-[rgba(244,138,138,1)] to-[rgba(73,121,251,1)] text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-bold "
            sequence={[
              "Support Services from Nordex",
              1000,
              "Your Connect to Efficiency!",
              1000,
              "Secure Access Simplfied Control",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          <p className="text-[#545279)] text-base sm:text-lg mb-6 lg:text-2xl">
            Nordex brings to you the tested electrical and
            optical solutions, catering to a wide spectrum of industries - Telecommunication, Building, Industrial and Utilities.We continuously strive for excellence in all aspects of our business through the integration of sustainable business development and innovation, delighting our customers with timely delivery of our products and services at all times.
          </p>
          {/* <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Explore
            </Link>
          </div> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <Slider />
          {/* <Image
            src="/images/cable.jpeg"
            alt="hero image"
            className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
            width={400}
            height={400}
          /> */}
          {/* <Slider {...settings}>
            <div>
              <div>
                <div>Test Slide 1</div>
                <Image
                  src="/images/cable.jpeg"
                  alt="hero image"
                  width={400}
                  height={400}
                />
              </div>
              <div>
                <div>Test Slide 2</div>
                <Image
                  src="/images/cable.jpeg"
                  alt="hero image"
                  width={400}
                  height={400}
                />
              </div>
            </div>


          </Slider> */}
          {/* <Slider {...settings}>
            <div>
              <Image
                src="/images/cable.jpeg"
                alt="hero image"
                className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                src="/images/cable.jpeg"
                alt="hero image"
                className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                src="/images/cable.jpeg"
                alt="hero image"
                className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                src="/images/cable.jpeg"
                alt="hero image"
                className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
                width={400}
                height={400}
              />
            </div>
          </Slider> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
