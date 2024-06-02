import React from "react";
import Footer from "./Footer";

const ContactPage = () => {
  return (
    <div className="bg-slate-50 pt-[80px] dark:bg-slate-900 transition duration-500 ease-in-out text-gray-800 dark:text-gray-100 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            We're here to help and answer any question you might have.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 md:flex md:justify-center">
            <div className="bg-white dark:bg-slate-800 p-8 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">Direct Contact</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Feel free to reach out to us directly at:
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">(+91) 9812345212</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">contact@healthcare.com</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <form className="bg-white dark:bg-slate-800 p-8 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-100"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-100"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-100 w-full"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="border border-gray-300 dark:border-gray-700 p-3 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-100 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-slate-800 dark:bg-slate-100 dark:text-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
