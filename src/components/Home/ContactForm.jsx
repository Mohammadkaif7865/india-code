
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    companyName: "",
    websiteUrl: "",
    email: "",
    fromWhere: "Digital marketing services in mumbai",
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

    try {
      const response = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("Response:", responseData);

      setFormData({
        name: "",
        companyName: "",
        websiteUrl: "",
        email: "",
        phoneNo: "",
      });
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
        <form onSubmit={handleSubmit} className="font-poppins ">
          <div className="w-full relative group mt-[23px]">
            <input
              type="text"
              id="name2"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="name2"
              className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
            >
              Name
            </label>
          </div>

          <div className="w-full relative group mt-[23px]">
            <input
              type="text"
              name="comapanyName"
              id="comapany_Name2"
              value={formData.comapanyName}
              onChange={handleChange}
              required
              className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="comapany_Name2"
              className="transform transition-all text-[#999] absolute top-0  left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
            >
              Comapany Name
            </label>
          </div>
          <div className="w-full relative group mt-[23px]">
            <input
              type="text"
              name="websiteUrl"
              id="websiteUrl2"
              value={formData.websiteUrl}
              onChange={handleChange}
              required
              className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="websiteUrl2"
              className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
            >
              Website Url
            </label>
          </div>
          <div className="w-full relative group mt-[23px]">
            <input
              type="text"
              name="email"
              id="email2"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="email2"
              className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
            >
              Email
            </label>
          </div>

          <div className="w-full relative group mt-[23px]">
            <input
              type="text"
              name="phoneNo"
              id="phoneNo2"
              value={formData.phoneNo}
              onChange={handleChange}
              required
              className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
            />
            <label
              htmlFor="phoneNo2 "
              className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
            >
              Phone No
            </label>
          </div>

          <button className="py-3 rounded-xl bg-[#e31a20] mt-8 w-full  font-poppins text-white texr-[14px] md:text-xl ">
            SEND REQUEST
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
