export const getProfile = async (ign) => {
  const uuid = await getUUID(ign);
  const skin = await getSkinFromUUID(uuid);
  return { skin, uuid };
};

export const getUUID = async (ign) => {
  const url = `https://api.minetools.eu/uuid/${ign}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data.id;
};

const getSkinFromUUID = async (uuid) => {
  const url = `https://api.minetools.eu/skin/${uuid}`;
  const response = await fetch(url);
  const data = await response;
  return data.url;
};

export const getCapes = async (ign) => {
  const url = `https://api.capes.dev/load/${ign}`;
  const response = await fetch(url);
  const data = await response.json();
  const capes = [
    {
      name: "Optifine",
      url: data.optifine?.imageUrl ? data.optifine.imageUrl : null,
      frontImageUrl: data.optifine?.frontImageUrl
        ? data.optifine.imageUrls.still.front
        : null,
    },
    {
      name: "Mojang",
      url: data.minecraft?.imageUrl ? data.minecraft.imageUrl : null,
      frontImageUrl: data.minecraft?.frontImageUrl
        ? data.minecraft.imageUrls.still.front
        : null,
    },
  ];
  console.log(capes);
  return capes;
};
