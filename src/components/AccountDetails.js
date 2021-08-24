import DetailBox from "./DetailBox";
const AccountDetails = () => {
  return (
    <div className="px-2 my-2 rounded bg-gray-200 dark:bg-gray-700 text-lg">
      <div className="border-b-2 border-gray-300 dark:border-gray-800">
        <h1 className="dark:text-gray-50 text-gray-800 font-bold py-2">
          Minecraft Profile
        </h1>
      </div>
      <DetailBox
        title={"UUID"}
        content={"7fd69f79-ca95-45f7-a4bd-13db478bc762"}
      />
      <DetailBox
        title={"S. UUID"}
        content={"7fd69f79ca9545f7a4bd13db478bc762"}
      />
      <DetailBox title={"Link"} link={"https://uuidmc.com/profile/NotClay"} />
    </div>
  );
};

export default AccountDetails;
