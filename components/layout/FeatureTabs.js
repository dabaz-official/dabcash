import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FeatureTabs() {
  let [categories] = useState({
    List: [
      {
        title: 'Bill List',
        description: 'Keep track of your budget & expense.',
        imageSrc: '/images/expenses.png',
        imageAlt: 'List',
      },
    ],
    Categories: [
      {
        title: 'Categories',
        description: 'Review your top categories, and see where your money goes.',
        imageSrc: '/images/categories.png',
        imageAlt: 'Categories',
      },
    ],
    Accounts: [
      {
        title: 'Accounts',
        description: 'All accounts organized into one place.',
        imageSrc: '/images/overview.png',
        imageAlt: 'All in one',
      },
    ],
  })

  return (
    <div className="w-full max-w-7xl px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1 text-white">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-xl py-2.5 text-sm font-medium leading-5',
                  'focus:outline-none focus:ring-2 transition duration-200',
                  selected
                    ? 'bg-white shadow text-blue-700'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 lg:col-span-7">
          {Object.values(categories).map((infos, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none'
              )}
            >
              <ul>
                {infos.map((info) => (
                  <li key={info.title}>
                    <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center mt-8 mb-4">
                      {info.description}
                    </p>

                    <div className="w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem] mx-auto">
                      <img src={info.imageSrc} alt={info.imageAlt} sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem" className=" items-center justify-center" />
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}