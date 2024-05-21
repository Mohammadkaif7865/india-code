import React from "react";
import { FaPhoneAlt, FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";

const DriveMore = () => {
  return (
    <div className="bg-[#3979f8c7] py-20   ">
      <div className="flex flex-col  items-center justify-center max-lg:w-[90%] mx-auto">
        <h1 className="font-redhat text-[27px] max-lg:leading-tight md:text-[36px] text-center font-bold text-white">
          Want To Drive More Traffic To Your Business Website?
        </h1>
        <p className="font-poppins text-white text-[17px] md:text-[20px]  lg:w-[70%] mx-auto text-center font-  my-4">
          Contact us today to learn more about how we can help drive more
          traffic to your business website and take your online presence to the
          next level!
        </p>
        <button className=" flex group justify-center items-center border   bg-white text-[#222] hover:border-white hover:text-white font-redhat hover:bg-opacity-0  transition-all duration-300  group   rounded-[10px] text-[14px] md:text-[16px] font-bold    gap-1 p-[10px_15px] lg:p-[10px_20px] uppercase">
          <span>Speak With An Expert </span>
          <span className="p-2 bg-black transition-all group-hover:bg-white  rounded-md">
            <FaPhoneAlt className="text-[14px] transition-all text-white group-hover:text-black " />
          </span>
        </button>
      </div>
    </div>
  );
};

export default DriveMore;
