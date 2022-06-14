// Imports go first
import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';
import { toSellOrNotToSell } from './PotteryCatalog.js';
import { PotteryList } from './PotteryList.js';

// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug', 12, 8);
console.log(`Making the mug`, mug);

let bowl = makePottery('bowl', 214, 24);
console.log(`Making the bowl`, bowl);

let cup = makePottery('cup', 5, 7);
console.log(`Making the cup`, cup);

let saucer = makePottery('saucer', 6, 1);
console.log(`Making the saucer`, saucer);

let plate = makePottery('plate', 18, 2);
console.log(`Making the plate`, plate);

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2100);
console.log(
  `Checking to see if the mug was fired at too high of a temp, and if it is cracked `,
  firedMug
);

let firedBowl = firePottery(bowl, 2100);
console.log(
  `Checking to see if the bowl was fired at too high of a temp, and if it is cracked `,
  firedBowl
);

let firedCup = firePottery(cup, 2204);
console.log(
  `Checking to see if the cup was fired at too high of a temp, and if it is cracked `,
  firedCup
);

// saucer
let firedSaucer = firePottery(saucer, 2199);
console.log(
  `Checking to see if the saucer was fired at too high of a temp, and if it is cracked `,
  firedSaucer
);

// plate
let firedPlate = firePottery(plate, 2198);
console.log(
  `Checking to see if the plate was fired at too high of a temp, and if it is cracked `,
  firedPlate
);

// // Determine which ones should be sold, and their price

// // // mug
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

// // // Invoke the component function that renders the HTML list
let potteryListed = PotteryList();
console.log(potteryListed);

const parentHTMLElement = document.querySelector('.potteryList');
parentHTMLElement.innerHTML = PotteryList();
