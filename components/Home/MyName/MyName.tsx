import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { useRouter } from "next/router";
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.4, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.5, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        BORIN SONITA.
      </motion.h1>

      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.6, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Innovations are born.
      </motion.h2>

      {/* <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        Hello! My name is Sonita, and I am a passionate software engineer and problem solver, dedicated to creating impactful codes. 
        My journey in computer science began in <span className="text-AAsecondary">2021</span> when I started my degree and delved into 
        <span className="text-AAsecondary">Web Design</span>. Little did I know that programming skills would become essential in pursuing this interest, marking the start of my programming journey. 
        I officially began my career in <span className="text-AAsecondary">2022</span>, working across different industries to apply and enhance my skills.
        <br className="3xl:block hidden" />
        <span className="text-gray-400">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Since pursuing my computer science degree, my career has taken me through diverse industries, allowing me to refine my expertise in 
          <span className="text-AAsecondary">Desktop</span> and <span className="text-AAsecondary">Web Development</span>. My passion for web and continuous learning drives me to make a positive impact and advance technology.
        </span>
        <br className="3xl:block hidden" /> 
        I am excited to contribute to dynamic projects that push the boundaries of technology.
      </motion.h3> */}
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.7, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Hello, I&apos;m Sonita, an aspiring software developer. Although I attend college at <span className="text-AAsecondary">Royal University of Phnom Penh  </span>since <span className="text-AAsecondary"> 2021</span>. My passion for {" "}
        <span className="text-AAsecondary">technology</span> and <span className="text-AAsecondary">coding</span> has driven me to take a proactive approach in learning, which I pursued through {" "}
        <span className="text-AAsecondary">Udemy courses</span>. I started with foundational courses in <span className="text-AAsecondary">HTML</span>, <span className="text-AAsecondary">CSS</span>, <span className="text-AAsecondary">Bootstrap</span>, and <span className="text-AAsecondary">JavaScript</span>, and later advanced my skills with <span className="text-AAsecondary">PHP</span> and <span className="text-AAsecondary">C#</span>. {" "}
        <br className="3xl:block hidden" />
        With over a year of experience working in development since <span className="text-AAsecondary"> 2022</span>, I have gained hands-on expertise in creating dynamic web applications through both <span className="text-AAsecondary">Front-End</span> and <span className="text-AAsecondary">Back-End</span> development. I am now looking to further enhance my skills and take on new challenges in a role that will allow me to contribute meaningfully to a team.
        <br className="3xl:block hidden" /> <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        I&apos;m particularly excited about the opportunity to join a dynamic team that values continuous learning and <span className="text-AAsecondary">innovation</span>.
      </motion.h3>



      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
          y: { delay: props.finishedLoading ? 0 : 10.8, duration: props.finishedLoading ? 0 : 0.2 },
        }}
        className="mt-12"
      >
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          {/* <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            My resume here!
          </button> */}
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 ">
            <span className="font-mono text-sm relative px-4 sm:px-8 py-3 sm:py-4 ease-in infinite duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0">
              My resume here!
            </span>
          </button>
        </a>
      </motion.div>
    </div>
  );
}
