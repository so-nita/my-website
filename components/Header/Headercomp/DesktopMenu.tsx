import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";
import { useRouter } from "next/router";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  const router = useRouter();

  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.4,
        }}
        className=" text-AAsecondary"
        
      >
        <ReactScrollLink to="aboutSection" spy={true} smooth={true} offset={-100} duration={200}>
          &gt; 1. 
          <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">About</span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.7,
        }}
        className="text-AAsecondary"
        
      >
        <ReactScrollLink to="WhereIhaveWorkedSection" spy={true} smooth={true} offset={-300} duration={200}>
          &gt; 2.{" "}
          <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">Experience</span>
        </ReactScrollLink>
      </motion.div>
    {/* Work */}
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.8,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink to="SomethingIveBuiltSection" spy={true} smooth={true} offset={-100} duration={200}>
        &gt; 3. <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">Work</span>

        </ReactScrollLink>
      </motion.div>

    {/* Soft Skills */}
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.8,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink to="SoftSkillSection" spy={true} smooth={true} offset={-100} duration={200}>
        &gt; 4. <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300"> Soft Skills</span>

        </ReactScrollLink>
      </motion.div>

      <motion.span
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 10,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink to="BeInTouchSection" spy={true} smooth={true} offset={-100} duration={200}>
          &gt; 5. <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">Contact</span>
        </ReactScrollLink>
      </motion.span>
      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
      <motion.button
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 10.2,
        }}
        onClick={()=>{router.push("/resume.pdf")}}
        //className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 "
      >
        {/* Resume */}
          <span className="font-mono text-sm relative py-2 px-4 ease-in infinite duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0">
            Resume
          </span>
      </motion.button>
      </a>
      
    </div>
  );
}