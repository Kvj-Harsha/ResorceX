import React from 'react';

function Upgrade() {
  return (
    <main>
      <br />
      <p className='text-center text-5xl bg-gradient-to-r from-blue-600 via-pink-500 to-indigo-400 drop-shadow-2xl text-transparent bg-clip-text'>
        <strong>
          Welcome to Resorcex!
        </strong> 
      </p>
      <br/>
      <br />
      <p className='text-2xl text-gradient'>
        Check out the Latest and Trending files!
      </p>
      <br />

      <article className="flex bg-white transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25">
        <div className="rotate-180 p-6 [writing-mode:_vertical-lr] border">
          <time
            dateTime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
          >
            <span>2024</span>
            <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
            <span>Mar 10</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src="calculus.gif"
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div
            className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10"
          >
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                Find all math Assignments
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
              Access our latest math assignments effortlessly! Dive in to explore curated exercises and problems covering algebra to calculus. Conquer math with confidence!
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href="http://localhost:3000/f/dmh3uB"
              className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
            >
              Download
            </a>
          </div>
        </div>
      </article>

      <br />

      <article className="flex bg-white transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25">
        <div className="rotate-180 p-6 [writing-mode:_vertical-lr] border">
          <time
            dateTime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
          >
            <span>2024</span>
            <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
            <span>Oct 10</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src="code.gif"
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div
            className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10"
          >
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                ITP SEM-1 COMPLETE CODES
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 dark:text-gray-200">
              Access the complete itp codes in sem 1, all zipped in one file!
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href="#"
              className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
            >
              Download
            </a>
          </div>
        </div>
      </article>

    </main>
  );
}

export default Upgrade;
