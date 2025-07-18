import Email from "@/components/Email";
import Loader from "@/components/Loader";
import SocialIcons from "@/components/SocialIcons";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Head from "next/head";
import React, { useState } from "react";

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return <div className="app">
    <Head>
      <title>MD Toushif Alam</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>
    {
      showContent && (
        <>
    <Navbar />
    <SocialIcons />
    <Email />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
        </>
      )
    }
    <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
  </div>;
}

export default Index;
