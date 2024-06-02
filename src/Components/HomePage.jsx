import React, { useEffect } from "react";
import Footer from "./Footer";
import Card from "./Card";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const HomePage = () => {
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
      desc: "The healthcare provider who specializes in neurology is called a neurologist. After completing medical school, healthcare providers specializing in adult neurology complete 1 year of residency in internal medicine and 3 years of neurology residency.",
      button: "Learn More",
    },
  ];
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="pt-[55px] dark:bg-slate-900 transition duration-500 ease-in-out h-full">
      <div className="firstsection space-y-5 sm:flex h-screen items-center justify-center p-9">
        <div className="first sm:w-[50%]">
          <h1 className="text-4xl dark:text-slate-100 font-extrabold tracking-tight lg:text-5xl">
            Best Healthcare at your doors
          </h1>
          <p className="leading-7 dark:text-slate-100 w-[90%] [&:not(:first-child)]:mt-6">
            <TypeAnimation
              sequence={[
                "Diagnostic Services: This includes lab tests, imaging services, and other tests to identify health issues.",
                1000,
                "Preventive Care: Regular check-ups, vaccinations, and screenings to prevent health issues.",
                1000,
                "",
                1000,
                "Treatment Services: This includes surgical procedures, medication, and other treatments for illnesses or injuries.",
                1000,
                "Rehabilitation Services: Physical therapy, occupational therapy, and other services to help patients recover from injuries or illnesses.",
                1000,
                "Mental Health Services: Counseling, therapy, and other services for mental health issues.",
                1000,
                "Emergency Services: Treatment for medical emergencies, including trauma care and critical care.",
                1000,
                "Home Health Care: Healthcare services provided in the patient's home, including skilled nursing, physical therapy, and hospice care.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <button className="bg-slate-700 dark:bg-slate-100 dark:text-slate-800 p-2 rounded-lg my-4 hover:bg-slate-700/90 text-slate-100 ">
            <Link to="/services">Book Now</Link>
          </button>
        </div>
        <div className="second sm:w-[50%]">
          <img
            src="https://www.iso.org/files/live/sites/isoorg/files/news/insights/healthcare/Healthcare-management_banner_1020x440.svg"
            className="rounded-2xl"
            alt=""
          />
        </div>
      </div>
      <div className="mt-12 grid px-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
