import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../Icons/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function ProjectIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
      2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 3.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Projects I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // TODO : to here  */}

        {/* // ?  Project  1 ATech */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={""} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
                    transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/amaya-coffee-website.png"} alt={"Project Screen shot"} className={`w-full rounded h-full `} />
              {/* <Img src={"/amaya-coffee-website.png"} alt={"Project Screen shot"} className={`w-full h-full`} /> */}
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                {/* <Img src={"/ensvision.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} /> */}
                <Img src={"/amaya-coffee-website.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">ATech-it.com</span>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Dinex Park
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  At <span className="text-AAsecondary">Vision</span>, I played a crucial role in developing web aplication
                  for support company <span className="text-AAsecondary">Park Cafe </span> 
                  For operate their sale operations <span className="text-AAsecondary"> </span>{" "}
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10"> Boostrap </span>
                <span className="pr-4 z-10"> JavaScript </span>
                <span className="pr-4 z-10"> APS.Net Framework</span>
                <span className="pr-4 z-10"> MS Sql</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* <GithubIcon link="" /> */}
                <a href="" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>


      {/* // ?  Project 2 - Ecommerce */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a href="" target={"_blank"} rel="noreferrer">
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              {/* <Img src={"/ensvision.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} /> */}
              <Img src={"/amaya-coffee-website.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/amaya-coffee-website.png"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Ecommerce Website - Amaya Coffee
                  </span>
                </a>
              </div>

              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  This is an eCommerce website for Amaya Coffee. This project involved overseeing both the <span className="text-AAsecondary">design {" "}</span>
                  and implementation of a fully responsive online store. The website features an easy-to-navigate interface, secure payment options, and a seamless user experience, all built with the latest{" "}
                  <span className="text-AAsecondary">web technologies</span>. Here I share with you the completed {" "}
                  <span className="text-AAsecondary">Amaya Coffee</span> online store, now live and ready for use.
                </p>
              </div>

              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
                text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10"> HTML </span>
                <span className="pr-4 z-10"> CSS </span>
                <span className="pr-4 z-10"> Boostrap </span>
                <span className="pr-4 z-10"> JavaScript </span>
                {/* <span className="pr-4 z-10"> </span> */}
                <span className="pr-4 z-10"> Laravel </span>
                <span className="pr-4 z-10"> MySQL </span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <div className="z-10 flex fle-row space-x-5 ">
                  <GithubIcon link="" />
                  <a href="" target={"_blank"} rel="noreferrer">
                    <ExternalLink url={""} router={router} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 3 - FeverTokens */}
        {/* <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96  ">
          {/* Left image 
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={"https://www.fevertokens.io/"} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img src={"/ensvision.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
            </div>
          </div>

          {/* right Content 
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive 
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/ensvision.jpg"} alt={"Project Screen shot"} className={`w-full h-full`} />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
              col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">Recent Project</span>
                <a href="https://www.fevertokens.io/" target="_blank" rel="noopener noreferrer">
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    FeverTokens
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  I played a key role in developing an NFT marketplace project, focused on creating a decentralized
                  platform with scalable <span className="text-AAsecondary"> smart contracts</span> and{" "}
                  <span className="text-AAsecondary"> blockchain technology</span>. This platform,{" "}
                  <span className="text-AAsecondary"> FeverTokens - v2</span>, was showcased at the VivaTech2022 event
                  in Paris, providing builders with tools to develop scalable Web3 applications.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">Tokenization</span>
                <span className="pr-4 z-10">ERC721</span>
                <span className="pr-4 z-10">Solidity</span>
                <span className="pr-4 z-10">Smart Contracts</span>
                <span className="pr-4 z-10">Blockchain</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* <GithubIcon link="" /> 
                <a href="https://www.fevertokens.io/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div> 
    </div>
  );
}
