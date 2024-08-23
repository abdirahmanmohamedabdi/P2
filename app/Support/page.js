export default function GetInvolved() {
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-three">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold font-font text-white sm:text-5xl">
                Get Involved with Mustaqbal
              </h1>
              <p className="mt-4 text-lg font-font text-white">
                Your support can help us empower women and youth in marginalized communities. Join us in creating a brighter future.
              </p>
              <a
                href="/Contact"
                className="mt-8 inline-block bg-white font-font text-blue-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-50"
              >
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
  
        {/* Ways to Get Involved Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold font-font text-gray-900 text-center">
              Ways You Can Get Involved
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-font font-semibold text-gray-900">
                  Volunteer
                </h3>
                <p className="mt-4 font-font text-gray-600">
                  Volunteer your time and skills to help us deliver programs and initiatives that make a difference in the lives of women and youth.
                </p>
                <a
                  href="/Contact"
                  className="mt-6 font-font inline-block text-two font-semibold"
                >
                  Volunteer
                </a>
              </div>
  
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-font font-semibold text-gray-900">
                  Donate
                </h3>
                <p className="mt-4 font-font text-gray-600">
                  Your donations help us provide training, resources, and support to marginalized communities, enabling them to thrive.
                </p>
                <a
                  href="/Contact"
                  className="mt-6 font-font inline-block text-two  font-semibold"
                >
                  Donate Now
                </a>
              </div>
  
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-font font-semibold text-gray-900">
                  Partner with Us
                </h3>
                <p className="mt-4 font-font text-gray-600">
                  Collaborate with Mustaqbal to expand our impact and reach. Together, we can achieve more.
                </p>
                <a
                  href="/Contact"
                  className="mt-6 font-font inline-block text-two  text-blue-600 font-semibold"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
  
       
        {/* Call to Action Section */}
        <div className="py-16 bg-three text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-font font-extrabold">
              Ready to Make a Difference?
            </h2>
            <p className="mt-4 font-font text-lg">
              Join Mustaqbal Women and Youth in empowering communities and creating sustainable futures.
            </p>
            <a
              href="/Contact"
              className="mt-8 font-font inline-block bg-white text-blue-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-50"
            >
              Get Involved Today
            </a>
          </div>
        </div>
      </div>
    );
  }
  