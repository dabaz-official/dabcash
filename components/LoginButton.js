import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Menu } from '@headlessui/react';

const userNavigation = [
  {
    name: "Settings",
    href: "/dashboard/settings"
  },
]

const LoginButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="bg-white flex text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
            <Menu.Item>
              <a
                href="/dashboard/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                Settings
              </a>
              <button 
                onClick={() => signOut()}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              >
                Sign out
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    )  
  } else {
    return (
      <div className="ml-3 relative">
        <button 
          onClick={() => signIn()}
          className="bg-white flex text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="sr-only">Log in</span>
          <p className="text-black underline underline-offset-2">Log in</p>
        </button>
      </div>
    )
  }
}

export default LoginButton