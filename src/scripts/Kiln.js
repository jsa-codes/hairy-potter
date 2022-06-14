export const firePottery = (pottery, temp) => {
  // Add a new property of "fired" = true
  pottery.fired = true;

  // Function must add a New Property of "cracked"
  // IF the temp of the kiln is ABOVE 2200 degrees then the "cracked" property = true
  // IF the temp of the kiln is AT OR BELOW 2200 then "cracked" = false

  if (temp > 2200) {
    pottery.cracked = true;
  } else if (temp <= 2200) {
    pottery.cracked = false;
  }
  return pottery;
};
