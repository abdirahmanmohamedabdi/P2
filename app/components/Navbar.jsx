"use client";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
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
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
export default function Navbar() {
  return (
    <div>
      <header>
        <Popover className="relative bg-white shadow">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img className="h-20 w-auto" src="/1773.png" alt="Workflow" />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <a
                href="/"
                className="text-base font-normal text-black font-font hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="/About"
                className="text-base font-medium text-black  font-font hover:text-gray-900"
              >
                About Us
              </a>
              <a
                href="/Programs"
                className="text-base font-medium text-black  font-font hover:text-gray-900"
              >
                Programs
              </a>
              <a
                href="/Impact"
                className="text-base font-medium text-black  font-font hover:text-gray-900"
              >
                Impact
              </a>
             
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="/Support"
                className="whitespace-nowrap text-base font-bold text-three font-font hover:text-two"
              >
                Get Involved
              </a>
              <a
                href="/Contact"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-two from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-bold font-font font-bold text-white hover:from-purple-700 hover:to-indigo-700"
              >
                Contact Us
              </a>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-20 w-auto"
                        src="/1773.png"
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="/"
                      className="text-base font-normal text-black font-font hover:text-gray-900"
                    >
                      Home
                    </a>
                    <a
                      href="/About"
                      className="text-base font-medium text-gray-500 font-font hover:text-gray-900"
                    >
                      About Us
                    </a>
                    <a
                      href="/programs"
                      className="text-base font-medium text-gray-500 font-font hover:text-gray-900"
                    >
                      Programs
                    </a>
                    <a
                      href="/impact"
                      className="text-base font-medium text-gray-500 font-font hover:text-gray-900"
                    >
                      Impact
                    </a>
                   
                  </div>
                  <div className="mt-6">
                    <a
                      href="/Contact"
                      className="w-full flex items-center justify-center   bg-two from-purple-600 to-indigo-600 font-font from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
                    >
                      Contact Us
                    </a>
                    <p className="mt-6 text-center text-base font-medium  text-gray-500">
                      <a href="/Support" className="text-gray-900 font-font">
                        Get Involved
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>
    </div>
  );
}
