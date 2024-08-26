import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <h2 className="text-4xl  text-center  font-bold text-one  font-font mb-12">
          About Us
        </h2>

        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-lg text-black font-font text-center mb-8">
            Mustaqbal is dedicated to empowering marginalized communities in Nairobi and North Eastern Kenya through digital literacy and skills training. Our mission is to bridge the digital divide and provide equal opportunities for growth and development.
          </p>
        </section>

        {/* Why Mustaqbal Was Built */}
        <section className="mb-12">
          <h3 className="text-2xl  font-bold text-one  font-font mb-4">
            Why Mustaqbal Was Built
          </h3>
          <p className="text-base font-font text-black mb-6">
            Mustaqbal was established in response to the growing need for digital empowerment in marginalized communities. With the rapid advancement of technology, access to digital resources and knowledge has become a critical component for economic and social development. However, many communities in Nairobi and North Eastern Kenya remain excluded from these opportunities due to lack of access, awareness, and skills. Mustaqbal aims to address these gaps by providing comprehensive training programs, mentorship, and resources to enable these communities to harness the power of technology for their own development.
          </p>
        </section>

        {/* Importance of Mustaqbal */}
        <section className="mb-12">
          <h3 className="text-2xl  font-bold text-one  font-font mb-4">
            The Importance of Mustaqbal
          </h3>
          <p className="text-base font-font text-black mb-6">
            Mustaqbal is vital for fostering a more inclusive and equitable society. By focusing on digital empowerment, Mustaqbal equips individuals with the necessary tools to participate fully in the digital economy, improve their livelihoods, and contribute to the socio-economic development of their communities. The organization's efforts in providing digital skills training and support not only help bridge the digital divide but also empower individuals to become change-makers in their own right, fostering a culture of innovation and self-reliance.
          </p>
        </section>

        {/* Founder Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-one font-font mb-4">
            About the Founder
          </h3>
          <div className="flex flex-col lg:flex-row items-center">
            {/* Replace with actual founder image */}
            <img
              src="https://res-console.cloudinary.com/dyijvml1y/thumbnails/v1/image/upload/v1724679664/amFtaWxhX2JpeTF2NA==/preview" // Replace with actual image path
              alt="Founder"
              className=" w-80 h-80 object-cover mb-6 lg:mb-0 lg:mr-6"
              width={160}
              height={160}
            />
            <p className="text-base font-font text-black">
              The founder of Mustaqbal, Jamila Abdi, has over a decade of experience in program and project management, having worked with the United Nations Office at Nairobi, the United Nations Environment Programme, and leading telecommunication companies. Her vision for Mustaqbal is rooted in her commitment to empowering marginalized communities through education and digital literacy. Jamila believes that by providing the necessary tools and knowledge, we can create a more equitable and prosperous future for all.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
