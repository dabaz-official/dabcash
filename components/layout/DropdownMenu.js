import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { indexNavigations } from '../data/index-navigations'

export default function DropdownMenu() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
          <Bars3Icon
            className="h-6 w-6 overflow-visible stroke-slate-700"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-4 w-56 origin-top-right divide-y divide-slate-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            {indexNavigations.link.map((item) => (
              <Menu.Item key={item.name}>
                <a
                  href={item.href}
                  className="text-slate-900 group flex w-full items-center rounded-md px-2 py-2 text-md active:bg-blue-500 active:text-white"
                >
                  {item.name}
                </a>
              </Menu.Item>
            ))}
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/login"
                  className={`${
                    active ? 'bg-blue-500 text-white' : 'text-slate-900'
                  } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                >
                  Log in
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}