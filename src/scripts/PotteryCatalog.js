/* 
STEP1) Define a variable with the value of an empty array
    - This array will store the pottery to be sold
    - DO NOT export this array
STEP 2) Define and export a function named "toSellOrNotToSell"
    - It must accept a pottery object as its input
STEP 3) 
    IF the weight of the pottery is >= 6
      - ADD a price property with a value of 40
    IF the weight of the pottery is < 6 then
      - ADD a price property with value of 20
    IF the pottery is NOT cracked
      - ADD The object to the array of items to be sold  
STEP 4) Define and export a function named usePottery that RETURNS a COPY of the array items to be sold
*/

const potteryToSell = [];

export const toSellOrNotToSell = (potteryObj) => {
    // IF pottery object is cracked
    // Return potteryObj
  if (potteryObj.cracked === true) {
    return potteryObj
  }
    // IF the weight of the pottery is >= 6
    //    - ADD a price property with a value of 40
  if (potteryObj.weight >= 6) {
    potteryObj.price = 40;
    // IF the weight of the pottery is < 6 then
    //   - ADD a price property with value of 20
  } else if (potteryObj.weight < 6) {
    potteryObj.price = 20;
  }
  // IF potteryObj is NOT cracked
  // PUSH the pottery to the array of items to be sold
  if (potteryObj.cracked === false) {
    potteryToSell.push(potteryObj)
  }
 
  return potteryObj
};

export const usePottery = () => {
  return potteryToSell.map(pottery => ({...pottery}))
}