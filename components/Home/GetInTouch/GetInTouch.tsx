import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function BeInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      {/* // ? Title */}
      <div className="flex flex-row items-center ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm  sm:text-base"> 04.</span>
          <span className=" font-sans text-AAsecondary text-base">Wait! What&apos;s Next?</span>
        </div>
      </div>
      
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">Be in Touch</span>
      <p className="flex font-Header tracking-wider text-gray-400 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
      Although I&apos;m always excited about new opportunities, and my inbox is widely open! If you want to drop a message or just wanna connect,
      I&apos;ll make it a point to get back to you!
      </p>

      <div className="pt-4">
        <a href="mailto:sonita.borin2@gmail.com" target="_blank" rel="noreferrer">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-gray-900 rounded group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 ">
            <span className="font-mono text-sm relative px-8 py-3 transition-all infinite duration-75 bg-white dark:bg-gray-900 rounded group-hover:bg-opacity-0">
              Say Hello
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}
