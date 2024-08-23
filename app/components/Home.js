/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client"
import { ExternalLinkIcon } from '@heroicons/react/solid'
import Footer from './footer'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {Navbar} from './Navbar'
import Heroe from './Hero'




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
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 animate-slideInLeft">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold font-font tracking-tight text-gray-900">
                  Empowering Women and Youth in Marginalized Areas
                </h2>
                <p className="mt-4 text-lg font-font text-gray-500">
                  Mustaqbal Women and Youth provides digital skills and entrepreneurship training to women and youth in Nairobi and North Eastern Kenya, helping them overcome barriers and unlock new opportunities.
                </p>
                
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 animate-slideInRight">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/somali.jpg"
                alt="Mustaqbal program in action"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2 animate-slideInLeft">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold font-font tracking-tight text-gray-900">
                  Building Sustainable Futures
                </h2>
                <p className="mt-4 text-lg font-font text-gray-500">
                  By equipping marginalized communities with digital and entrepreneurial skills, Mustaqbal is helping to build sustainable futures where women and youth can thrive in the digital economy.
                </p>
               
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1 animate-slideInRight">
            <div className="relative pt-44 pb-10 lg:px-0 lg:m-0 lg:relative lg:h-full overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover transform hover:scale-110 transition-transform duration-300"
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