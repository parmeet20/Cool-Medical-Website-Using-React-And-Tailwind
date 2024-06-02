import React, { useEffect } from "react";
import Footer from "./Footer";
import Card from "./Card";
import CardWithoutImage from "./CardWithoutImage";
const ServicePage = () => {

  const cards = [
    {
      image:
        "https://imgs.search.brave.com/hryu977ZRhnSI6OokWIRzwv7OCGlRPLQmn_IkXe0gzg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTIx/ODkyNzQ4L3Bob3Rv/L2h1bWFuLWhlYXJ0/LWFuZC1wdWxzZS10/cmFjZXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVF5NWlo/UFNqazJUbFFhWWdD/SXAzMHZCTC1NdDNm/Q19QaVNVVHBsYkVD/Rmc9",
      heading: "Cardiology",
      desc: "This involves surgical procedures to treat heart and blood vessel disorders, such as coronary artery bypass grafting, heart valve repair, and heart transplantation.",
      button: "Learn More",
    },
    {
      image:
        "https://imgs.search.brave.com/31OQ30nPvSnlE-1AEO4BI4E7gXL8l3rRf7uhZ8t_TY0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saXJw/LmNkbi13ZWJzaXRl/LmNvbS83OGFjZjA0/Ny9kbXMzcmVwL211/bHRpL29wdC9HZXR0/eUltYWdlcy0xMTg1/MjMwODE4LTM4NHcu/anBn",
      heading: "Dermatology",
      desc: "Dermatologists diagnose and treat various skin conditions such as skin cancer, skin infections, eczemas, and burns.",
      button: "Learn More",
    },
    {
      image:
        "https://imgs.search.brave.com/A6GACeCynS0WSzuQckHSzDmEZDR-3juxHHWUrvw1wMw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bW91bnRzaW5haS5v/cmcvZmlsZXMvTVNI/ZWFsdGgvQXNzZXRz/L0dsb2JhbC9OZXdz/cm9vbS8yMDI0L01T/SFMtTmV3c3Jvb20t/R3VOYXR1cmVNZW50/YWxIZWFsdGgtMmNv/bC03NzB4NDIwLmpw/Zw",
      heading: "Neurology",
      desc: "The healthcare provider who specializes in neurology is called a neurologist. After completing medical school, healthcare providers specializing in adult neurology.",
      button: "Learn More",
    },
  ];
  return (
    <div className="bg-slate-50 dark:bg-slate-900 pt-[80px] text-gray-800 dark:text-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition duration-500 ease-in-out">
      <div className="max-w-screen-xl mx-auto">
        <header className="text-center">
          <h1 className="text-4xl font-semibold">Our Services</h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Explore the wide range of services we offer to help you achieve your
            goals.
          </p>
        </header>

        {/* Services Section */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item) => (
            <Card
              key={item.image}
              props={{
                image: item.image,
                heading: item.heading,
                desc: item.desc,
                button: item.button,
              }}
            />
          ))}
          <CardWithoutImage
            props={{
              heading: "Laser Treatments",
              desc: "Best laser treatments across world",
              button: "Explore Now",
            }}
          />
          <CardWithoutImage
            props={{
              heading: "Heart Treatment",
              desc: "Best laser treatments across world",
              button: "Learn More",
            }}
          />
          <CardWithoutImage
            props={{
              heading: "Eye Treatment",
              desc: "Best eye treatments across world",
              button: "Learn More",
            }}
          />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
