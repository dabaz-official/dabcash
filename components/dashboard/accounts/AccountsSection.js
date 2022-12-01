import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'

const cards = [
  {
    name: 'Cash',
    role: 'Primary',
    ammount: '$999.99',
    icon:(props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    name: 'Debit Card',
    role: 'Secondary',
    ammount: '$999.99',
    icon:(props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>    
    ),
  },
  {
    name: 'Credit Card',
    role: 'Secondary',
    ammount: '$999.99',
    icon:(props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>    
    ),
  },
]

const accounts = [
  {
    name: 'PayPal',
    role: 'Primary',
    ammount: '$999.99',
    icon:(props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path d="M19.554 9.488c.121.563.106 1.246-.04 2.051-.582 2.978-2.477 4.466-5.683 4.466h-.442a.666.666 0 0 0-.444.166.72.72 0 0 0-.239.427l-.041.189-.553 3.479-.021.151a.706.706 0 0 1-.247.426.666.666 0 0 1-.447.166H8.874a.395.395 0 0 1-.331-.15.457.457 0 0 1-.09-.363c.061-.373.148-.938.267-1.689.117-.75.206-1.314.267-1.689s.15-.938.272-1.685c.121-.748.212-1.31.271-1.685.033-.248.179-.371.433-.371h1.316c.893.013 1.682-.057 2.375-.211 1.172-.262 2.134-.744 2.886-1.449.685-.637 1.203-1.462 1.56-2.473.162-.47.277-.917.352-1.338.006-.041.014-.066.025-.074.008-.011.022-.014.035-.011a.378.378 0 0 1 .062.035c.524.398.854.941.98 1.632zm-1.728-2.836c0 .717-.154 1.508-.465 2.374-.537 1.562-1.547 2.618-3.037 3.168-.758.269-1.602.408-2.535.425 0 .006-.301.007-.904.007l-.903-.007c-.672 0-1.067.32-1.187.964-.013.053-.298 1.83-.855 5.329-.008.066-.048.102-.121.102H4.854a.473.473 0 0 1-.369-.165.469.469 0 0 1-.115-.39L6.702 3.664a.784.784 0 0 1 .276-.483.785.785 0 0 1 .519-.19h6.014c.228 0 .555.044.979.131.428.084.801.194 1.123.321.718.274 1.266.688 1.645 1.237.379.552.568 1.207.568 1.972z"></path>
      </svg>
    ),
  },
  {
    name: 'Stripe',
    role: 'Secondary',
    ammount: '$999.99',
    icon:(props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path d="M13.479 9.883c-1.626-.604-2.512-1.067-2.512-1.803 0-.622.511-.977 1.423-.977 1.667 0 3.379.642 4.558 1.22l.666-4.111c-.935-.446-2.847-1.177-5.49-1.177-1.87 0-3.425.489-4.536 1.401-1.155.954-1.757 2.334-1.757 4 0 3.023 1.847 4.312 4.847 5.403 1.936.688 2.579 1.178 2.579 1.934 0 .732-.629 1.155-1.762 1.155-1.403 0-3.716-.689-5.231-1.578l-.674 4.157c1.304.732 3.705 1.488 6.197 1.488 1.976 0 3.624-.467 4.735-1.356 1.245-.977 1.89-2.422 1.89-4.289 0-3.091-1.889-4.38-4.935-5.468h.002z"></path>
      </svg>  
    ),
  },
  {
    name: 'Apple Pay',
    role: 'Secondary',
    ammount: '$999.99',
    icon:(props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path>
      </svg>
    ),
  },
  {
    name: 'Google Pay',
    role: 'Secondary',
    ammount: '$999.99',
    icon:(props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
      </svg>
    ),
  },
]

export default function AccountsSection() {
  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  const watchAllFields = watch();
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = data => console.log(data);

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
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Accounts</h2>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:items-center mb-4">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Cash & Cards</h1>
          <p className="mt-2 text-sm text-gray-700">
            Credit cards, debit cards, and cash.
          </p>
        </div>
      </div>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6">
        {cards.map((card) => (
          <li
            key={card.email}
            className="col-span-1 flex flex-col text-center bg-white rounded-2xl shadow-md divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <card.icon className="h-16 w-16 mx-auto" aria-hidden="true" />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">{card.name}</h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Ammount</dt>
                <dd className="text-gray-500 text-sm">{card.ammount}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    {card.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
            <div className="-mt-px flex">
                <div className="w-0 flex-1 flex">
                  <button
                    onClick={openModal}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <PencilSquareIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Edit</span>
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
                                Set a balance
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
                                    <label htmlFor="balance" className="block text-sm font-medium text-gray-700">
                                      Balance
                                    </label>
                                    <div className="relative mt-1 rounded-xl shadow-sm">
                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span className="text-gray-500 sm:text-sm">$</span>
                                      </div>
                                      <input
                                        type="text"
                                        name="balance"
                                        id="balance"
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
                                </div>
                                <div className="mt-4">
                                  <button
                                    type="button"
                                    className="-z-50 inline-flex justify-center rounded-xl border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 transition"
                                    onClick={closeModal}
                                  >
                                    Done
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
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="sm:flex sm:items-center mb-4">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Accounts</h1>
          <p className="mt-2 text-sm text-gray-700">
            PayPal, Stripe, Apple Pay, and more...
          </p>
        </div>
      </div>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6">
        {accounts.map((account) => (
          <li
            key={account.email}
            className="col-span-1 flex flex-col text-center bg-white rounded-2xl shadow-md divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <account.icon className="h-16 w-16 mx-auto" aria-hidden="true" />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">{account.name}</h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Ammount</dt>
                <dd className="text-gray-500 text-sm">{account.ammount}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                    {account.role}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex">
                <div className="w-0 flex-1 flex">
                  <button
                    onClick={openModal}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <PencilSquareIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Edit</span>
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
                                Set a balance
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
                                    <label htmlFor="balance" className="block text-sm font-medium text-gray-700">
                                      Balance
                                    </label>
                                    <div className="relative mt-1 rounded-xl shadow-sm">
                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span className="text-gray-500 sm:text-sm">$</span>
                                      </div>
                                      <input
                                        type="text"
                                        name="balance"
                                        id="balance"
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
                                </div>
                                <div className="mt-4">
                                  <button
                                    type="button"
                                    className="-z-50 inline-flex justify-center rounded-xl border border-transparent bg-violet-100 px-4 py-2 text-sm font-medium text-violet-900 hover:bg-violet-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 transition"
                                    onClick={closeModal}
                                  >
                                    Done
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
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}