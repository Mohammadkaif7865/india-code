import Contact from "../components/Home/Contact";
import DriveMore from "../components/Home/DriveMore";
import EmailActon from "../components/Home/EmailActon";
import Hero from "../components/Home/Hero";
import Locations from "../components/Home/Locations";
import PpcMangement from "../components/Home/PpcMangement";
import Reviews from "../components/Home/Reviews";
import About from "../components/Home/About";
import SeoServices from "../components/Home/SeoServices";
import SocialMedia from "../components/Home/SocialMedia";
import WebDesigning from "../components/Home/WebDesigning";
import React from "react";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <section className="pagezContainer  mx-auto w-full mt-[-100px]  ">
        <Hero />
        <About />
        <div className="mx-auto lg:min-h-screen w-full bg-[url(/seo-services/bg-seo.jpg)]  bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
          <SeoServices />
        </div>
        <PpcMangement />
        <div className="mx-auto min-h-[500px] w-full bg-[url(/web-design.jpg)]  bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
          <WebDesigning />
        </div>
        <SocialMedia />
        <div className="mx-auto    w-full bg-[url(/hero-bg-4.jpg)]  bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
          <DriveMore />
        </div>
        <Reviews />
        <EmailActon />
        <Contact />

        <Locations />
      </section>
    </Layout>
  );
};

export default HomePage;
