"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  InboxIcon,
  SparklesIcon,
  TranslateIcon,
  AcademicCapIcon,
  DesktopComputerIcon,
  ArrowCircleDownIcon,
  ArrowNarrowDownIcon,
  ArrowDownIcon,
} from "@heroicons/react/outline";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isClient, setIsClient] = useState(false); // State to ensure client-side rendering

  // useEffect to set client-side only state
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    "What is Mustaqbal?",
    "How can I help?",
    "Where does my donation go?",
  ];

  const answers = [
    "Mustaqbal is an initiative focused on digital empowerment for women and youth in marginalized communities, particularly in North Eastern Kenya.",
    "You can help by volunteering, donating, or partnering with us to expand our reach and impact.",
    "Your donation goes directly to programs and services that support individuals and families in need, providing them with essential resources and opportunities for a better future.",
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[800px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url(/class.jpg)" }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left p-6">
          {/* Small Intro Text */}
          <p className="text-xl font-light mb-4 animate-fade-in">
            Mustaqbal Initiative
          </p>

          {/* Main Headline with Underline Effect */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Empowering Marginalized Communities{" "}
            <span className="relative text-two">
              through Technology.
              {/* Underline Decorative Effect */}
              <span className="absolute inset-x-0 bottom-0 block h-2 bg-one -mb-2 rounded-sm animate-slide-up"></span>
            </span>
          </h1>

          {/* CTA Button Group */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Primary CTA Button */}
            <button className="bg-one hover:bg-teal-600 text-white flex items-center px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300">
              How we’re making a difference
            </button>
          </div>
        </div>
      </div>

      {/* Digital Literacy Section */}
      <section className="bg-white py-12">
        <div className="relative bg-white pt-16 pb-32 overflow-hidden">
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <DesktopComputerIcon className="w-full h-full text-blue-900" />
                  </div>
                  <div className="mt-6">
                    <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                      Bridging the Digital Divide for <br /> a Better Future
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                      Our mission at Mustaqbal is to empower women and youth from
                      marginalized communities, particularly in North Eastern Kenya, by
                      providing them with essential digital skills and access to technology.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 md:-ml-48 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  {isClient && (
                    <Image
                      src="/1.jpg"
                      alt="Digital Literacy"
                      layout="responsive"
                      width={500}
                      height={300}
                      className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Literacy for Women Section */}
      <section className="bg-white py-12">
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <AcademicCapIcon className="w-full h-full text-blue-900" />
                  </div>
                  <div className="mt-6">
                    <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                      Empowering Women through <br /> Digital Literacy
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                      Our Tech Literacy program focuses on equipping women with the skills
                      and knowledge needed to thrive in a digital world, enabling them to
                      access better job opportunities and improve their quality of life.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 md:mr-48 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  {isClient && (
                    <Image
                      src="/2.jpg"
                      alt="Tech Literacy for Women"
                      layout="responsive"
                      width={500}
                      height={300}
                      className="rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left flex justify-between items-center text-lg font-medium text-blue-900 focus:outline-none"
                aria-label={`Toggle ${question}`}
              >
                {question}
                <span className={activeIndex === index ? "transform rotate-180" : ""}>
                  <ArrowCircleDownIcon className="w-4 h-4" />
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-700">{answers[index]}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
