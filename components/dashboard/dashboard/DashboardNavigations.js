import {
  ArrowLeftOnRectangleIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  DocumentDuplicateIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { signOut } from 'next-auth/react'

const actions = [
  {
    title: 'Overview',
    href: '/dashboard/overview',
    icon: ChartPieIcon,
    iconForeground: 'text-violet-700',
    iconBackground: 'bg-violet-50',
    description: 'Look through all your expenses and learn about where you use those money.',
  },
  {
    title: 'Accounts',
    href: '/dashboard/accounts',
    icon: UsersIcon,
    iconForeground: 'text-violet-700',
    iconBackground: 'bg-violet-50',
    description: 'Look through all your accounts, available for PayPal, Stripe, and more.',
  },
  {
    title: 'Cards',
    href: '/dashboard/cards',
    icon: CreditCardIcon,
    iconForeground: 'text-violet-700',
    iconBackground: 'bg-violet-50',
    description: "Look through all your cards, whether it's a credit or a debit card.",
  },
  { 
    title: 'Settings', 
    href: '/dashboard/settings', 
    icon: Cog6ToothIcon, 
    iconForeground: 'text-violet-700',
    iconBackground: 'bg-violet-50',
    description: 'Change your settings, manage your accounts and cards, or change your password.',
  },
  {
    title: 'Privacy',
    href: '/privacy',
    icon: DocumentDuplicateIcon,
    iconForeground: 'text-violet-700',
    iconBackground: 'bg-violet-50',
    description: "Learn about our privacy policy.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardNavigations() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-8">
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Dashboard</h2>
          </div>
        </div>
      </div>
      <div className="shadow-md bg-gray-200 overflow-hidden divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-violet-500 transition-200'
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'rounded-lg inline-flex p-3 ring-4 ring-white group-hover:text-violet-800 group-hover:bg-violet-100'
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <a href={action.href} className="focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {action.description}
              </p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
        <div
          className={classNames(
            'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-violet-500 transition-200'
          )}
        >
          <div>
            <span
              className={classNames(
                'rounded-lg inline-flex p-3 ring-4 ring-white text-violet-700 bg-violet-50 group-hover:text-violet-800 group-hover:bg-violet-100'
              )}
            >
              <ArrowLeftOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg">
              <button onClick={() => signOut()} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                Sign out
              </button>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Sign out your account.
            </p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}