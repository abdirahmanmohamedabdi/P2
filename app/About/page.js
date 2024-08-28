import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="relative bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="relative h-full xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="/about-us-background.jpg" // Replace with your background image
              alt="Background"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        {/* Left Column: About Us Content */}
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase font-font">
            About Us
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white font-font">
            Empowering Marginalized Communities
          </p>
          <p className="mt-5 text-lg text-white font-font">
            Mustaqbal is dedicated to empowering marginalized communities in Nairobi and North Eastern Kenya through digital literacy and skills training. Our mission is to bridge the digital divide and provide equal opportunities for growth and development.
          </p>

          <div className="mt-12 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white font-font">
              The Motivation for Establishing Mustaqbal
              </h3>
              <p className="mt-2 text-base text-white font-font">
                Mustaqbal was established in response to the growing need for digital empowerment in marginalized communities. With the rapid advancement of technology, access to digital resources and knowledge has become a critical component for economic and social development. However, many communities in Nairobi and North Eastern Kenya remain excluded from these opportunities due to lack of access, awareness, and skills. Mustaqbal aims to address these gaps by providing comprehensive training programs, mentorship, and resources to enable these communities to harness the power of technology for their own development.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white font-font">
                The Importance of Mustaqbal
              </h3>
              <p className="mt-2 text-base text-white font-font">
                Mustaqbal is vital for fostering a more inclusive and equitable society. By focusing on digital empowerment, Mustaqbal equips individuals with the necessary tools to participate fully in the digital economy, improve their livelihoods, and contribute to the socio-economic development of their communities. The organization's efforts in providing digital skills training and support not only help bridge the digital divide but also empower individuals to become change-makers in their own right, fostering a culture of innovation and self-reliance.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: About the Founder */}
        <div className="relative xl:col-start-2 xl:row-start-1 xl:pl-8">
          <div className="flex flex-col items-center pt-12 sm:pt-24 xl:pt-32">
            <h3 className="mb-6 text-2xl font-bold text-white font-font text-center">
              About the Founder
            </h3>
            <img
              src="/jamila.jpeg"
              alt="Founder"
              className="mb-6 h-84 w-84 object-cover "
              width={260}
              height={260}
            />
            <p className="mt-2 text-base text-white font-font text-">
              Jamila Abdi, the founder of Mustaqbal, has over a decade of experience in program and project management. Having worked with the United Nations Office at Nairobi, the United Nations Environment Programme, and leading telecommunication companies, her vision for Mustaqbal is rooted in her commitment to empowering marginalized communities through education and digital literacy. Jamila believes that by providing the necessary tools and knowledge, we can create a more equitable and prosperous future for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
