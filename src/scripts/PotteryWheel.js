let primary = 1;

export const makePottery = (shape, weight, height) => {
  //   let pottery = {};
  //   (pottery.shape = shape),
  //     (pottery.weight = weight),
  //     (pottery.height = height),
  //     (pottery.id = primary++);
  //   return pottery

  const pottery = {
    shape: shape,
    weight: weight,
    height: height,
    id: primary++,
  };
  return pottery;
};
