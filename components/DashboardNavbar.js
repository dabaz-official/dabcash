import { Menu, Tab, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import LoginButton from './LoginButton'

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
              <LoginButton />
            </div>
          </div>
        </div>
      </nav>
      <Tab.Panels>
        <Tab.Panel>Thats me</Tab.Panel>
        <Tab.Panel>Thats you</Tab.Panel>
        <Tab.Panel>Thats him</Tab.Panel>
        <Tab.Panel>Thats DabAZ</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}