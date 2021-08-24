import NameDetailBox from "./NameDetailBox";
import dayjs from "dayjs";
const NameHistory = () => {
  let date = Date.now();
  let day = dayjs(date).format("MM-DD-YYYY");
  return (
    <div className="px-3 my-2 pb-2 mb-4 rounded bg-gray-200 dark:bg-gray-700 text-lg">
      <div className="border-b-2 border-gray-300 dark:border-gray-600">
        <h1 className="dark:text-gray-50 text-gray-800 font-bold py-2">
          Name History
        </h1>
      </div>
      <NameDetailBox name={"NotClay"} date={day} num={"2."} />
      <NameDetailBox name={"ClayIsBae"} date={day} num={"1."} />
      <NameDetailBox name={"cloneman88"} num="F" />
    </div>
  );
};

export default NameHistory;
