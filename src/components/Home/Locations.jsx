import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Locations = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="w-[90%] mx-auto flex  max-lg:flex-col gap-4">
        <div className=" flex max-lg:flex-col lg:w-[50%] md:rounded-2xl overflow-hidden ">
          <div className="lg:w-[40%] text-white bg-black/50 bg-top bg-blend-multiply bg-[url(/gate-way-of-india.jpg)] bg-cover bg-no-repeat py-16 px-4">
            <h4 className="font-bold font-redhat text-[22px]">Mumbai Office</h4>
            <p className="font-poppins text-[16px] mt-4">
              107, Orbit Premises, Mindspace Near Inorbit Mall, Malad West,
              Mumbai, Maharashtra 400064
            </p>
            <div className="flex items-center gap-2 font-poppins text-base mt-4">
              <FaPhoneAlt className={"text-xl "} />
              <span className="font-bold"> +91 92222 60000</span>
            </div>
          </div>
          <div className="lg:w-[60%] relative w-full  max-lg:min-h-[300px]">
            <iframe
              className="object-cover absolute w-full h-full  "
              src={
                "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.646558593871!2d72.833803!3d19.177215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce92f56b4ccd%3A0x965180085bc69862!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1678696876200!5m2!1sen!2sin"
              }
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className=" flex max-lg:flex-col lg:w-[50%]  md:rounded-2xl overflow-hidden">
          <div className="lg:w-[40%] text-white bg-black/50 bg-top bg-blend-multiply bg-[url(/india-gate-delhi.jpg)] bg-cover bg-no-repeat py-16 px-4">
            <h4 className="font-bold font-redhat text-[22px]">Delhi Office</h4>
            <p className="font-poppins text-[16px] mt-4">
              2nd Floor, Office No 205, DDA-2 Building, Janakpuri District
              Center, Janakpuri, New Delhi, Delhi 110058
            </p>
            <div className="flex  items-center gap-2 font-poppins text-base mt-4">
              <FaPhoneAlt className={"text-xl "} />
              <span className="font-bold"> +91 93116 55555</span>
            </div>
          </div>
          <div className="lg:w-[60%] relative w-full  max-lg:min-h-[300px]">
            <iframe
              className="object-cover absolute w-full h-full  "
              src={
                "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14007.962243140857!2d77.081604!3d28.630045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05e1990aeceb%3A0x7e39edabda3510f5!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1678696653308!5m2!1sen!2sin"
              }
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
