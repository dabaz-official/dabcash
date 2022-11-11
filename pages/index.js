import Head from 'next/head';
import { starter, premium } from '../components/data/pricing';
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { leftTwo, rightTwo } from '../components/data/faq';
import Header from '../components/Layout/Header';
import FeatureTabs from '../components/Layout/FeatureTabs';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>DabCash</title>
        <link rel="icon" href="/logos/primary-logo.svg" />
      </Head>

      <Header />

      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28 text-center md:pt-40 lg:pt-44 md:pb-60 lg:pb-56 bg-white">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Budget & expense management{" "}
            <span className="relative whitespace-nowrap text-blue-600">
              <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none">
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative">
                made simple
              </span>
            </span>
            {" "}for everyone.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Most finance-managing apps are hard for non-professionals to use. We make the opposite trade-off, and hope you don&apos;t get lost.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a className="group inline-flex items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 transition duration-200" href="/register">
              Purchase premium
            </a>
            <a className="group inline-flex ring-1 items-center justify-center rounded-xl py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 transition duration-200" href="https://open.spotify.com/artist/1KmtWPNNBJw4spLrQkPrXQ?si=VuCAK9ZESDO4ZzjotMBNpA">
              <svg aria-hidden="true" className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current">
                <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"></path>
              </svg>
              <span className="ml-3">
                What we love
              </span>
            </a>
          </div>
        </div>

        <section id="features" aria-label="Features" className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32">
          <img alt="Background of features section" src="/images/background/features-background.jpg" className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]" loading="lazy" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                Simplify your budget & expense management.
              </h2>
              <p className="mt-6 text-lg tracking-tight text-blue-100">
                Take a simple step to record your income and spending everyday.
              </p>
            </div>
            <FeatureTabs />
          </div>
        </section>

        <section id="get-started" aria-label="Get Started" className="relative overflow-hidden bg-white py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="font-display text-3xl tracking-tight text-blue-600 sm:text-4xl">
                Get started today
              </h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                It&apos;s time to take control of your finance. Buy our premium membership and save more money.
              </p>
              <a className="group inline-flex items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 focus-visible:outline-white mt-10 transition duration-200" href="#">
                Purchase
              </a>
            </div>
          </div>
        </section>

        <section id="pricing" aria-label="Pricing" className="bg-slate-900 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="md:text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                <span className="relative whitespace-nowrap">
                  <svg aria-hidden="true" viewBox="0 0 281 40" className="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400">
                    <path fillRule="evenodd" clipRule="evenodd" d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"></path>
                  </svg>
                  <span className="relative">
                    Simple pricing,
                  </span>
                </span>
                {" "}for everyone.
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                We have two plans for you.
              </p>
            </div>
            <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-2 xl:mx-0 xl:gap-x-8">
              {starter.map((category) => (
                <section
                  key={category.name}
                  className="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8"
                >
                  <h3 className="mt-5 font-display text-lg text-white">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-base text-slate-400">
                    {category.description}
                  </p>
                  <p className="order-first font-display text-5xl font-light tracking-tight text-white">
                    {category.price}
                  </p>
                  <ul className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200">
                    {category.features.map((feature) => (
                      <li 
                        key={feature.name}
                        className="flex"
                      >
                        <CheckBadgeIcon className="h-6 w-6 flex-none fill-none stroke-current text-slate-400" />
                        <span className="ml-4">
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a className="group inline-flex ring-1 items-center justify-center rounded-xl py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8 transition duration-200" href="/register">
                    Get started
                  </a>
                </section>
              ))}
              {premium.map((category) => (
                <section
                  key={category.name}
                  className="flex flex-col rounded-3xl px-6 sm:px-8 order-first bg-blue-600 py-8 lg:order-none"
                >
                  <h3 className="mt-5 font-display text-lg text-white">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-base text-white">
                    {category.description}
                  </p>
                  <p className="order-first font-display text-5xl font-light tracking-tight text-white">
                    {category.price}
                  </p>
                  <ul className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200">
                    {category.features.map((feature) => (
                      <li 
                        key={feature.name}
                        className="flex"
                      >
                        <CheckBadgeIcon className="h-6 w-6 flex-none fill-none stroke-current text-white" />
                        <span className="ml-4">
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a className="group inline-flex items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8 transition duration-200" href="/register">
                    Get started
                  </a>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="relative overflow-hidden bg-[url('/images/background/faq-background.jpg')] bg-cover lg:bg-contain py-20 sm:py-32 h-screen">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 id="faq-title" className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                If you can&apos;t find what you&apos;re looking for,{" "}
                <a href="mailto:support@dabcashy.com" className="underline underline-offset-2 hover:text-blue-600 transition duration-200">
                  email
                </a> 
                {" "}our support team.
              </p>
            </div>
            <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              <li>
                <ul className="flex flex-col gap-y-8">
                  {leftTwo.map((item) => (
                    <li key={item.id}>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        {item.question}
                      </h3>
                      <p className="mt-4 text-sm text-slate-700">
                        {item.answer}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <ul className="flex flex-col gap-y-8">
                  {rightTwo.map((item) => (
                    <li key={item.id}>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        {item.question}
                      </h3>
                      <p className="mt-4 text-sm text-slate-700">
                        {item.answer}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}