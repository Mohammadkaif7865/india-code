"use client";

import React, { useEffect, useState } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";

import { IoCloseSharp } from "react-icons/io5";
import { Tooltip } from "antd";
import Model from "../Home/Model";

export const openSideBar = () => {
  document.querySelector("#sidebar").classList.remove("left-[-100%]");
  document.querySelector("#sidebar").classList.add("left-0");
};
export const closeSideBar = () => {
  document.querySelector("#sidebar").classList.remove("left-0");
  document.querySelector("#sidebar").classList.add("left-[-100%]");
};

const SideBar = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = (e) => {
    setTooltipOpen(e);
  };

  const handleMouseLeave = (e) => {
    setTooltipOpen(e);
  };
  const links = [
    {
      url: "#about",
      linkName: "About",
    },
    {
      url: "#services",
      linkName: "Services",
    },
    {
      url: "#reviews",
      linkName: "Coustomer Review",
    },
    {
      url: "#contact",
      linkName: "Contact Us",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/sibinfotech/",
      icon: <TiSocialFacebook />,
      id: "Facebook",
      title: "Facebook",
    },
    {
      href: "https://twitter.com/sibinfotech",
      icon: <FaTwitter />,
      id: "Twitter",
      title: "Twitter",
    },
    {
      href: "https://www.linkedin.com/company/sib-infotech",
      icon: <FaLinkedinIn />,
      id: "Linkedin",
      title: "LinkedIn",
    },
    {
      href: "https://www.youtube.com/user/sibinfotech",
      icon: <FaYoutube />,
      id: "Youtube",
      title: "YouTube",
    },
  ];

  return (
    <div
      id="sidebar"
      className={` transition-all duration-300 fixed top-0 left-[-100%] bg-white  p-8 min-h-screen max-md:w-full w-[355px] z-[99]`}
    >
      <div>
        <IoCloseSharp
          className="text-3xl block ml-auto transition-all cursor-pointer mr-0 hover:text-blue-500 "
          onClick={closeSideBar}
        />
      </div>
      <div>
        <div className="">
          {links.map((value, i) => {
            return (
              <a
                className="block p-[8px_10px] text-[14px] font-bold font-redhat"
                key={i}
                href={value.url}
              >
                {value.linkName}
              </a>
            );
          })}
        </div>
        <div className="font-redhat flex flex-col  gap-4 mt-8">
          <a
            target="_blank"
            href="tel:+91 8850 525860"
            className="flex  text-[20px] items-center gap-2 font-bold text-blue-500 "
          >
            <FaPhoneAlt className="text-2xl" />
            <span>+91 8850 525860</span>
          </a>
          <button
            className=" flex justify-center border border-black  hover:border-[#E31A20] hover:text-[#E31A20]  bg-opacity-0  transition-all duration-300  group   rounded text-[18px] font-bold   items-center gap-1 p-[10px_15px]"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <span>Schedule a meeting now </span>
            <FaSquareArrowUpRight className="text-2xl    " />
          </button>
        </div>
        <div className="my-8">
          <h3 className=" text-[20px] font-medium font-redhat">Follow Us</h3>
          <div className="flex items-center gap-6 text-xl mt-6 font-poppins">
            {socialLinks.map((values, i) => {
              return (
                <a
                  key={i}
                  target="_blank"
                  className="hover:text-[#e31a20]"
                  href={values.href}
                  onMouseEnter={() => {
                    handleMouseEnter(values.id);
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave("");
                  }}
                >
                  <Tooltip
                    open={tooltipOpen == values.id ? true : false}
                    title={values.title}
                  >
                    {values.icon}
                  </Tooltip>
                </a>
              );
            })}
          </div>
        </div>
        <div className=" rounded overflow-hidden bg-white w-[60%] shadow-xl drop-shadow-sm">
          <p className="bg-blue-400 p-1 text-white text-center font-[14px] font-poppins">
            Premier Partner
          </p>
          <div className="py-1 flex bg-white">
            <img
              className="m-auto pt-1"
              width={80}
              height={100}
              src={
                "https://www.sibinfotech.com/digital-marketing-services-in-mumbai/header/google-logo-new.webp"
              }
              alt="google-logo"
            />
          </div>
        </div>
      </div>
      <Model isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default SideBar;
