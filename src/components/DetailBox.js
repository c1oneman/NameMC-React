import { useClipboard } from "use-clipboard-copy";
import { useCallback } from "react";

const DetailBox = ({ title, content, link }) => {
  const clipboard = useClipboard({
    copiedTimeout: 1200, // timeout duration in milliseconds
  });
  const handleCopy = useCallback(() => {
    if (typeof link !== "undefined") {
      clipboard.copy(link);
    } else {
      clipboard.copy(content);
    }
    // programmatically copying a value
  }, [clipboard, content, link]);
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
        <a
          href={("https://", link)}
          className="hover:text-gray-700 dark:hover:text-gray-300"
          target="_blank"
          alt="Share link"
          rel="noreferrer"
        >
          {link}
        </a>
        <p ref={clipboard.target} value={content}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default DetailBox;
