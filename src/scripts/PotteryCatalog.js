import { firePottery } from './Kiln.js';
let firedPottery = firePottery();

const potteryToSell = [];

export const toSellOrNotToSell = (firedPottery) => {
  // IF weight of pottery is >= 6 then add "price" property = 40
  if (firedPottery.weight >= 6) {
    firedPottery.price = 40;
  }
  // IF weight of pottery is < 6 then add "price" property = 20
  if (pottery.weight < 6) {
    firedPottery.price = 20;
  }
  // IF the pottery is NOT cracked PUSH the pottery to potteryToSell array
  if (firedPottery.cracked != true) {
    potteryToSell.push(pottery);
  }
  return potteryToSell;
};

export const usePottery = () => {
  return potteryToSell.map((pottery) => ({ ...pottery }));
};
