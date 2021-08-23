import { useState } from "react";
import Loader from "react-loader-spinner";

const Input = () => {
  const [userID, setUserID] = useState("");
  //const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(false);
  return (
    <form
      className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"
      onSubmit={(e) => {
        e.preventDefault();
        if (userID.length > 0) {
          // Only submit if is not already loading
          if (!isLoading) {
            //setSearch(userID);
            console.log(userID);
          }
          // Toggle the spinner / cancel loading
          setLoading(!isLoading);
        }
      }}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0 flex">
          <input
            className="w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none rounded-l"
            type="text"
            value={userID}
            onChange={(e) => {
              let val = e.target.value;
              val = val.replace(/\s/g, '');
              setUserID(val);
              setLoading(false);
            }}
            placeholder="IGN / UUID / Server"
          />
          {userID.length > 0 && (
            <button
              onClick={(e) => {
                setLoading(false);
                setUserID("");
              }}
              type="reset"
              className="w-15 py-3 px-4 mb-3 bg-red-200 hover:bg-red-400"
            >
              <i className="fa fa-times-circle" />
            </button>
          )}
          <button
            type="submit"
            className="w-20 py-3 px-4 mb-3 bg-gray-200 hover:bg-green-400 rounded-r"
          >
            {isLoading ? (
              <Loader type="Grid" color="#000000" height={20} width={40} />
            ) : (
              <i className="fa fa-search" />
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Input;
