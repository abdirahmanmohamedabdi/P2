import Image from "next/image";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Jamila Abdi",
      title: "Co-Founder & Project Manager",
      description:
        "With over a decade of experience in program and project management, Jamila has led impactful initiatives with international organizations, including the United Nations. Her dedication to empowering marginalized communities drives the Mustaqbal mission.",
      imageSrc: "/jamila.jpeg", // Replace with actual image
    },
    // Add more team members as needed
  ];

  return (
    <div className="bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-4">
            Meet Our Team
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            The passionate leaders behind Mustaqbal, dedicated to empowering marginalized communities through innovation, advocacy, and leadership.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="mt-16 grid gap-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 text-center transform transition duration-500 hover:scale-105"
            >
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-extrabold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-lg font-medium">
                  {member.title}
                </p>
                <p className="mt-3 text-gray-600 text-base leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 py-12 mt-16 text-white text-center">
        <h3 className="text-3xl font-extrabold mb-4">
          Join Us in Creating Impact
        </h3>
        <p className="text-lg mb-6">
          Your support helps us empower more women and youth. Together, we can create a brighter future for marginalized communities.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-lg transform hover:scale-105 transition duration-300">
          Get Involved
        </button>
      </div>
    </div>
  );
}
