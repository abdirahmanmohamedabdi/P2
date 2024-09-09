import Image from "next/image";

export default function AboutUs() {
  const teamMembers = [
    { name: 'Jamila Abdi', role: 'Executive Director', image: '/jamila.jpeg' },
    // Add other members here
  ];

  return (
    <div className="bg-white text-gray-800">
      <header className="bg-two text-white py-16 text-center">
        <h1 className="text-5xl font-font font-bold">Our Mission</h1>
        <p className="mt-4 max-w-2xl font-font mx-auto text-lg">
          Learn about our mission, vision, and values that guide our efforts towards creating a more digitally empowered and inclusive society for marginalized communities.
        </p>
      </header>

      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-font font-bold mb-6">Mission Statement</h2>
          <p className="text-lg font-font mb-8">
            Mustaqbal Women and Youth aims to empower marginalized communities in parts of Nairobi and North Eastern Kenya through digital education and technology. Our mission is to provide opportunities for women and youth to learn, innovate, and earn by building digital skills that bridge the gap between poverty and sustainable development.
          </p>
        </div>
      </section>

      {/* Large Image Section */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto">
          <Image
            src="/class.jpg" // Path to your image
            alt="Our Mission Image"
            width={1200}
            height={600}
            layout="responsive"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-font font-bold mb-6">Our Vision</h2>
          <p className="text-lg font-font mb-8">
            Our vision is to create an inclusive digital society where women and youth are empowered to thrive. We believe in equitable access to technology and digital skills that can drive socio-economic progress, especially in underserved regions.
          </p>
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-font mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-4">
              <h3 className="text-xl font-font font-semibold">Inclusivity</h3>
              <p className="text-gray-600 font-font mt-2">
                We empower diverse voices and ensure that everyone has access to opportunities that foster digital skills and self-sufficiency.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-font font-semibold">Innovation</h3>
              <p className="text-gray-600 font-font mt-2">
                We believe in fostering innovation and entrepreneurship in marginalized communities, helping individuals leverage technology to solve real-world challenges.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-font font-semibold">Collaboration</h3>
              <p className="text-gray-600 font-font mt-2">
                We work with local and international partners to bring resources, mentorship, and support to women and youth, promoting sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-two py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-font mb-6">Our Goals</h2>
          <ul className="text-left list-disc list-inside">
            <li className="text-lg font-font mb-4">Expand internet connectivity and access to technology in North Eastern Kenya and Nairobi.</li>
            <li className="text-lg font-font mb-4">Promote digital literacy by offering tailored programs that equip women and youth with essential skills.</li>
            <li className="text-lg font-font mb-4">Foster innovation and entrepreneurship by providing resources, mentorship, and training to launch tech-driven initiatives.</li>
            <li className="text-lg font-font mb-4">Create awareness and drive action towards sustainable socio-economic growth through technology.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-font font-bold mb-6">Join Us</h2>
          <p className="text-lg font-font mb-8">
            We invite you to join us in our mission to bridge the digital divide and empower women and youth in marginalized communities. Together, we can create a future filled with possibilities.
          </p>
          <button className="bg-two text-white py-2 px-6 rounded-full hover:bg-two">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
}
