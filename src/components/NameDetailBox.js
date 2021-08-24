import { useClipboard } from "use-clipboard-copy";
import { useCallback } from "react";
const DetailBox = ({ name, date, num }) => {
  const clipboard = useClipboard({
    copiedTimeout: 1200, // timeout duration in milliseconds
  });
  const handleCopy = useCallback(() => {
    if (typeof name !== "undefined") {
      clipboard.copy(name);
    } else {
      clipboard.copy(num);
    }
    // programmatically copying a value
  }, [clipboard, name, num]);
  return (
    <div className="my-2 flex dark:text-gray-50 text-gray-800">
      <div className="pr-2">
        <h1>{num}</h1>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <h1 className="font-bold">{name}</h1>
          <button onClick={handleCopy} className="cursor-pointer">
            {clipboard.copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div>
          <h1>{date}</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
