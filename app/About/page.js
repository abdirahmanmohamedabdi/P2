import Image from "next/image";

export default function AboutUs() {
  const teamMembers = [
   
    { name: 'Jamila Abdi', role: 'Executive Director', image: '/jamila.jpeg' },
    // Add other members here
  ];
  return (
    <div>
    <section className="bg-two text-white py-16 px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Our People</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <Image
            src="/0.jpg"
            alt="Our People"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <p>
            Mustaqbal is organized to ensure it thrives for generations to come.
            Our commitment to nurturing a more inclusive society is unwavering.
          </p>
          <p className="mt-4">
            Our dedicated team members and Board are responsible for making key
            organizational decisions. The Board oversees strategic vision, and the
            team carries out daily operations.
          </p>
        </div>
      </div>
    </div>
  </section>

    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-88 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-[#d9b066] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Community</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <p>
              Mustaqbal works towards promoting social justice and equality through
              community-based activities and initiatives.
            </p>
            <p className="mt-4">
              These efforts are driven by collaboration, education, and advocacy to
              foster a more inclusive society.
            </p>
          </div>
          <div className="md:w-1/2 flex space-x-4 p-4">
            <img src="/community1.jpg" alt="Community Activity 1" className="w-1/2 rounded-lg" />
            <img src="/community2.jpg" alt="Community Activity 2" className="w-1/2 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
