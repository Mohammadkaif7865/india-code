import React from "react";

const Footer = () => {
  const year = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  return (
    <footer className="pagezContainer mx-auto">
      <div className="bg-[#222] ">
        <div className="w-[90%] mx-auto py-6 flex max-lg:flex-col justify-between items-center">
          <p className="text-[#ccc] max-md:text-[14px] max-md:text-center font-medium  font-poppins">
            Copyright @ {year()}. SIB Infotech The SEO Specialist. All Rights
            Reserved.
          </p>
          <div className="text-[#ccc] flex gap-4 max-lg:mt-4 max-md:text-[14px] font-poppins ">
            <a
              target="_blank"
              href={"https://www.sibinfotech.com/privacy-policy"}
            >
              Privacy Policy
            </a>
            <a
              target="_blank"
              href={"https://www.sibinfotech.com/terms-and-conditions"}
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
