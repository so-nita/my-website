import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/ProjectIveBuilt/ProjectIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";

// Removed: Maintenance and ThisCantBeReached components, as they seem unused in the final JSX.

export default function Home() {
  const [ShowElement, setShowElement] = useState(false);  // Still used for the startup logo
  const context = useContext(AppContext);  // Context is used to manage shared state
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  const [ShowMe, setShowMe] = useState(false);
  //const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(true);

  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
      // remove Typing project EventListeners
      window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
    }

    setTimeout(() => {
      setShowElement(true);
    }, 1000);

    // setTimeout(() => {
    //   setShowThisCantBeReached(false);
    // }, 5400);
    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 10400);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);


  console.log("website is rendering...");
  const meta = {
    title: "Web Developer",
    description: `I've been working on Software development for 2 years.`,
    //image: "/titofCercle.png",
    type: "Personal Portfolio",
  };
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* <meta property="og:url" content={`https://anaflous.com`} />
        <link rel="canonical" href={`https://anaflous.com`} /> */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        {/* <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@titofabdo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
      </Head>

      {/* Removed condition for checking if user is blacklisted. It wasn't used further in the code */}
      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
        {/* {context.sharedState.finishedLoading ? <></> : ShowThisCantBeReached ? <ThisCantBeReached /> : <></>} */}
        {context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>}
        {context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>}
        <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
        <MyName finishedLoading={context.sharedState.finishedLoading} />
        <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />
        {context.sharedState.finishedLoading && (
          <>
            <AboutMe ref={aboutRef} />
            <WhereIHaveWorked />
            <SomethingIveBuilt />
            <GetInTouch />
            <Footer githubUrl={"https://github.com/so-nita"} hideSocialsInDesktop={true} />
          </>
        )}
        {!isProd && <ScreenSizeDetector />}
      </div>
    </>
  );
}
