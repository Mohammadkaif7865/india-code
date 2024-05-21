import React from "react";

const Services = () => {
  const data = [
    {
      gif: "https://www.sibinfotech.com/digital-marketing-services-in-mumbai/startup.gif",
      title: "Digital Marketing",
    },
    {
      gif: "https://www.sibinfotech.com/digital-marketing-services-in-mumbai/line-chart.gif",
      title: "Search Engine Optimization",
    },
    {
      gif: "https://www.sibinfotech.com/digital-marketing-services-in-mumbai/click.gif",
      title: "PPC Management",
    },
    {
      gif: "https://www.sibinfotech.com/digital-marketing-services-in-mumbai/monitor.gif",
      title: "Graphic Desgining",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {data.map((items, i) => {
          return (
            <div
              key={i}
              className="p-[15px] border border-[#999] rounded-xl shadow "
            >
              <div className="">
                <img
                  className="w-[50px] h-[50px] mx-auto block"
                  width={200}
                  height={200}
                  src={items.gif}
                  alt={items.title}
                />
              </div>
              <h4 className="text-center font-redhat text-[16px] text-[#212529] mt-[15px] font-medium">
                {items.title}{" "}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
