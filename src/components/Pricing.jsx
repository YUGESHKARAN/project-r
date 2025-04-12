import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$48",
      features: [
        "Awesome Feature",
        "And Another Cool Feature",
        "One More Feature",
      ],
      button: "SELECT THIS PLAN",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$98",
      features: [
        "Really Cool Features",
        "Another Cool Feature",
        "And One More",
      ],
      button: "SELECT THIS PLAN",
      highlight: true,
    },
    {
      name: "Premium",
      price: "$78",
      features: [
        "Totally Tubular Feature",
        "Super Cool Feature",
        "And One More",
      ],
      button: "SELECT THIS PLAN",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h4 className="md:text-lg text-sm text-blue-500 font-bold uppercase mb-2">
        Our Pricing
      </h4>
      <h2 className="md:text-5xl text-xl  font-bold text-gray-900 mb-9 md:mb-16">
        Simple, Transparent <br /> Pricing for Everyone
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            // className={`relative rounded-2xl border border-gray-200 shadow-sm p-8 transition duration-300 ${
            //   plan.highlight ? "bg-white shadow-lg scale-105 z-10" : "bg-white"
            // }`}
            className={`relative md:w-full w-11/12 mx-auto cursor-pointer rounded-2xl border border-gray-200 shadow-sm p-8 transition duration-300 bg-blue-50 shadow-lg scale-100 hover:scale-105 z-10 
              `}
          >
            {/* {plan.highlight && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold uppercase py-1 px-4 rounded-t-lg">
                Most Popular
              </div>
            )} */}
            <h3 className="text-sm font-bold uppercase text-gray-800 mb-1">
              {plan.name} Plan
            </h3>
            <div className="md:text-4xl text-2xl font-bold text-gray-900 mb-4">
              {plan.price}
            </div>
            <p className="md:text-sm text-xs text-gray-500 mb-6">
              {plan.highlight
                ? `Our most popular package is the Pro Plan which gives you access to the following:`
                : `With our ${plan.name.toLowerCase()} plan you can take advantage of the following features:`}
            </p>
            <ul className="text-left md:space-y-3 space-y-2  mb-4 md:mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex md:text-base text-sm items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-gray-900 text-white md:py-3 md:px-6 px-4 py-2 md:text-base text-sm rounded-lg font-semibold hover:bg-gray-800">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
