// DO NOT EXPORT THIS ARRAY
const potteryToSell = [];

// Create a function that takes (1) input as an argument (pottery Object)
export const toSellOrNotToSell = (pottery) => {
  // IF pottery is cracked then return that piece so that it doesn't go into the "potteryToSell" array
  if (pottery.cracked) {
    return pottery;
  }

  // IF weight of firedPottery is >= 6 then add "price" property and set value = 40
  if (pottery.weight >= 6) {
    pottery.price = 40;
    // IF weight of firedPottery is < 6 then add "price" property and set value = 20
  } else if (pottery.weight < 6) {
    pottery.price = 20;
  }
  // PUSH pottery that is not cracked
  potteryToSell.push(pottery);

  return pottery;
};

// Create function that exports a COPY of the potteryToSell array
export const usePottery = () => {
  return potteryToSell.map((pottery) => ({ ...pottery }));
};
