const navigation = {
  introduction: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
  ],
  contact: [
    { name: 'Business', href: 'mailto:business@dabazofficial.com' },
    { name: 'Customer Service', href: 'mailto:dabaz@dabazofficial.com' },
  ],
  company: [
    { name: 'About', href: 'https://twitter.com/dabwave' },
    { name: 'Blog', href: 'https://blog.dabaz.me' },
    { name: 'Vibes', href: 'https://vibes.dabaz.me' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

const today = new Date();

export default function Footer() {
  return (
    <footer className="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-4 px-4">
        <p className="text-gray-500 text-xs">
          * Turbopack is built on a new incremental architecture for the fastest possible development experience. On large applications, it shows updates 10x faster than Vite and 700x faster than Webpack. On even larger applications, the difference is greater—often 20x faster than Vite.
        </p>
      </div>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-10 lg:px-8 border-t">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4 xl:col-span-1">
            <div className="flex space-x-2">
              <img
                className="h-8"
                src="/dabwave-logo.svg"
                alt="DabWave"
              />
              <h4 className="text-lg font-medium text-gray-400 mt-0.5">
                DabWave
              </h4>
            </div>
            <p className="text-gray-500 text-base">
              Making the world a better place through using code to solve real-life problem.
            </p>
            <div className="flex space-x-6">
              <a href="https://twitter.com/dabwave" className="text-gray-400 hover:text-gray-500 transition">
                <span className="sr-only">Twitter</span>
                <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-md font-medium text-gray-400">Intro</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.introduction.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-md text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-md font-medium text-gray-400">Contact</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-md text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-md font-medium text-gray-400">Company</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-md text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-md font-medium text-gray-400">Legal</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-md text-gray-500 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">&copy; {today.getFullYear()} DabWave LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}