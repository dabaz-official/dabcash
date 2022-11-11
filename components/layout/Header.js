import { indexNavigations } from "../data/index-navigations";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  return (
    <header className="py-5 z-50 sticky top-0 backdrop-blur-md bg-white/70">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <a aria-label="Home" href="/">
              <img 
                src="/logos/primary-logo-text.svg"
                alt="Primary Logo with Text"
                className="h-9 w-auto hidden md:block"
              />
              <img 
                src="/logos/primary-logo.svg"
                alt="Primary Logo"
                className="h-9 w-auto block md:hidden"
              />
            </a>
            <div className="hidden md:flex md:gap-x-6">
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
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition duration-200" href="/login">
                Log in
              </a>
            </div>
            <a className="group inline-flex items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-700 active:text-blue-100 focus-visible:outline-blue-600 transition duration-200" href="/register">
              <span>
                Get started{" "}
                <span className="hidden lg:inline">today</span>
              </span>
            </a>
            <div className="-mr-1 md:hidden">
              <DropdownMenu />
            </div>
          </div>
          {/* {user ? (
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <div className="hidden md:block">
                <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition duration-200" href="/api/auth/logout">
                  Log out
                </a>
              </div>
              <a className="group inline-flex items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-700 active:text-blue-100 focus-visible:outline-blue-600 transition duration-200" href="/dashboard/overview">
                My dashboard
              </a>
              <div className="-mr-1 md:hidden">
                <DropdownMenu />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <div className="hidden md:block">
                <a className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition duration-200" href="/login">
                  Log in
                </a>
              </div>
              <a className="group inline-flex items-center justify-center rounded-xl py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-700 active:text-blue-100 focus-visible:outline-blue-600 transition duration-200" href="/register">
                <span>
                  Get started{" "}
                  <span className="hidden lg:inline">today</span>
                </span>
              </a>
              <div className="-mr-1 md:hidden">
                <DropdownMenu />
              </div>
            </div>
          )} */}
        </nav>
      </div>
    </header>
  );
};

export default Header;