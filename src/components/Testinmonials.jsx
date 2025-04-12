import React from "react";

const testimonials = [
  {
    name: "Sandra Walton",
    role: "CEO SomeCompany",
    quote:
      "I'm loving these templates! Very nice features and layouts.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg", // Replace with your own
  },
  {
    name: "Mike Smith",
    role: "CEO SomeCompany",
    quote: "Extremely helpful in every single project we have released.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Kenny Jones",
    role: "CEO SomeCompany",
    quote:
      "Really digging this service. Now I can quickly bootstrap any project.",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Molly Sanchez",
    role: "CEO SomeCompany",
    quote:
      "Finally a quick and easy system I can use for any type of project.",
    image:
      "https://randomuser.me/api/portraits/women/85.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="pb-20 bg-white text-center">
      <h4 className="md:text-lg text-sm text-blue-500 font-bold uppercase mb-2">
        Our Customers Love Our Product
      </h4>
      <h2 className="md:text-5xl text-xl  font-bold text-gray-900 mb-9 md:mb-10">Testimonials</h2>
      <p className="text-gray-500 max-w-2xl mx-auto text-wrap md:w-full w-11/12 md:text-base text-sm mb-12">
        Don't just take our word for it, read from our extensive list of case
        studies and customer testimonials.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-xl flex items-start gap-4 shadow-sm"
          >
            <div className="text-blue-500 text-4xl font-bold">“</div>
            <div className="flex-1 text-left">
              <p className="text-gray-600 lg:text-base md:text-sm text-xs mb-2">{t.quote}</p>
              <p className="font-bold lg:text-base md:text-sm text-xs text-gray-800">
                {t.name}{" "}
                <span className="text-gray-500 lg:text-base md:text-sm text-xs font-semibold">- {t.role}</span>
              </p>
            </div>
            <img
              className="w-14 h-14 rounded-full object-cover"
              src={t.image}
              alt={t.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
