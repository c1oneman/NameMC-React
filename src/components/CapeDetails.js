const CapeDetails = ({ capes }) => {
  console.log("CapeDetails", capes);
  return (
    <div className="mt-2 p-2 rounded bg-gray-200 dark:bg-gray-700 text-lg">
      <div className="border-b-2 border-gray-300 dark:border-gray-600">
        <h1 className="dark:text-gray-50 text-gray-800 font-bold py-2">
          Capes
        </h1>
      </div>
      <div className="flex items-center">
        {capes.length &&
          capes.map((cape) => (
            <img
              className="rounded"
              src={cape.frontImageUrl}
              alt={cape.name}
              key={cape.name}
            />
          ))}
      </div>
    </div>
  );
};

export default CapeDetails;
