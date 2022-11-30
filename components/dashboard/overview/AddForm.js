import { useState } from 'react'
import CategoryBox from './CategoryBox'
import PaymentBox from './PaymentBox'

const today = new Date();

export default function AddForm() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
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
                placeholder={[today.getUTCMonth()]+"."+[today.getDate()]+"."+[today.getFullYear()]}
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
  )
}