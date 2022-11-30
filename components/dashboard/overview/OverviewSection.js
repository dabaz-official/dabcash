import AddButton from "./AddButton"
import { expenses } from "../../../data/expenses"

export default function OverviewSection() {
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
        <AddButton />
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                  >
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