import { firePottery } from './Kiln.js';

const firedPottery = firePottery();
// DO NOT EXPORT THIS ARRAY
const potteryToSell = [];

export const toSellOrNotToSell = (pottery) => {
  // IF weight of pottery is >= 6 then add "price" property = 40

  if (firedPottery.weight >= 6) {
    firedPottery.price = 40;
    // IF weight of pottery is < 6 then add "price" property = 20
  }
  if (firedPottery.weight < 6) {
    firedPottery.price = 20;
  }
  if (firedPottery.cracked === false) {
    potteryToSell.push(pottery);
  }

  return potteryToSell;
};
// IF the pottery is NOT cracked PUSH the pottery to potteryToSell array

export const usePottery = () => {
  return potteryToSell.map((pottery) => ({ ...pottery }));
};

// const sellingPottery = toSellOrNotToSell();
// console.log(sellingPottery);
// console.log(potteryToSell);
