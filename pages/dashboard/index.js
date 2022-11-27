import Head from 'next/head'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/24/outline'
import DashboardNavbar from '../../components/DashboardNavbar'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default function Dashboard() {
  return (
    <div className="min-h-full">
      <Head>
        <title>Dashboard - DabCash</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <DashboardNavbar />
    </div>
  )
}