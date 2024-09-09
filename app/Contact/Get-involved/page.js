import Link from 'next/link';

export default function GetInvolved() {
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-two text-white py-16 text-center">
        <h1 className="text-5xl font-font font-bold">Get Involved</h1>
        <p className="mt-4 max-w-2xl font-font mx-auto text-lg">
          Join us in making a difference by contributing your time, resources, and expertise to empower marginalized communities.
        </p>
      </header>

      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-font font-bold mb-6">Ways You Can Help</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-4 border rounded-lg shadow-lg">
              <h3 className="text-2xl font-font font-semibold">Donate</h3>
              <p className="text-gray-600 font-font mt-2">
                Your donations help us expand our programs, provide essential resources, and empower more women and youth.
              </p>
              <a href="/get-involved/donate">
                <a className="inline-block bg-two text-white py-2 px-6 rounded-full mt-4 hover:bg-two-light">
                  Learn More
                </a>
              </a>
            </div>
            <div className="p-4 border rounded-lg shadow-lg">
              <h3 className="text-2xl font-font font-semibold">Volunteer</h3>
              <p className="text-gray-600 font-font mt-2">
                Join our team of dedicated volunteers and use your skills to make a meaningful impact in the lives of others.
              </p>
              <a href="/get-involved/volunteer">
                <a className="inline-block bg-two text-white py-2 px-6 rounded-full mt-4 hover:bg-two-light">
                  Learn More
                </a>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-two py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-font font-bold mb-6 text-white">Why Get Involved?</h2>
          <p className="text-lg text-white font-font mb-8">
            Whether it's through donating or volunteering, your involvement helps create opportunities for women and youth to thrive in a digital world.
          </p>
        </div>
      </section>
    </div>
  );
}
