let primaryKey = 1

// Define and export a function named makePottery
// STEP 1) This function MUST accept the following values as input
export const makePottery = (shape, weight, height) => {
    let potteryObj = {
      shape: shape,
      weight: weight,
      height: height,
      id: primaryKey++
    }
  // This function must return an object with the following properties on it.
  // -shape, -weight, -height, -id
  return potteryObj
}

