import Head from "next/head";
import { useContext, useEffect, useState, useRef } from "react";
import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/ProjectIveBuilt/ProjectIveBuilt";
import GetInTouch from "../components/Home/BeInTouch/BeInTouch";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
import SoftSkill from "../components/Home/SoftSkill/SoftSkill";

export default function Home() {
  const [showStartup, setShowStartup] = useState(true);
  const context = useContext(AppContext);  
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
      window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
    }

    Aos.init({ duration: 2000, once: true });

    // Immediately show content after a short delay to prevent flicker
    setTimeout(() => {
      setShowStartup(false);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 3850); // Reduced the delay for showing content quickly
  }, [context]);

  const meta = {
    title: "Web Developer",
    description: `I've been working on Software development for 2 years.`,
    type: "Personal Portfolio",
    image: "/sonita.png",
  };

  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* <meta property="og:site_name" content="Manu Arora" /> */}
        {/* <meta property="og:image" content={meta.image} /> */}
      </Head>

      <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full">
        {showStartup ? <Startup /> : null}

        {!showStartup && (
          <>
            <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
            <MyName finishedLoading={context.sharedState.finishedLoading} />
            <SocialMediaArround finishedLoading={context.sharedState.finishedLoading} />

            {context.sharedState.finishedLoading && (
              <>
                <AboutMe ref={aboutRef} />
                <WhereIHaveWorked />
                <SomethingIveBuilt />
                <SoftSkill />
                <GetInTouch />
                <Footer githubUrl={"https://github.com/so-nita"} hideSocialsInDesktop={true} />
              </>
            )}
          </>
        )}

        {!isProd && <ScreenSizeDetector />}
      </div>
    </>
  );
}
