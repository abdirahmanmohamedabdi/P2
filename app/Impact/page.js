export default function Impact() {
  return (
    <div className="bg-gray-100 py-16">
      {/* Hero Section */}
      <div className="relative bg-white shadow-md">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/0.jpg"
            alt="Training session"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold font-font text-white md:text-5xl">
            Making a Difference, One Community at a Time
          </h1>
          <p className="mt-6 text-lg font-font text-gray-200">
            At Mustaqbal, we are dedicated to empowering marginalized women and youth through technology and education. Our mission is to foster opportunities for growth and development.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold font-font text-gray-900 text-center">
          Empowering Lives through Action
        </h2>
        <p className="mt-4 max-w-3xl mx-auto font-font text-center text-lg text-gray-600">
          These numbers showcase our progress and the lives we’ve touched through our programs, events, and collaborations.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {/* Impact Metric 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <span className="block text-4xl font-font font-extrabold text-gray-900">
              500+
            </span>
            <p className="mt-2 text-base font-font text-gray-600">Women Empowered</p>
          </div>

          {/* Impact Metric 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <span className="block text-4xl font-font font-extrabold text-gray-900">
              1,000+
            </span>
            <p className="mt-2 text-base font-font text-gray-600">Youth Trained in Digital Skills</p>
          </div>

          {/* Impact Metric 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <span className="block text-4xl font-font font-extrabold text-gray-900">
              300+
            </span>
            <p className="mt-2 text-base font-font text-gray-600">New Businesses Started</p>
          </div>

          {/* Impact Metric 4 */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <span className="block text-4xl font-font font-extrabold text-gray-900">
              25+
            </span>
            <p className="mt-2 text-base font-font text-gray-600">Communities Reached</p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold font-font text-gray-900">
                Our Story
              </h3>
              <p className="mt-4 text-lg font-font text-gray-600">
                Since our inception, Mustaqbal has been committed to empowering women and youth by providing them with the tools and knowledge they need to thrive in today’s digital world. From offering digital skills training to supporting entrepreneurship, we aim to create lasting impact in the communities we serve.
              </p>
              <p className="mt-4 text-lg font-font text-gray-600">
                Our holistic approach focuses on community engagement, mentorship, and sustainable development, ensuring that our efforts lead to long-term success and empowerment.
              </p>
            </div>
            <div className="relative">
              <img
                className="w-full h-full object-cover rounded-lg shadow-md"
                src="/somali.jpg"
                alt="Community impact"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-font font-bold">
            Join Us in Creating a Brighter Future
          </h3>
          <p className="mt-4 font-font text-lg">
            Whether it's through volunteering, donating, or simply spreading the word, you can help us make a difference in the lives of marginalized women and youth.
          </p>
          <div className="mt-8">
            <a
              href="/get-involved"
              className="bg-white text-gray-900 py-3 px-6 font-font rounded-full hover:bg-gray-100"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
