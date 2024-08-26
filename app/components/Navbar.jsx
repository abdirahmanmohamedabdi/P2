"use client"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/solid'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Our story', href: '/About' },
  { name: 'Our impact', href: '/Impact' },
  { name: 'Our programs', href: '/Programs' },
 
  { name: 'Get Involved', href: '/Contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <div className="bg-white shadow sticky top-0 z-50">
      <header>
        <Popover className="relative">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
  <a href="#">
    <span className="sr-only">Mustaqbal Women and Youth</span>
    <img 
      className="h-16 w-auto"  // Set a fixed height, and width is auto to maintain aspect ratio
      src="/32.png"  // Ensure the path to your logo image is correct
      alt="Mustaqbal Women and Youth Logo" 
    />
  </a>
</div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-one focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <>
                      <Popover>
                        {({ open }) => (
                          <>
                            <Popover.Button className="text-base font-medium  text-one font-font flex  items-center">
                              {item.name}
                              <ChevronDownIcon className="ml-1 h-4 w-4 text-gray-500" aria-hidden="true" />
                            </Popover.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    {item.submenu.map((subItem) => (
                                      <a key={subItem} href="#" className="block text-sm font-font text-one font-medium">
                                        {subItem}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    </>
                  ) : (
                    <a href={item.href} className="text-base font-medium  hover:text-black text-one font-font">
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </Popover.Group>
           
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
            <Popover.Panel focus className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img className="h-20 w-auto" src="/32.png" alt="Haki Na Sheria Logo" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {menuItems.map((item) => (
                        <a key={item.name} href={item.href} className="text-base font-medium  text-one font-font ">
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>
    </div>
  )
}
