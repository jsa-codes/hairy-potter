// DO NOT EXPORT THIS ARRAY
const potteryToSell = [];

export const toSellOrNotToSell = (pottery) => {
  // IF weight of firedPottery is >= 6 then add "price" property = 40

  if (pottery.cracked) {
    return pottery;
  }

  if (pottery.weight >= 6) {
    pottery.price = 40;
  } else if (pottery.weight < 6) {
    pottery.price = 20;
  }

  potteryToSell.push(pottery);

  return pottery;
};

// IF the pottery is NOT cracked PUSH the pottery to potteryToSell array

export const usePottery = () => {
  return potteryToSell.map((pottery) => ({ ...pottery }));
};
