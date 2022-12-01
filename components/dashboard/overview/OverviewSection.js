import React from 'react'
import CategoryBox from './CategoryBox'
import PaymentBox from './PaymentBox'
import { expenses } from "../../../data/expenses"
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const today = new Date();

export default function OverviewSection() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-8">
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Overview</h2>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Expenses</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all your expenses in your accounts and cards.
          </p>
        </div>

        <>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-xl border border-transparent bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 sm:w-auto transition"
            >
              Add an expense
            </button>
          </div>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="div"
                        className="flex justify-between align-middle"
                      >
                        <h3 className="text-xl font-medium leading-6 text-gray-900 justify-start">
                          Add an expense
                        </h3>
                        <button
                          onClick={closeModal}
                          className="border-2 border-violet-300 rounded-lg"
                        >
                          <XMarkIcon className="h-5 w-5 m-1" />
                        </button>
                      </Dialog.Title>
                      <div className="flex min-h-full py-2">
                        <form className="" action="submit" method="POST">
                          <div className="mt-2 space-y-2">
                            <div>
                              <label htmlFor="ammount" className="block text-sm font-medium text-gray-700">
                                Ammount
                              </label>
                              <div className="relative mt-1 rounded-xl shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <span className="text-gray-500 sm:text-sm">$</span>
                                </div>
                                <input
                                  type="text"
                                  name="ammount"
                                  id="ammount"
                                  className="block w-full rounded-xl border-gray-300 pl-7 pr-12 focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
                                  placeholder="0.00"
                                  required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                  <label htmlFor="currency" className="sr-only">
                                    Currency
                                  </label>
                                  <select
                                    id="currency"
                                    name="currency"
                                    className="h-full rounded-xl border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
                                  >
                                    <option>USD</option>
                                    <option>CAD</option>
                                    <option>EUR</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div>
                              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                Category
                              </label>
                              <CategoryBox />
                            </div>
                            <div>
                              <label htmlFor="payment" className="block text-sm font-medium text-gray-700">
                                Payment
                              </label>
                              <PaymentBox />
                            </div>
                            <div>
                              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                Date
                              </label>
                              <div className="relative mt-1 rounded-xl shadow-sm">
                                <input
                                  type="text"
                                  name="ammount"
                                  id="ammount"
                                  className="block w-full rounded-xl border-gray-300 pr-12 focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
                                  placeholder={[today.getMonth()]+"."+[today.getDate()]+"."+[today.getFullYear()]}
                                  value={[today.getMonth()]+"."+[today.getDate()]+"."+[today.getFullYear()]}
                                  disabled
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                                Notes
                              </label>
                              <div className="relative mt-1 rounded-xl shadow-sm">
                                <input
                                  type="text"
                                  name="notes"
                                  id="notes"
                                  className="block w-full rounded-xl border-gray-300 pr-12 focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
                                  placeholder="About"
                                  maxLength={50}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <button
                              type="button"
                              className="-z-50 inline-flex justify-center rounded-xl border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 transition"
                              onClick={closeModal}
                            >
                              Add this
                            </button>
                          </div>
                        </form>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>

      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">
                    Ammount
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                    Category
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 truncate">
                    Notes
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                    Date
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                    Currency
                  </th>
                  <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                    Payment
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0">
                      {expense.ammount}
                    </td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{expense.category}</td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{expense.notes}</td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{expense.date}</td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{expense.currency}</td>
                    <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{expense.payment}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0">
                      <button className="text-violet-600 hover:text-violet-900 transition">
                        Edit<span className="sr-only">, {expense.id}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}