import React from "react";
import Machine1 from "../assets/machine1.png"
import Machine2 from "../assets/machine2.png"
import Machine3 from "../assets/machine3.png"
const Features = () => {
  const features = [
    {
      icon: Machine1, // Replace with actual path
      title: "Automated Tools",
      description:
        "Automate your workflow with these top of the line marketing tools.",
      link: "#",
    },
    {
      icon: Machine2,
      title: "Machine Learning",
      description:
        "Your Marketing tools will learn how to better convert and sell.",
      link: "#",
    },
    {
      icon: Machine3,
      title: "Smart Notifications",
      description: "Our smart notifications will notify you when users convert.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h4 className="md:text-lg text-sm text-blue-500 font-semibold uppercase mb-2">
        Our Features
      </h4>
      <h2 className="md:text-6xl text-xl font-bold text-gray-900 mb-9 md:mb-16">
        Built and Designed <br /> with you in Mind
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-3xl md:w-full w-11/12  mx-auto p-8 shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center mb-6">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12"
              />
            </div>
            <h3 className="md:text-base text-sm lg:text-lg font-bold mb-2">{feature.title}</h3>
            <p className="md:text-sm text-xs  lg:text-gray-600 mb-4">{feature.description}</p>
            <a href={feature.link} className="text-blue-500  md:text-sm text-xs hover:underline">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
