"use client";
import Image from "next/image";
import { SparklesIcon, AcademicCapIcon, DesktopComputerIcon, HeartIcon } from "@heroicons/react/outline";

// List of programs
const programs = [
  {
    title: "Digital Literacy for Women and Youth",
    description:
      "We equip women and youth with digital skills, bridging the technology gap in marginalized communities. Participants gain essential skills needed to thrive in the digital age, accessing new educational and employment opportunities.",
    icon: DesktopComputerIcon,
    image: "/0.jpg", // Replace with relevant image
  },
  {
    title: "Entrepreneurship and Innovation Hub",
    description:
      "Our Entrepreneurship Hub supports budding entrepreneurs in turning ideas into businesses. With mentorship, workshops, and access to resources, we aim to build a network of innovators driving economic growth in underserved communities.",
    icon: SparklesIcon,
    image: "/0.jpg", // Replace with relevant image
  },
  {
    title: "Advocacy and Social Justice Campaigns",
    description:
      "Our advocacy programs aim to address gender inequality, economic empowerment, and social justice. We engage communities to challenge societal norms and advocate for inclusive policies that create lasting change.",
    icon: AcademicCapIcon,
    image: "/0.jpg", // Replace with relevant image
  },
  {
    title: "Youth Leadership and Empowerment",
    description:
      "Our Youth Leadership program fosters the next generation of leaders through mentorship and community service, empowering them to take active roles in creating a just and inclusive society.",
    icon: HeartIcon,
    image: "/0.jpg", // Replace with relevant image
  },
];

export default function Programs() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[700px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }} // Update with relevant image
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center p-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 font-font leading-tight">
            Transforming Lives <br /> through Empowerment Programs
          </h1>
          <p className="mt-4 text-lg font-font text-white">
            At Mustaqbal, we are committed to empowering women and youth in marginalized communities by providing opportunities for education, entrepreneurship, and leadership.
          </p>
          <button className="bg-one hover:bg-teal-600 text-white font-font px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300 mt-6">
            Learn More About Our Impact
          </button>
        </div>
      </div>

      {/* Programs Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold font-font text-gray-900 text-center mb-12">
            Our Core Programs
          </h2>
          <p className="text-lg text-gray-600 font-font text-center max-w-3xl mx-auto mb-12">
            Through our programs, we provide access to digital literacy, entrepreneurial resources, and leadership training that foster long-term, sustainable development in underserved communities.
          </p>

          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12">
            {programs.map((program, index) => (
              <div key={index} className="flex flex-col bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                {/* Program Image */}
                <div className="relative font-font h-64 lg:h-80">
                  <Image
                    src={program.image}
                    alt={program.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                {/* Program Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <program.icon className="w-12 h-12 text-blue-900" />
                    <h3 className="text-3xl font-extrabold font-font text-gray-900">{program.title}</h3>
                  </div>
                  <p className="text-lg font-font text-gray-600">{program.description}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-font font-extrabold mb-6">
              Empowering Women and Youth Across Kenya
            </h2>
            <p className="text-lg font-font mb-6">
              At Mustaqbal, we believe that every individual has the potential to create a brighter future for themselves and their community. Our programs focus on empowering women and youth through education, entrepreneurship, and leadership.
            </p>
            <p className="text-lg font-font">
              Through our initiatives, participants have transformed their lives, uplifted their families, and contributed to the development of their communities. Join us in making a difference.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/1.jpg" // Replace with relevant image
              alt="Community impact"
              layout="responsive"
              width={500}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 from-green-700 to-teal-500 py-16 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-font font-extrabold mb-4">
            Help Us Build Stronger Communities
          </h3>
          <p className="text-lg font-font mb-8">
            Your support can help us reach more individuals and provide them with the resources they need to succeed. Partner with us to empower women and youth through our transformative programs.
          </p>
          <button className="bg-white text-green-700 px-6 py-3 rounded-full font-font font-semibold shadow-lg transform hover:scale-105 transition duration-300">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
}
