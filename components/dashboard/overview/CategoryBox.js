import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const categories = [
  { 
    id: 1,
    name: '🎁 Gifts' 
  },
  { 
    id: 2,
    name: '💸 Transfer' 
  },
  { 
    id: 3,
    name: '🚗 Traffic' 
  },
  { 
    id: 4,
    name: '🍲 Food' 
  },
  { 
    id: 5,
    name: '🛒 Shopping' 
  },
  { 
    id: 6,
    name: '📞 Phone' 
  },
  { 
    id: 7,
    name: '🎉 Party' 
  },
  { 
    id: 8,
    name: '🎮 Games' 
  },
  { 
    id: 9,
    name: '📱 Apps' 
  },
  { 
    id: 10,
    name: '👗 Clothing' 
  },
  { 
    id: 11,
    name: '📷 Digital' 
  },
  { 
    id: 12,
    name: '🔧 Repair' 
  },
  { 
    id: 13,
    name: '🍻 Alcohol' 
  },
  { 
    id: 14,
    name: '🚬 Cigarettes' 
  },
  { 
    id: 15,
    name: '✈ Travel' 
  },
  { 
    id: 16,
    name: '🍩 Snacks' 
  },
  { 
    id: 17,
    name: '🍉 Fruit' 
  },
  { 
    id: 18,
    name: '🍅 Vegetables' 
  },
  { 
    id: 19,
    name: '💄 Makeup' 
  },
  { 
    id: 20,
    name: '💆‍♀️ Beauty' 
  },
  { 
    id: 21,
    name: '🏠 Housing' 
  },
  { 
    id: 22,
    name: '🚰 Water' 
  },
  { 
    id: 23,
    name: '⚡ Electricity' 
  },
  { 
    id: 24,
    name: '⛽ Gas' 
  },
  { 
    id: 25,
    name: '🍸 Social' 
  },
  {
    id: 26,
    name: '💪 Fitness'
  },
  {
    id: 27,
    name: '📚 Books'
  },
  {
    id: 28,
    name: '🐕 Pets'
  },
  {
    id: 29,
    name: '🏨 Hotels'
  },
  {
    id: 30,
    name: '🧶 Life'
  },
  {
    id: 31,
    name: '💡 Study'
  },
  {
    id: 32,
    name: '👪 Kids'
  },
  {
    id: 33,
    name: '🏥 Medical'
  },
  {
    id: 34,
    name: '📦 Express'
  },
  {
    id: 35,
    name: '❤ Donations'
  },
  {
    id: 36,
    name: '🎃 Others'
  },
]

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]

export default function CategoryBox() {
  const [selected, setSelected] = useState(categories[0])
  const [query, setQuery] = useState('')

  const filteredCategories =
    query === ''
      ? categories
      : categories.filter((category) =>
          category.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="w-72">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1 rounded-xl shadow-sm">
          <div className="relative w-full cursor-default overflow-hidden rounded-xl bg-white text-left focus:outline-none border border-gray-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-violet-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(category) => category.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
              {filteredCategories.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredCategories.map((category) => (
                  <Combobox.Option
                    key={category.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-violet-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={category}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {category.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-violet-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}