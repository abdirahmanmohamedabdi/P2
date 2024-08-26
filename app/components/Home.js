
"use client"
import Heroe from "./Hero";




const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative bg-th">
   <Heroe/>
  
    {/* Alternating Feature Sections */}
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48" />
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 ">
            <div>
              <div className="mt-6">
              <h2 className="text-2xl font-bold font-font text-one mb-4">
              Our Mission
            </h2>
            <p className="text-base font-font text-black font-medium mb-6">
              To bridge the digital divide and provide marginalized communities with the skills and resources necessary to thrive in the digital age.
            </p>
                
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 ">
            <div className="relative pt-44 pb-10 lg:px-0 lg:m-0 lg:relative lg:h-full overflow-hidden">
              <img
                className="absolute relative inset-0 h-full w-full object-cover "
                src="https://res-console.cloudinary.com/dyijvml1y/thumbnails/v1/image/upload/v1724679667/Y3RhX3ZwanFieA==/preview"
                alt="Mustaqbal program in action"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2 ">
            <div>
              <div className="mt-6">
                <h2 className="text-2xl font-bold font-font text-one mb-4">
                  Building Sustainable Futures
                </h2>
                <p className="text-base font-font text-black font-medium mb-6">
                  By equipping marginalized communities with digital and entrepreneurial skills, Mustaqbal is helping to build sustainable futures where women and youth can thrive in the digital economy.
                </p>
               
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1 ">
            <div className="relative pt-44 pb-10 lg:px-0 lg:m-0 lg:relative lg:h-full overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover "
                src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Community impact"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}