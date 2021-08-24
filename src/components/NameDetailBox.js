const DetailBox = ({ name, date, num }) => {
  return (
    <div className="my-2 flex dark:text-gray-50 text-gray-800">
      <div className="pr-2">
        <h1>{num}</h1>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <h1 className="font-bold">{name}</h1>
          <h1 className="cursor-pointer">Copy</h1>
        </div>
        <div>
          <h1>{date}</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
