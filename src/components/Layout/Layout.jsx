import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideBar, { closeSideBar } from "../sidebar/SideBar";
import FooterBar from "../Footer/FooterBar";
import { IoIosPaperPlane } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Model from "../Home/Model";
import { IoLogoWhatsapp } from "react-icons/io5";
// import Header from "../Header";
// import Footer from "../Footer";

function Layout({
  title,
  description,
  keywords,
  children,
  noheader,
  nofooter,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <>
        {noheader ? null : <Header />}
        <main
          style={{
            minHeight: "80vh",
          }}
        >
          {children}
          <SideBar />
        </main>
        <div
          id="laypuotoverlay"
          className="overlay hidden  fixed top-0 left-0 bottom-0 right-0  bg-black/60  z-[99]"
          onClick={() => {
            closeSideBar();
          }}
        ></div>
        <Model isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <div className="z-[2] max-lg:hidden sticky bottom-0 ">
          <FooterBar />
        </div>
        <div className="z-[2] sticky bottom-0 lg:hidden grid grid-cols-3  text-white   ">
          <div className="py-3   bg-[#3979F8] text-white tooltip">
            <span className="tooltiptext">Call</span>
            <a target="_blank" href={"tel:+91 9222 260000"}>
              <FaPhoneAlt className="text-[25px] mx-auto block " />
            </a>
          </div>
          <div className="py-3  bg-[#E31A20] tooltip">
            <span className="tooltiptext">Request a Quote</span>
            <a href={"#contact"}>
              <IoIosPaperPlane className="text-3xl mx-auto block " />
            </a>
          </div>
          <div className="py-3  bg-[#55cd6c] tooltip">
            <span className="tooltiptext">Whatsapp</span>
            <a
              target="_blank"
              href={"https://api.whatsapp.com/send?phone=918850525860&text=Hi"}
            >
              <IoLogoWhatsapp className="text-3xl mx-auto block " />
            </a>
          </div>
        </div>

        {nofooter ? null : <Footer />}
      </>
    </HelmetProvider>
  );
}

export default Layout;
