// Define and export a function "firePottery"
// This function must accept the following values, in the following order:
//  INPUT 1) An object representing a piece of property that was made at the wheel in the makePottery function
//  INPUT 2) A number specifying the firing temperature of the kiln
export const firePottery = (potteryObj, firingTemperature) => {
    potteryObj.fired = true

    if (firingTemperature > 2200) {
      potteryObj.cracked = true
    }

    else if (firingTemperature <= 2200){
      potteryObj.cracked = false
    }
    return potteryObj
}