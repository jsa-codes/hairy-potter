import { makePottery } from "./PotteryWheel.js"

// Check the makePottery function
const bowl = makePottery('Bowl', 2, 5)
console.log(bowl);

const cup = makePottery('Cup', 4, 7);
console.log(cup);

const plate = makePottery('Plate', 7, 5);
console.log(plate);

const soapDish = makePottery('Soap Dish', 3, 4);
console.log(soapDish);

const mug = makePottery('Mug', 5, 5);
console.log(mug);

// Check the firePottery function
// The arguments are: The Result of the previous function + the firing temperature.
const bowlFired = firePottery(bowl, 2200)
console.log(bowlFired);

const cupFired = firePottery(cup, 2230)
console.log(cupFired);

const plateFired = firePottery(plate, 2224)
console.log(plateFired)

const soapDishFired = firePottery(soapDish, 2190)
console.log(soapDishFired)

const mugFired = firePottery(mug, 2200)
console.log(mugFired)
        
        
// Checking to sellOrNotToSell
toSellOrNotToSell(bowlFired, cupFired, plateFired, soapDishFired, mugFired)

// Checking PotteryList
PotteryList(pottery)


















