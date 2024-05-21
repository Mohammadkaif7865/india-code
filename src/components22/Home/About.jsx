import React from "react";
import HeroForm from "./HeroForm";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="lg:hidden w-[90%] mx-auto">
        <HeroForm oneline={true} />
      </div>
      <div className="flex max-lg:flex-col gap-16 w-[90%] mx-auto py-12 lg:py-20">
        <div className="lg:w-[30%] bg-black text-white rounded p-8">
          <div className="flex  items-center gap-4  ">
            <div className=" rounded-full flex w-[80px] h-[80px] bg-[#e31a20]">
              <img
                className="m-auto"
                width={50}
                height={50}
                src={"https://www.sibinfotech.com/digital-marketing-services-in-mumbai/portfolio.png"}
                alt="portfolio"
              />
            </div>
            <div>
              <h1 className="font-bold text-3xl font-poppins">18+</h1>
              <p className="font-bold text-[17px] font-poppins">
                Years in Business
              </p>
            </div>
          </div>
          <hr className="text-gray-300 my-12" />
          <div className="flex  items-center gap-4  ">
            <div className="rounded-full flex w-[80px] h-[80px] bg-[#e31a20]">
              <img
                className="m-auto"
                width={50}
                height={50}
                src={"https://www.sibinfotech.com/digital-marketing-services-in-mumbai/projects.png"}
                alt="projects"
              />
            </div>
            <div>
              <h1 className="font-bold text-3xl font-poppins"> 1350+</h1>
              <p className="font-bold text-[17px] font-poppins">
                Projects Delivers
              </p>
            </div>
          </div>
          <hr className="text-gray-300 my-12" />
          <div className="flex  items-center gap-4 ">
            <div className=" rounded-full flex w-[80px] h-[80px] bg-[#e31a20]">
              <img
                className="m-auto"
                width={50}
                height={50}
                src={"https://www.sibinfotech.com/digital-marketing-services-in-mumbai/people.png"}
                alt="people"
              />
            </div>
            <div>
              <h1 className="font-bold text-3xl font-poppins">750+</h1>
              <p className="font-bold text-[17px] font-poppins">
                Active Clients/Users
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-[70%]">
          <div className="">
            <a
              target="_blank"
              href={"https://www.sibinfotech.com/about-us"}
              className="font-medium bg-[#d7e4fd] p-2 rounded text-[14px]"
            >
              About SIB Infotech
            </a>
            <h1 className="text-[27px] md:text-[36px] leading-tight md:leading-[50px] mt-8 font-redhat font-bold">
              Revamp Your Online Presence with the{" "}
              <span className="text-blue-500">
                Best Digital Marketing Agency
              </span>
            </h1>
            <p className="font-bold text-[18px] md:text-[22px] font-redhat text-[#222] mt-2">
              Drive More Sales with Effective SEO, PPC & Email Marketing
              Strategies!
            </p>
            <div className="flex max-md:flex-col gap-2 lg:gap-6  mt-8">
              <div className="md:w-[35%] h-fit p-2 bg-white lg:drop-shadow-2xl lg:shadow-2xl">
                <img
                  className="w-full"
                  width={400}
                  height={500}
                  src={"https://www.sibinfotech.com/digital-marketing-services-in-mumbai/aboutLeft.jpg"}
                  alt="about"
                />
              </div>
              <div className="  max-md:mt-4 md:w-[65%] font-poppins   text-justify text-[#222]">
                <p className="font-normal  text-[16px] text-justify">
                  We are a Creative Digital Marketing Agency based in India. We
                  pride ourselves on delivering personalized and tailored
                  services to our clients, helping them rapidly grow their
                  businesses by providing a sustainable and scalable competitive
                  advantage.
                </p>
                <p className="mt-4 font-normal  text-[16px] text-justify">
                  Our team of multi-media specialists and digital marketing
                  experts offer bespoke and innovative digital marketing
                  services that give you insight into your marketing future. We
                  understand that every business is different and has unique
                  needs. That's why we offer customized digital marketing
                  solutions that are tailored to your specific goals and
                  objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
