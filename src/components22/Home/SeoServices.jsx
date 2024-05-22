import React, { useEffect, useState } from "react";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
// import Model from "./Model";

const SeoServices = () => {
  const [open, setOpen] = useState(null);
  const [openDesktop, setOpenDesktop] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const seoServices = [
    {
      id: "on-page-seo",
      index: "01",
      title: "ON Page SEO ",
      heading: "On-Page SEO Services",
      discription:
        "On-page SEO is the foundation of any successful SEO strategy. At SIB Infotech, we specialize in providing comprehensive on-page SEO services that help businesses achieve higher search engine rankings, increased traffic, and improved user engagement.",
      discription_2:
        "On-page SEO is the sub-category that is useful in optimizing the on-page contents of your website which boosts your website ranking higher on search engines. It focuses on website tools like structure, content, and appearance. It includes the optimization of HTML tags and images on the website of your brand.",
    },
    {
      id: "off-page-seo",
      index: "02",
      title: "OFF Page SEO  ",
      heading: "Off-Page SEO Services",
      discription:
        "Our off-page SEO services are designed to help you improve your online visibility, increase your website's ranking on search engines, and drive targeted traffic to your website. Our team of experts stays up-to-date with the latest off-page SEO trends and best practices to ensure that we deliver results that exceed your expectations.",
      discription_2:
        "The profitable results of SEO tools can be only devoured by any business if they choose and invest in a reliable Off-page SEO company. At SIB Infotech we make sure that your brand acquires the top rankings with our services that are the best in India. We are amongst the top SEO companies in India.",
    },
    {
      id: "e-commerce-seo",
      index: "03",
      title: "E-Commerce SEO ",
      heading: "E-Commerce SEO Services",
      discription:
        "Effective E-commerce SEO strategies help businesses increase their visibility on SERPs, attract more targeted traffic to their online store, and ultimately drive more sales. At our agency, we specialize in providing comprehensive E-commerce SEO services that are tailored to the unique needs of each client, helping them achieve their specific goals and objectives.",
      discription_2:
        "Your business website must be loaded with products but are they visible to the potential users? At this point confusion, e-Commerce SEO plays the main role to target the potential customers to your website without paying a single penny for ads. If you are able to attract people at least once to your company website, display and mesmerize them with high-quality products and intriguing offers motivating them to buy your services",
    },
    {
      id: "mobile-seo",
      index: "04",
      title: "Mobile SEO",
      heading: "Mobile SEO",
      discription:
        "A great majority of website audience has switched to mobile for convenience and easy access to information at any point of time. This shift has led to severe competition among the websites to maintain their visibility on the mobile. We offer specialized mobile SEO services that focus on your company's website along with optimizing it for mobile search results and high-quality user experience. A combination of accurate SEO tools is the key to successful and effective mobile SEO services.",
      discription_2:
        "With the increasing use of smartphones and other mobile devices, it has become essential for businesses to optimize their websites for mobile users. Our team of SEO experts understands the importance of mobile optimization and can help you improve your website's visibility on mobile search engine results pages (SERPs).",
    },
  ];
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const activeSection = () => {
    const sections = document.querySelectorAll(".seoServices");
    sections.forEach((section) => {
      if (isInViewport(section)) {
        setOpenDesktop(section.id);
      }
    });
  };

  let rows = seoServices.map((item) => {
    return { uid: uuidv4(), value: item };
  });

  useEffect(() => {
    window.addEventListener("scroll", activeSection);
    return () => {
      window.removeEventListener("scroll", activeSection);
    };
  }, []);

  return (
    <>
      <div id="services" className=" py-20 text-white">
        <div className="w-[90%] mx-auto">
          <a
            target="_blank"
            href={
              "https://www.sibinfotech.com/search-engine-optimization-seo-services"
            }
            className="py-2 px-3 rounded bg-blue-200 font-medium font-poppins  text-black"
          >
            SEO Services
          </a>
          <div className="flex max-lg:flex-col lg:justify-between lg:items-center mt-8">
            <h2 className="font-bold font-redhat text-[27px] md:text-4xl">
              Begin Your SEO Journey With Best SEO Company in{" "}
              <br className="max-lg:hidden" /> Mumbai - India, to Grow Your
              Business Online
            </h2>
            <a
              href="#contact"
              // onClick={() => setIsModalOpen(true)}
              className=" font-redhat bg-[#E31A20] max-lg:w-fit max-lg:mt-8 group flex justify-center border border-black text-white  hover:bg-opacity-0  hover:text-[#E31A20] hover:border-[#E31A20]    transition-all duration-300  group   rounded-[10px] text-[14px]  font-medium   items-center gap-1 p-[10px_15px] lg:p-[12px_25px]"
            >
              {" "}
              <span>LET'S DISCUSS</span>
              <FaSquareArrowUpRight className="text-2xl group-hover:text-[#E31A20] text-white   " />
            </a>
          </div>
          <hr className="text-gray-200 mb-4 mt-8 md:my-16" />

          <div className="flex gap-8 ">
            <div className="w-full lg:w-[30%]">
              <div className="sticky top-10">
                {seoServices.map((items, i) => {
                  return (
                    <>
                      <div key={rows[i].uid.slice(0, 4)} className=" ">
                        <div
                          className={` font-redhat flex max-lg:items-center gap-4 ${
                            open == items.id
                              ? "max-lg:text-[#e31a20]"
                              : "grid-rows-[0fr]"
                          }  ${
                            openDesktop == items.id
                              ? "lg:text-[#e31a20]"
                              : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="text-[24px] md:text-4xl font-bold ">
                            {items.index}
                          </div>
                          <div>
                            <a href={`#${items.id}`}>
                              <h4
                                className={`font-bold text-[18px] md:text-[22px] `}
                                onClick={() => {
                                  setOpen(items.id);
                                }}
                              >
                                {items.title}
                              </h4>
                            </a>
                          </div>
                        </div>
                        <div
                          className={`text-white  grid  transition-all duration-300 ${
                            open == items.id
                              ? "max-lg:grid-rows-[1fr] max-lg:!text-[#e31a20]"
                              : "grid-rows-[0fr]"
                          }
                        ${
                          openDesktop == items.id
                            ? "lg:grid-rows-[1fr] "
                            : "grid-rows-[0fr]"
                        }

                        `}
                        >
                          <div className="overflow-hidden">
                            <p className="max-lg:hidden font-redhat font-bold border-l text-justify text-ellipsis overflow-hidden line-clamp-5 my-2 ml-4 pl-4  border-gray-300">
                              {items.discription}
                            </p>
                            {/* for mobile */}

                            <div className="lg:hidden mt-8 rounded-2xl overflow-hidden  shadow">
                              <div className="p-[20px]  bg-white text-[#222] ">
                                <h3 className="text-[#212529] font-redhat text-[24px] font-bold">
                                  {items.heading}
                                </h3>

                                <p className=" my-[16px] font-poppins text-justify text-base ">
                                  {items.discription}
                                </p>
                                <p className="my-[8px] font-poppins text-justify text-base">
                                  {items.discription_2}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="text-gray-300 my-4  md:my-8" />
                    </>
                  );
                })}
              </div>
            </div>
            <div className="max-lg:hidden lg:w-[70%] flex flex-col gap-8 pb-32">
              {seoServices.map((items, i) => {
                return (
                  <div
                    key={`1${items.index}`}
                    id={`${items.id}`}
                    className="seoServices sticky top-0  rounded-2xl overflow-hidden  shadow"
                  >
                    <div className="p-[40px]  bg-white text-[#222] ">
                      <h3 className="text-[#212529] font-redhat text-[30px] font-bold">
                        {items.heading}
                      </h3>

                      <p className=" my-[16px] font-poppins text-base ">
                        {items.discription}
                      </p>
                      <p className="my-[8px] font-poppins text-base">
                        {items.discription_2}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <Model isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
    </>
  );
};

export default SeoServices;
