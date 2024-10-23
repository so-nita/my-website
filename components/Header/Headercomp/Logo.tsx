// import React from "react";
// import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
// import Img from "../../Icons/Img";
import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion"; // You can import directly from 'framer-motion'
import Img from "../../Icons/Img"; // Make sure this is the correct path for your Img component


export default function Logo(props: { finishedLoading: boolean }) {
  return (
    <>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          y: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
          opacity: { delay: props.finishedLoading ? 0 : 8, duration: 0 },
        }}
        //className=" relative h-12 w-10 "
        className="relative h-12 w-32 sm:h-10 sm:w-16 sm:pt-2"
      >
        {/* <motion.span
          initial={{ x: 1 }}
          className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-AAsecondary"
        >
          So
        </motion.span>

        <motion.div animate={{ rotate: -30, y: 5 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
        <motion.div animate={{ rotate: 90, x: -10, y: 18 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
        <motion.div animate={{ rotate: 30, y: 31 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
        <motion.div animate={{ rotate: -30, y: 27, x: 19 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
        <motion.div animate={{ rotate: 30, x: 19, y: -10 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div>
        <motion.div animate={{ rotate: 90, x: 28, y: 2 }} className="h-1 w-6 rounded bg-AAsecondary"></motion.div> */}
        <Img src="/sonita.png" alt="logo" className="object-cover sm:pt-1" />
        
        {/* <Img src="/logo.svg" alt="logo" className="object-cover sm:pt-1" /> */}
        {/* <Img src="https://www.canva.com/design/DAGT_Eh8ChA/VvbxYWLOlj73owZ1SjbcjQ/view?utm_content=DAGT_Eh8ChA&utm_campaign=share_your_design&utm_medium=link&utm_source=shareyourdesignpanel" alt="logo" className="h-12 w-10" /> */}
      </motion.div>
    </>
  );
}
