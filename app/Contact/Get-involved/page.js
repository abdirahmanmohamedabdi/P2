import Link from 'next/link';
import { HeartIcon, UserGroupIcon } from '@heroicons/react/outline';

export default function GetInvolved() {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
     

      {/* Ways to Help Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">Ways You Can Help</h2>
          <p className="text-lg text-gray-600 mb-12">
            Whether it's through financial contributions or giving your time, every action helps us make a lasting impact.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Donate Card */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                <HeartIcon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Donate</h3>
              <p className="text-gray-600 mb-4">
                Your donations allow us to expand our programs, provide resources, and empower more women and youth in marginalized communities.
              </p>
              <a href="/get-involved/donate">
                <a className="bg-one hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300">
                  Learn More
                </a>
              </a>
            </div>

            {/* Volunteer Card */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                <UserGroupIcon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Join our team of dedicated volunteers and make a meaningful impact in the lives of women and youth by sharing your skills and time.
              </p>
              <a href="/get-involved/volunteer">
                <a className="bg-one hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300">
                  Learn More
                </a>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Get Involved Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">Why Get Involved?</h2>
          <p className="text-lg mb-8">
            Your support enables us to reach more women and youth, providing them with the tools and opportunities they need to build a better future. Together, we can create lasting change in marginalized communities.
          </p>
          <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition duration-300">
            Get Involved Today
          </button>
        </div>
      </section>
    </div>
  );
}
