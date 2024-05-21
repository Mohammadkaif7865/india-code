
import React from "react";

const Services = () => {
  const data = [
    {
      gif: "/startup.gif",
      title: "Digital Marketing",
    },
    {
      gif: "/line-chart.gif",
      title: "Search Engine Optimization",
    },
    {
      gif: "/click.gif",
      title: "PPC Management",
    },
    {
      gif: "/monitor.gif",
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
