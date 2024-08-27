"use client";
import Heroe from "./Hero";

export default function Example() {
  return (
    <div>
      <Heroe />
      
      {/* Add margin here to create space between Heroe and the rest of the content */}
      <div className="relative pt-12 bg-gray-900 mt-12">
        {/* Background Image */}
        <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="relative h-full xl:col-start-2">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:max-w-7xl lg:px-8">
          {/* Hero Section */}
          <div className="text-center">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wide">
              Empowerment through Technology
            </h2>
            <p className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Our Mission
            </p>
            <p className="mt-5 text-lg text-gray-300">
              To bridge the digital divide and provide marginalized communities with the skills and resources necessary to thrive in the digital age.
            </p>
          </div>

          {/* Content Sections */}
          <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-x-8">
            {/* Section 1 */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white">
                Building Sustainable Futures
              </h3>
              <p className="mt-4 text-base text-gray-300">
                By equipping marginalized communities with digital and entrepreneurial skills, Mustaqbal is helping to build sustainable futures where women and youth can thrive in the digital economy.
              </p>
            </div>
            <div className="relative h-64 w-full">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-lg"
                src="/cta.jpg" // Replace with your image
                alt="Mustaqbal program in action"
              />
            </div>

            {/* Section 2 */}
            <div className="relative h-64 w-full">
              <img
                className="absolute inset-0 h-full w-full object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Community impact"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white">
                Empowering Communities
              </h3>
              <p className="mt-4 text-base text-gray-300">
                Our programs are designed to empower communities by providing access to technology education, fostering innovation, and creating opportunities for economic growth and social development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
