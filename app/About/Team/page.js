import Image from "next/image";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Jamila Abdi",
      title: "Co-Founder & Project Manager",
      description:
        "With over a decade of experience in program and project management, Jamila has worked with leading international organizations, including the United Nations.",
      imageSrc: "/jamila.jpeg",
    },
   
  ];

  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold font-font text-gray-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-lg font-font text-gray-500">
            Meet the passionate individuals behind Mustaqbal Initiative.
          </p>
        </div>

        <div className="mt-12 grid gap-8 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-col bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  className=""
                  src={member.imageSrc}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold font-font text-gray-900">{member.name}</h3>
                <p className="text-base font-font text-blue-600">{member.title}</p>
                <p className="mt-3 text-sm font-font text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
