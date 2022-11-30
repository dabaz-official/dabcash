import { Menu, Tab, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { signOut } from 'next-auth/react'
import DashboardNavigations from './dashboard/DashboardNavigations'
import OverviewSection from './overview/OverviewSection'

const navigation = [
  { name: 'Dashboard' },
  { name: 'Overview' },
  { name: 'Accounts' },
  { name: 'Cards' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardNavbar() {
  return (
    <Tab.Group as="div">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block h-8 w-auto"
                  src="/logo.svg"
                  alt="DabCash"
                />
              </div>
              <Tab.List as="div" className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Tab
                    key={item.name}
                    className={({ selected }) => 
                      classNames(
                        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                        selected
                          ? 'border-violet-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      )
                    }          
                  >
                    {item.name}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="bg-white flex text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                  <span className="sr-only">Open user menu</span>
                  <p className="text-black underline underline-offset-2">DabAZ</p>
                </Menu.Button>   
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item as="Fragment">
                    <a
                      href="/dashboard/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-black transition"
                    >
                      Settings
                    </a>
                    <button 
                      onClick={() => signOut()}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-black transition"
                    >
                      Sign out
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
            </div>
          </div>
        </div>
      </nav>
      <Tab.Panels>
        <Tab.Panel>
          <DashboardNavigations />
        </Tab.Panel>
        <Tab.Panel>
          <OverviewSection />
        </Tab.Panel>
        <Tab.Panel>Thats him</Tab.Panel>
        <Tab.Panel>Thats DabAZ</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}