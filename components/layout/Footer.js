import { indexNavigations } from "../data/index-navigations";

const today = new Date();

export default function Footer() {
  return (
    <footer className="bg-slate-50 z-10" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <img 
            src="/logos/primary-logo-text.svg"
            alt="Primary Logo with Text"
            className="mx-auto h-10 w-auto"
          />
          <nav className="mt-10 text-sm">
            <div className="-my-1 flex justify-center gap-x-6">
              {indexNavigations.link.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
          <nav className="mt-4 text-sm">
            <div className="-my-1 flex justify-center gap-x-6">
              {indexNavigations.support.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <a href="https://twitter.com/dabcashy" className="group">
              <span className="sr-only">Twitter</span>
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700 transition duration-200" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            &copy; {today.getFullYear()} DabCashy, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}