import React from "react";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Reviews = () => {
  const data = [
    {
      review:
        "SIB Infotech's SEO services are top-notch! I've been working with them for a few months now and have already seen a significant increase in my website's traffic and search engine rankings. I highly recommend their services to anyone looking to improve their online visibility and drive more traffic to their website. ",
    },
    {
      review:
        "Since working with SIB Infotech, my business has seen a significant increase in website traffic, leads, and sales. I highly recommend their Google Ads services to any business looking to increase its online presence and generate more revenue. They are a fantastic team to work with and truly care about their client's success. ",
    },
    {
      review:
        "I am extremely impressed with the web design provided by SIB Infotech. From the initial consultation to the final delivery of my website, their team was professional, efficient, and dedicated to delivering a high-quality product. They were always available to answer my questions and address my concerns promptly.  ",
    },
  ];
  return (
    <div id="reviews" className="bg-white">
      <div className="w-[90%] mx-auto py-12 lg:py-20 ">
        <h1 className="text-[#212529] lg:w-[80%] mx-auto text-center font-redhat text-[27px] max-lg:leading-tight  lg:text-[36px] font-bold leading-[45px]  ">
          What Our Clients Have to Say About Our Top-Notch Digital Marketing
          Services
        </h1>

        <div className="md:p-[30px] flex max-lg:flex-col bg-white md:drop-shadow-2xl md:border rounded-2xl mt-8">
          <div className="lg:w-[50%] ">
            <div className="flex items-center ">
              <div className="w-[25%]">
                <div id="rocket" className=" md:w-[100px] mx-auto ">
                  <img
                    width={150}
                    height={100}
                    src={"https://www.sibinfotech.com/digital-marketing-services-in-mumbai/rocket.png"}
                    alt="rocket"
                  />
                </div>
              </div>
              <div className="w-[75%]">
                <h2 className="text-[18px] md:text-[22px] max-md:text-center font-redhat text-[#212529] font-bold">
                  We’ve driven over
                </h2>
                <div className="w-[100%] lg:w-[80%] max-md:mx-auto py-2 md:py-4 items-center grid grid-cols-6 gap-2 text-[24px] md:text-[45px] font-[800] text-white font-poppins">
                  <span className="b  md:px-2 text-center  rounded counterBg">
                    6
                  </span>
                  <span className="b  md:px-2 text-center  rounded counterBg">
                    8
                  </span>
                  <span className="b  md:px-2 text-center  rounded counterBg">
                    {" "}
                    4{" "}
                  </span>
                  <span className="b  md:px-2 text-center  rounded counterBg">
                    2{" "}
                  </span>
                  <span className="b  md:px-2 text-center  rounded counterBg">
                    0{" "}
                  </span>
                  <span className="b  md:px-2 text-center  rounded counterBg">
                    5{" "}
                  </span>
                </div>
                <h2 className="text-[18px] md:text-[22px] max-md:text-center font-redhat text-[#212529] font-bold">
                  leads for clients.
                </h2>
              </div>
            </div>
            <div className="lg:w-[70%] grid grid-cols-2  gap-6 mt-8">
              <div className="text-center p-[20px_10px] text-white bg-[#4582FF]   rounded-2xl">
                <h1 className="text-[27px] md:text-[36px] font-redhat font-bold ">
                  3x
                </h1>
                <p className="mt-[2px] max-md:text-[14px] leading-tight  ">
                  Growth in Revenue Generated
                </p>
              </div>
              <div className="text-center p-[20px_10px] text-white  bg-[#f49200] rounded-2xl ">
                <h1 className="text-[27px] md:text-[36px] font-redhat font-bold rounded-2xl ">
                  4x
                </h1>
                <p className="mt-[2px] max-md:text-[14px] leading-tight  ">
                  Increase in Organic Leads
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-full max-lg:mt-6 ">
            <div className="flex gap-2 md:gap-8 ">
              <div>
                <div className="w-[25px] md:w-[70px]">
                  <img
                    width={100}
                    height={100}
                    src={"https://www.sibinfotech.com/digital-marketing-services-in-mumbai/left-quote.png"}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[calc(100%-33px)] md:w-[calc(100%-102px)] ">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={false}
                  modules={[Pagination, Navigation, Autoplay]}
                  className="reviewSwiper"
                >
                  <div className="">
                    {data.map((items, i) => {
                      return (
                        <SwiperSlide className="pb-6 lg:pb-10 pt-2 " key={i}>
                          <div className="flex gap-6">
                            <div className=" ">
                              <p className=" font-poppins text-justify font-semibold  text-[14px] md:text-[20px]">
                                {items.review}
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
