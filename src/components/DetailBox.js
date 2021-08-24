const DetailBox = ({ title, content, link }) => {
  return (
    <div className="my-2 flex flex-col dark:text-gray-50 text-gray-800">
      <div className="flex justify-between">
        <h1 className="font-bold">{title}</h1>
        <h1 className="cursor-pointer">Copy</h1>
      </div>
      <div>
        <a
          href={link}
          className="hover:text-gray-700 dark:hover:text-gray-300"
          target="_blank"
          alt="Share link"
          rel="noreferrer"
        >
          {link}
        </a>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DetailBox;
