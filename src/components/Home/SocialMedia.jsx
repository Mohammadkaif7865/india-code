
import React from "react";

const SocialMedia = () => {
  return (
    <div className="py-12 lg:py-20 bg-white ">
      <div className="w-[90%] mx-auto flex max-lg:flex-col gap-8 lg:gap-6 ">
        <div className="lg:w-[50%]  ">
          <div className="lg:sticky lg:top-0 ">
            <div className="relative w-[100%] overflow-hidden min-h-[300px] md:min-h-[600px] ">
              <img
                className="w-full h-auto absolute "
                width={500}
                height={600}
                quality={100}
                src={"/social-media-marketing.jpg"}
                alt="social-media-marketing"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <h1 className="font-poppins leading-tight text-[27px] md:text-[34px]  font-bold text-[#212529]">
            Social Media Marketing Services
          </h1>
          <p className="font-poppins text-base text-[#222] text-justify my-4">
            At SIB Infotech, we offer top-notch social media marketing services
            to help your business grow and reach new heights. Our team of
            experts understands the power of social media and can help you
            leverage its potential to boost your online presence and drive
            sales.
          </p>
          <p className="font-poppins text-base text-[#222] text-justify my-4">
            We know that social media is constantly evolving, which is why we
            stay up-to-date with the latest trends and strategies to ensure your
            business is always ahead of the curve. Our social media marketing
            services are tailored to meet the unique needs of your business,
            whether you're just starting out or looking to take your existing
            social media efforts to the next level.
          </p>
          <h2 className="font-poppins text-[22px] md:text-[30px] leading-tight font-bold text-[#212529]">
            Our Best Social Media Marketing Services Include:
          </h2>
          <p className="font-poppins text-base text-[#222] text-justify my-4">
            <span className="font-bold">Social Media Strategy:</span>
            We'll work with you to create a social media strategy that aligns
            with your business goals and helps you connect with your target
            audience.
          </p>
          <p className="font-poppins text-base text-[#222] text-justify my-4 ">
            <span className="font-bold">Social Media Management:</span> Our team
            will handle all aspects of your social media accounts, including
            content creation, scheduling, and engagement.
          </p>
          <p className="font-poppins text-base text-[#222] text-justify my-4">
            <span className="font-bold">Social Media Advertising:</span> We'll
            help you create targeted social media advertising campaigns to reach
            your ideal customers and drive conversions.
          </p>
          <p className="font-poppins text-base text-[#222] text-justify my-4">
            <span className="font-bold">Social Media Analytics:</span> We'll
            track your social media performance and provide detailed analytics
            reports to help you measure your success and make informed
            decisions.
          </p>
          <p className="font-poppins text-base text-[#222] text-justify my-4">
            So why wait? Contact us today to learn more about our Social Media
            Marketing Services and start growing your business online!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
