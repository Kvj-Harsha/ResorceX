
import React from 'react';

function Header() {
  return (
    <div>
      <header className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

                    {/* logo code */}
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                      {/* Increase logo size twice */}
                      <a className="block" href="#">
                        <img
                          src="/logo.png"
                          alt="Logo"
                          style={{ height: '80px', width: '300px' }}
                          className='mt-10 flex'
                        />
                      </a>
                    </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/about"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="https://github.com/Kvj-Harsha/Resorcex-2.0"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-primary"
                    href="/welcome"
                  > 
                    Login
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
