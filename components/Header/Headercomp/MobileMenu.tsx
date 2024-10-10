import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
const MobileMenu = props => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={props.rotate ? { x: "0" } : { x: "100%" }}
        transition={{ x: { duration: 0.4 } }}
        className="w-full fixed h-screen flex md:hidden duration-300 z-20"
      >
        <div
          onClick={() => closeMenu()}
          className="w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"
        ></div>
        <div
          className="w-3/4 h-full bg-MobileNavBarColor flex flex-col 
        justify-center items-center space-y-8 font-sans"
        >
          <Link
            to="aboutSection"
            spy={true}
            smooth={true}
            offset={-50}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-sm font-mono">01. {" "}
              <span
                className="text-white font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300"
                >
                  About
              </span>
            </span>
            
          </Link>
          <Link
            to="WhereIhaveWorkedSection"
            spy={true}
            smooth={true}
            offset={-250}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-sm font-mono hover:cursor-pointer">02. {" "}
              <span
                className="text-white font-Text2 text-sm sm:text-base
                hover:text-AAsecondary hover:cursor-pointer duration-300"
              >
                Experience
              </span>
            </span>
            
          </Link>
          <Link
            to="SomethingIveBuiltSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-sm font-mono">03. {" "}
              <span
                className="text-white font-Text2 text-sm sm:text-base
                hover:text-AAsecondary hover:cursor-pointer duration-300"
              >
                Work
              </span>
            </span>
            
          </Link>
          <Link
            to="GetInTouchSection"
            spy={true}
            smooth={true}
            offset={100}
            duration={200}
            onClick={() => closeMenu()}
            className="flex flex-col text-center space-y-2"
          >
            <span className="text-AAsecondary text-sm font-mono">04. {" "}
              <span
                className="text-white font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300"
                >
                  Contact
              </span>
            </span>
            
          </Link>
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
            {/* <button
              className="rounded border font-Text2  border-AAsecondary
              hover:bg-ResumeButtonHover py-2 sm:py-4 px-5 sm:px-10 text-xs text-AAsecondary"
            >
              Resume
            </button> */}
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 ">
              <span className="font-mono relative py-2 sm:py-3 px-5 sm:px-10 text-sm ease-in infinite duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0">
                Resume
              </span>
            </button>
          </a>
        </div>
      </motion.div>
    </>
  );
};
export default MobileMenu;
