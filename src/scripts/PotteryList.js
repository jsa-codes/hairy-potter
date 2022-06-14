// Import the usePottery function to gain access to the copy of the array it exported
import { usePottery } from './PotteryCatalog.js';

// Create a function that outputs html to the browser
export const PotteryList = () => {
  // Set variable = empty string
  let htmlString = '';

  // Iterate the pottery from the usePottery function
  // Each time we iterate through the array of pottery we inject the html into the empty string using string interpolation and placeholder expression
  for (const pottery of usePottery()) {
    htmlString += `<section class="pottery" id="pottery--${pottery.id}">
        <h2 class="pottery__shape">${pottery.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
        </div>
        <div class="pottery__price">
            Price is $${pottery.price}
        </div>
        </section>`;
  }

  return htmlString;
};
