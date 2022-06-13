// Imports go first
import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';
import { toSellOrNotToSell } from './PotteryCatalog.js';

// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug', 17, 8, 1);
console.log(mug);

let bowl = makePottery('bowl', 27, 5, 1);
console.log(bowl);

let cup = makePottery('cup', 15, 7, 1);
console.log(cup);

let saucer = makePottery('saucer', 12, 1, 1);
console.log(saucer);

let plate = makePottery('plate', 18, 2, 1);
console.log(plate);

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2300);
console.log(firedMug);

let firedBowl = firePottery(bowl, 2100);
console.log(firedBowl);

let firedCup = firePottery(cup, 2204);
console.log(firedCup);

// saucer
let firedSaucer = firePottery(saucer, 2200);
console.log(firedSaucer);

// plate
let firedPlate = firePottery(plate, 2198);
console.log(firedPlate);

// Determine which ones should be sold, and their price

// mug
let mugBeingSold = toSellOrNotToSell(mug);
console.log(mugBeingSold);

// bowl
let bowlBeingSold = toSellOrNotToSell(bowl);
console.log(bowlBeingSold);

// cup
let cupBeingSold = toSellOrNotToSell(cup);
console.log(cupBeingSold);

// saucer
let saucerBeingSold = toSellOrNotToSell(saucer);
console.log(saucerBeingSold);

// plate
let plateBeingSold = toSellOrNotToSell(plate);
console.log(plateBeingSold);

// Invoke the component function that renders the HTML list
