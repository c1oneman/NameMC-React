import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
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
              <path d="M-2+3L+2+3L+2-3L+4-3L+4+5L-2+5L-2+3L-4+3L-4-3L-2-3"></path>
            </svg>
            <span className="text-white" translate="no">
              uuidMC
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
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden sm:block">
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
