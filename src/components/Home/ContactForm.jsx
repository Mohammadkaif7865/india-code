"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    companyName: "",
    websiteUrl: "",
    email: "",
    fromWhere: "mumbai",
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
    console.log("Form Data:", formData);

    const data = {
      name: formData.name,
      company: formData.companyName,
      website: formData.websiteUrl,
      email: formData.email,
      phone: formData.phoneNo,
      fromWhere: formData.fromWhere,
    };
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

      console.log(response.data);
      if (response.status == 200) {
        toast.success("Email Send Successfully!");

        setFormData({
          name: "",
          companyName: "",
          websiteUrl: "",
          email: "",
          phoneNo: "",
        });

        setTimeout(() => {
          window.location.href = "https://sibinfotech.com/thanks";
        }, 2000);
      }
      if (!response.status == 200) {
        return toast.error("Somthing went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="">
      <div className="w-[100%] md:bg-white rounded-2xl md:p-6">
        <h1 className="font-bold text-[24px] md:text-[32px] leading-tight text-center font-redhat">
          Ready to boost your leads?
        </h1>

        <form
          className="Hero_form text-[#999] font-poppins"
          onSubmit={handleSubmit}
        >
          <div className={`grid    "}`}>
            {/* ${oneline ? "" : "grid-cols-2 gap-4 */}
            <div class="user-box mt-[23px] ">
              <input
                className=""
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name" className="">
                Name
              </label>
            </div>
          </div>
          <div class="user-box mt-[23px] ">
            <input
              className=""
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
            <label htmlFor="companyName" className="">
              Company Name
            </label>
          </div>

          <div class="user-box mt-[23px] ">
            <input
              className=""
              type="text"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              required
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
            />
            <label htmlFor="email" className="">
              Email
            </label>
          </div>
          <div class="user-box mt-[23px] ">
            <input
              className=""
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
            <label htmlFor="phoneNo" className="">
              Phone No
            </label>
          </div>

          <button className="py-3 rounded-xl bg-[#e31a20] mt-5 w-full  font-poppins text-white text-[16px] md:text-xl ">
            SEND REQUEST
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
