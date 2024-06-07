import React, { useState } from "react";
import { toast } from "react-toastify";
import Services from "./Services";
import "./heroform.css";

const HeroForm = ({ oneline }) => {
 
  const option = [
    "Website Design",
    "Website Design",
    "Website Development",
    "Digital Marketing",
    "PPC",
    "SEO",
    "SMO",
    "Software Development",
    "Graphic Design",
    "Mobile App Development",
    "Offshore Outsourcing",
  ];
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    companyName: "",
    websiteUrl: "",
    service: "",
    message: "",
    fromWhere: "DMS - India",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      company: formData.companyName,
      email: formData.email,
      website: formData.websiteUrl,
      phone: formData.phoneNo,
      service: formData.service,
      message: formData.message,
      fromWhere: formData.fromWhere,
    };

    console.log(data);

    try {
      const API_TOKEN = "FgRCHG4OVv8Z1BcrjExKJcqspvTsUTCe";
      const url = "https://www.sibinfotech.com/api/send-email";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: API_TOKEN,
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        toast.success("Email Sent Successfully!");
        setFormData({
          name: "",
          phoneNo: "",
          email: "",
          companyName: "",
          websiteUrl: "",
          service: "",
          message: "",
        });

        setTimeout(() => {
          window.location.href = "https://sibinfotech.com/thanks";
        }, 2000);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        className={`w-[100%] bg-white rounded-2xl   ${
          oneline ? "py-12 " : "p-5"
        }`}
      >
        <h3 className="font-bold font-redhat text-[24px] md:text-[29px] text-center">
          Ready to get more leads
        </h3>
        <form
          className="Hero_form text-[#999] font-poppins"
          onSubmit={handleSubmit}
        >
          <div className={`grid   ${oneline ? "" : "grid-cols-2 gap-4 "}`}>
            <div class="user-box mt-[23px] ">
              <input
                className=""
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                // Keyboard type for name
                inputMode="text"
              />
              <label htmlFor="name" className="">
                Name
              </label>
            </div>
            <div class="user-box mt-[23px] ">
              <input
                className=""
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                // Keyboard type for company name
                inputMode="text"
              />
              <label htmlFor="companyName" className="">
                Company Name
              </label>
            </div>
          </div>
          <div className={`grid   ${oneline ? "" : "grid-cols-2 gap-4 "}`}>
            <div class="user-box mt-[23px] ">
              <input
                className=""
                type="text"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                required
                // Keyboard type for name
                inputMode="text"
              />
              <label htmlFor="websiteUrl" className="">
                Website Url
              </label>
            </div>
            <div class="user-box mt-[23px] ">
              <input
                className=""
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                // Keyboard type for company name
                inputMode="text"
              />
              <label htmlFor="email" className="">
                Email
              </label>
            </div>
          </div>

          <div className={`grid   ${oneline ? "" : "grid-cols-2 gap-4 "}`}>
            <div class="user-box mt-[23px] ">
              <input
                className=""
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                required
                // Keyboard type for phone number
                inputMode="tel"
              />
              <label htmlFor="phoneNo" className="">
                Phone No
              </label>
            </div>

            {/* dropdown */}
            <div className="mt-[23px] text-sm">
              <select
                className=" mt-[2px] outline-none w-full relative border-b border-[#9b9b9b] pb-[7px] "
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                {option.map((option, index) => (
                  <option className="w-full px-2" key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="relative mb-2 mt-[22px]">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-white text-sm rounded border  border-[#9b9b9b] focus:border-blue-500   h-16 outline-none text-[#9b9b9b] py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder:text-[#9b9b9b]"
            ></textarea>
          </div>

          <button className="py-2 rounded-xl bg-[#e31a20]  w-full  font-poppins text-white text-[16px] md:text-xl ">
            SEND REQUEST
          </button>
        </form>
      </div>

      <div className="lg:hidden py-4 ">
        <Services />
      </div>
    </>
  );
};

export default HeroForm;
