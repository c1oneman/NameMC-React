import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center bg-gray-700 rounded-md px-2">
            <svg
              viewBox="-8 -8 16 16"
              shapeRendering="crispEdges"
              className="align-top"
              width="30"
              height="30"
              fill="white"
            >
              <path d="M-5-5L+3-5L+3-3L+5-3L+5+5L+3+5L+3-3L-3-3L-3+5L-5+5"></path>
            </svg>
            <span className="ml-2 text-white" translate="no">
              NameMC React*
            </span>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <Link
                to="/names"
                className=" text-gray-700 dark:text-white hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium dark:hover:bg-gray-700"
                aria-current="page"
              >
                Names
              </Link>
              <Link
                to="/skins"
                className="bg-gray-400 dark:bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page"
              >
                Skins
              </Link>
              <Link
                to="/servers"
                className=" text-gray-700 dark:text-white hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium dark:hover:bg-gray-700"
                aria-current="page"
              >
                Servers
              </Link>
              <Link
                to="/capes"
                className=" text-gray-700 dark:text-white hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium dark:hover:bg-gray-700"
                aria-current="page"
              >
                Capes
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <a
            href="https://namemc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 light:bg-gray-200 dark:text-white hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium dark:hover:bg-gray-700"
          >
            View NameMC.com
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
