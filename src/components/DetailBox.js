import { useClipboard } from "use-clipboard-copy";
import { useCallback } from "react";
const DetailBox = ({ title, content, link }) => {
  const clipboard = useClipboard({
    copiedTimeout: 1200, // timeout duration in milliseconds
  });
  const handleCopy = useCallback(() => {
    clipboard.copy(content);

    // programmatically copying a value
  }, [clipboard, content]);
  return (
    <div className="my-2 flex flex-col dark:text-gray-50 text-gray-800">
      <div className="flex justify-between">
        <h1 className="font-bold">{title}</h1>
        <button
          onClick={handleCopy}
          className={!clipboard.copied ? "cursor-pointer" : "cursor-default"}
        >
          {clipboard.copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div>
        <p ref={clipboard.target} value={content}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default DetailBox;
