// Create variable with initial value of 1 (this will be used to increment the id value as each piece of pottery is created)
let primary = 1;

// Create a function that takes (3) inputs as arguments - shape(string), weight(number), height(number)
export const makePottery = (shape, weight, height) => {
  //   let pottery = {};
  //   (pottery.shape = shape),
  //     (pottery.weight = weight),
  //     (pottery.height = height),
  //     (pottery.id = primary++);
  //   return pottery

  // Create pottery object with the following key/value pairs: (shape, weight, height, id)
  //REMEMBER: id will increment with each new piece of pottery
  const pottery = {
    shape: shape,
    weight: weight,
    height: height,
    id: primary++,
  };
  return pottery;
};
