import React from "react";
import HeroForm from "./HeroForm";

const Hero = () => {
  const images = [
    {
      img: "https://www.sibinfotech.com/digital-marketing-services-in-mumbai/banner/logo/best-website-deigning-ana-development-company-in-india.svg",
      alt: "best-website-deigning-ana-development-company-in-mumbai.svg",
    },
    {
      img: "https://www.sibinfotech.com/digital-marketing-services-in-mumbai/banner/logo/best-design-comapnies-in-india.svg",
      alt: "best-design-comapnies-in-mumbai.svg",
    },
    {
      img: "https://www.sibinfotech.com/digital-marketing-services-in-mumbai/banner/logo/facebook-reviews.svg",
      alt: "facebook-reviews.svg",
    },
    {
      img: "https://www.sibinfotech.com/digital-marketing-services-in-mumbai/banner/logo/search-engine-optimization-firm-in-delhi.svg",
      alt: "search-engine-optimization-firm-in-mumbai.svg",
    },
    {
      img: "https://www.sibinfotech.com/digital-marketing-services-in-mumbai/banner/logo/top-advertising-and-marketing-company (1).png",
      alt: "/top-advertising-and-marketing-company-in-mumbai ",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-black/30 md:pb-10 pt-[50px] ">
      <video
        src={
          "https://www.sibinfotech.com/digital-marketing-services-in-mumbai/banner/banner-video.mp4"
        }
        height={"400px"}
        autoPlay
        loop
        playsInline
        muted
        className=" object-cover md:object-fill size-full absolute top-0 -z-[1]"
      ></video>

      <div className="w-[90%] mx-auto py-20  ">
        <div className="flex   ">
          <div className="lg:w-[calc(100%-404px)] w-full">
            <h1 className="font-bold font-poppins text-[#58E1FA] max-md:text-center text-[17px] md:text-[22px]">
              #1 Digital Marketing Agency in Mumbai
            </h1>
            <ul className="listBanner  md:w-fit relative font-redhat font-bold text-4xl md:text-5xl max-md:text-center  text-white px-[10] my-7">
              <li className="px-1 py-2 relative z-[2] ">Get More Sales</li>
              <li className="px-1 py-2 relative z-[2]">Get More Leads</li>
              <li className="px-1 py-2 relative z-[2] ">Get More Traffic</li>
            </ul>
            <div className="lg:pr-6 max-md:flex max-md:flex-wrap  max-md:justify-center max-md:items-center  md:grid  md:grid-cols-5  max-md:gap-2 md:gap-3  ">
              {/*   */}
              {images.map((items, i) => {
                return (
                  <div
                    className=" max-md:flex-[0_0_30%]  bg-white rounded-[5px] flex justify-center items-center "
                    key={i}
                  >
                    <div className=" relative  rounded-[5px] flex  max-h-[100px] max-md:h-[79px]  p-2 ">
                      <img
                        className="object-contain    "
                        width={300}
                        height={80}
                        quality={100}
                        src={items?.img}
                        alt={items?.img}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[404px] max-lg:hidden">
            <HeroForm />
          </div>
        </div>
        <hr className=" max-md:hidden text-gray-300 my-5" />
        <div className="grid gap-8 max-md:hidden  md:grid-cols-2 lg:grid-cols-4 ">
          <div>
            <h4 className="font-poppins text-[22px] text-white font-semibold">
              Digital Marketing <br className="max-lg:hidden" /> Services
            </h4>
          </div>
          <div>
            <h4 className="font-poppins text-[22px] text-white font-semibold">
              Search Engine <br className="max-lg:hidden" /> Optimization
              Services
            </h4>
          </div>
          <div>
            <h4 className="font-poppins text-[22px] text-white font-semibold">
              PPC Management <br className="max-lg:hidden" /> Services
            </h4>
          </div>
          <div>
            <h4 className="font-poppins text-[22px] text-white font-semibold">
              Graphic Desgining <br className="max-lg:hidden" /> Services
            </h4>
          </div>
        </div>
      </div>
      <div>
        <img
          width={1000}
          height={200}
          className=" absolute w-full  object-cover z-[2] bottom-0 h-[30px]  md:h-[95px]"
          src={
            "https://www.sibinfotech.com/digital-marketing-services-in-mumbai/banner/bg-wave.svg"
          }
          alt="bg-wave"
        />
      </div>
    </div>
  );
};

export default Hero;
