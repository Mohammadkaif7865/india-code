import React from "react";
import { IoMdMail } from "react-icons/io";

const EmailActon = () => {
  return (
    <div className="bg-[#e31a20] py-12 md:py-16">
      <div className="flex max-lg:gap-4  max-lg:flex-col lg:justify-between  lg:items-center w-[90%] mx-auto">
        <div>
          <h4 className="max-lg:text-center  text-[27px] leading-tight md:text-[36px] font-redhat text-white font-bold">
            Improve your search ranking now!
          </h4>
          <p className="max-lg:text-center leading-tight mt-2 text-white font-poppins text-[16px] lg:text-[20px]">
            Let's discuss your project with us by email
          </p>
        </div>
        <div>
          <a
            target="_blank"
            href={`mailto:contact@sibinfotech.com`}
            className=" max-lg:w-fit max-lg:mx-auto font-poppins flex justify-center border border-white text-white hover:border-transparent   hover:bg-white hover:text-[#222]   transition-all duration-300  group   rounded-[5px] text-[18px] font-bold   items-center gap-1 p-[10px_30px]"
          >
            <IoMdMail className="text-2xl    " />
            <span>contact@sibinfotech.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailActon;
