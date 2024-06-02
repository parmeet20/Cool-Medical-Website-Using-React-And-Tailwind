import React, { useEffect } from "react";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
const AboutPage = () => {
  useEffect(() => {
    Aos.init({
      offset: 150,
      duration: 300,
      easing: "ease-in-sine",
      delay: 0,
    });
  }, []);
  return (
    <div className=" bg-slate-50 transition duration-500 ease-in-out dark:bg-slate-800 pt-[80px] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl dark:text-gray-50 font-semibold text-gray-800">
            About Us
          </h1>
          <p className="mt-4 text-lg dark:text-gray-100 leading-relaxed">
            Your trusted partner in healthcare.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold dark:text-gray-100 text-gray-800">
              Our Mission
            </h2>
            <p className="mt-4 dark:text-gray-200">
              At Secure Healthcare, our mission is to empower clients by
              providing secure, reliable, and innovative healthcare solutions.
              We aim to be your first choice for all your healthcare needs,
              ensuring a seamless process from start to finish.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://cdn.pixabay.com/photo/2024/02/16/06/26/dentist-8576790_1280.png"
              alt="Company building"
              className="rounded-lg shadow-lg w-[500px]"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold dark:text-slate-50 text-gray-800 text-center">
            Why Choose Us?
          </h2>
          <p className="mt-4 dark:text-gray-200 text-center">
            We bring decades of experience, a commitment to excellence, and a
            deep understanding of the healthcare industry to provide you with
            unparalleled care and a personalized healthcare journey.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            data-aos="fade-right"
            className="p-6 border-l-4 dark:bg-slate-600 border-gray-300 bg-white shadow-lg rounded-lg"
          >
            <h3 className="text-lg font-semibold dark:text-slate-50">
              Advanced Healthcare
            </h3>
            <p className="mt-2 dark:text-gray-200">
              We provide cutting-edge medical services and technologies to
              ensure the best healthcare outcomes for our patients.
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="p-6 border-l-4 dark:bg-slate-600 border-gray-300 bg-white shadow-lg rounded-lg"
          >
            <h3 className="text-lg font-semibold dark:text-slate-50">
              Skilled Healthcare Professionals
            </h3>
            <p className="mt-2 dark:text-gray-200">
              Our healthcare professionals are highly trained and experienced,
              providing expert care for every patient.
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="p-6 border-l-4 dark:bg-slate-600 border-gray-300 bg-white shadow-lg rounded-lg"
          >
            <h3 className="text-lg font-semibold dark:text-slate-50">
              Patient Satisfaction
            </h3>
            <p className="mt-2 dark:text-gray-200">
              We are dedicated to ensuring the highest level of patient
              satisfaction, as demonstrated by our many satisfied patients.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
