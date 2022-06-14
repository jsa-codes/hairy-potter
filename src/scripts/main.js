// Imports go first
import { makePottery } from './PotteryWheel.js';
import { firePottery } from './Kiln.js';
import { toSellOrNotToSell } from './PotteryCatalog.js';
import { usePottery } from './PotteryCatalog.js';
import { PotteryList } from './PotteryList.js';

// Make 5 pieces of pottery at the wheel
const mug = makePottery('Mug', 12, 8);
const bowl = makePottery('Bowl', 214, 24);
const cup = makePottery('Cup', 5, 7);
const saucer = makePottery('Saucer', 6, 2);
const plate = makePottery('Plate', 18, 4);

console.log('Making the pottery: ', mug, bowl, cup, saucer, plate);

// Fire each piece of pottery in the kiln AND check to see if it is cracked
const firedMug = firePottery(mug, 2100);
const firedBowl = firePottery(bowl, 2100);
const firedCup = firePottery(cup, 2204);
const firedSaucer = firePottery(saucer, 2199);
const firedPlate = firePottery(plate, 2198);

console.log(firedMug, firedBowl, firedCup, firedSaucer, firedPlate);

// Determine which ones should be sold, and their price

// mug
toSellOrNotToSell(firedMug);

// bowl
toSellOrNotToSell(firedBowl);

// cup
toSellOrNotToSell(firedCup);

// saucer
toSellOrNotToSell(firedSaucer);

// plate
toSellOrNotToSell(firedPlate);

console.log('See which pottery should be sold: ', usePottery());
console.log('Output of pottery to the browser: ', PotteryList());

// Invoke the component function that renders the HTML list
const parentHTMLElement = document.querySelector('.potteryList');
parentHTMLElement.innerHTML = PotteryList(usePottery());
