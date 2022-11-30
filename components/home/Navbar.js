import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="px-6 py-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img 
                  className="h-8" 
                  src="/logo.svg" 
                  alt="" 
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-900 hover:text-gray-900 transition">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end gap-x-4">
              <p
                className="inline-block px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm"
              >
                Welcome, {session.user.name}
              </p>
              <a
                href="/dashboard"
                className="inline-block rounded-xl px-3 py-1.5 text-sm font-medium leading-6 text-white bg-violet-600 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-violet-700 transition"
              >
                Dashboard
              </a>
              <button
                onClick={() => signOut()}
                className="inline-block rounded-xl px-3 py-1.5 text-sm font-medium leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition"
              >
                Sign out
              </button>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">DabCash</span>
                    <img
                      className="h-8"
                      src="/logo.svg"
                      alt="DabCash"
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6 space-y-2">
                    <a
                      href="/dashboard"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-medium leading-6 text-gray-900 hover:bg-gray-400/10 transition"
                    >
                      Dashboard
                    </a>
                    <button
                      onClick={() => signOut()}
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-medium leading-6 text-gray-900 hover:bg-gray-400/10 transition"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    )  
  } else {
    return (
      <div className="px-6 py-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img 
                  className="h-8" 
                  src="/logo.svg" 
                  alt="" 
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-900 hover:text-gray-900 transition">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end gap-x-4">
              <button
                onClick={() => signIn()}
                className="inline-block rounded-xl px-3 py-1.5 text-sm font-medium leading-6 text-white bg-violet-600 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-violet-700 transition"
              >
                Get started
              </button>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">DabCash</span>
                    <img
                      className="h-8"
                      src="/logo.svg"
                      alt="DabCash"
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6 space-y-2">
                    <button
                      onClick={() => signIn()}
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-medium leading-6 text-gray-900 hover:bg-gray-400/10 transition"
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    )
  }
}

export default Navbar