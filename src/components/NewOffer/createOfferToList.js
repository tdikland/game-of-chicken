export const createOfferToList = (players) => {
  const offerToList = [];
  Object.keys(players).forEach((key) => {
    const offerTo = {
      key: players[key].displayName,
      text: players[key].displayName,
      value: key,
    };
    offerToList.push(offerTo);
  });
  return offerToList;
};
