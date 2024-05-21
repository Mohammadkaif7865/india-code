import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#f1f1f1] py-20">
      <div className="w-[90%] mx-auto">
        <div className="flex max-lg:flex-col gap-8">
          <div className="lg:w-[60%]">
            <p className="p-[5px_10px] font-poppins font-semibold text-[14px] rounded-[5px] px-2 py-1 bg-[#d7e4fd] w-fit ">
              Trusted by Over 1000+ Companies
            </p>
            <h4 className="text-[27px] leading-tight md:text-[34px] font-redhat text-[#212529] font-bold mt-4">
              SIB Infotech's Best Digital Marketing Services
            </h4>
            <p className="mt-4 text-[16px] text-justify text-[#222]">
              At SIB Infotech, we take pride in providing our esteemed clients
              with high-quality services. Whether you need assistance with a
              project, guidance on a particular issue, or ongoing support, we
              are here to help. We strive to deliver exceptional results that
              meet or exceed your expectations.
            </p>
            <h4 className="mt-4 text-[18px] leading-tight md:text-[22px] font-redhat text-[#212529] font-bold">
              Boost your website's traffic and improve your conversion rates
              with our comprehensive 360° SEO services.
            </h4>
            <p className="mt-4 text-[16px] text-justify text-[#222]">
              Looking for a reliable digital marketing partner to increase
              traffic and conversions for your business? Look no further than
              our professional 360-degree digital marketing services. Our team
              of experts is dedicated to helping our clients achieve their
              marketing goals through a comprehensive approach that includes
              search engine optimization, social media marketing, email
              marketing, content creation, and more.
            </p>
          </div>
          <div className="lg:w-[40%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
