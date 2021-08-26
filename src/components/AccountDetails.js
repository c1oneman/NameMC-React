import DetailBox from "./DetailBox";
const AccountDetails = ({ ign, uuid }) => {
  return (
    <div className="px-3 my-2 rounded bg-gray-200 dark:bg-gray-700 text-lg">
      <div className="border-b-2 border-gray-300 dark:border-gray-600">
        <h1 className="dark:text-gray-50 text-gray-800 font-bold py-2">
          Minecraft Profile
        </h1>
      </div>

      <DetailBox title={"UUID"} content={`${uuid}`} />
      <DetailBox title={"Link"} content={`uuidmc.com/u/${ign}`} />
    </div>
  );
};

export default AccountDetails;
