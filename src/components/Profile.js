import PlayerModel from "./PlayerModel";
const Profile = () => {
  const ign = "NotClay";
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
      <div className="flex flex-wrap -mx-3 mb-6 ">
        <div className="w-full mx-3 mb-6 md:mb-0 flex items-center justify-center sm:justify-start border-b-2 border-gray-800 dark:border-gray-300 ">
          <img
            alt={`${ign}'s head`}
            src={`https://mc-heads.net/avatar/${ign}/100`}
            className="w-10 h-10 align-middle m-2"
            width="100"
            height="100"
          />
          <h1 className="text-5xl py-4 dark:text-gray-200">{ign}</h1>
        </div>
        <div className="flex flex-wrap w-full justify-center sm:justify-start">
          <div className="flex flex-col px-5">
            <PlayerModel user={ign} />
          </div>
          <div className="flex flex-col w-full sm:w-2/3 px-6">
            <h1>Text Text blah</h1>
            {/* <ProfileInfo/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
