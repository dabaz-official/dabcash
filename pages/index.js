import Head from 'next/head'
import BackgroundSvg from '../components/BackgroundSvg'
import Navbar from '../components/Navbar'
import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, CreditCardIcon } from '@heroicons/react/24/outline'
import Footer from '../components/Footer'
import GetStarted from '../components/GetStarted'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Simple pricing',
    description:
      'We only provide one price for our premium membership. And the price is low enough for everyone to use DabCash.',
    icon: CreditCardIcon,
  },
  {
    name: 'Expenses are instantly calculated',
    description:
      'If you add the records of expenses, the expenses will be instantly calculated. We use Turbopack* to ensure the speed of calculations.',
    icon: BoltIcon,
  },
  {
    name: 'Mobile interface',
    description:
      "Even if it's a web application, you can also use it on your iPhone or iPad. We made perfect responsive design for our customers.",
    icon: DevicePhoneMobileIcon,
  },
]

export default function Home() {
  return (
    <div className="isolate bg-white">
      <Head>
        <title>DabCash</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <BackgroundSvg />

      <Navbar />

      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition">
                  <span className="text-gray-600">
                    Announcing our new features.
                    <a 
                      href="#features" 
                      className="font-semibold text-violet-600 ml-1"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Bills & expenses management for everyone
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  DabCash is a simple web application that provides customers with functions of expenses management. Customers can track and see their expenses daily and monthly.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <GetStarted />
                  <a
                    href="#pricing"
                    className="inline-block rounded-xl px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition"
                  >
                    Premium
                    <span className="text-gray-400 ml-2" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="py-24 sm:py-32 lg:py-40" id="features">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="sm:text-center">
              <h2 className="text-lg font-semibold leading-8 text-violet-600">Features</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to manage & save money</p>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                Focus on your expenses. Try to save more, but not earn more.
              </p>
            </div>

            <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
              <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500 text-white sm:shrink-0">
                      <feature.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <div className="sm:min-w-0 sm:flex-1">
                      <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                      <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}