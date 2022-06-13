let id = 1;

export const makePottery = (shape, weight, height) => {
  const pottery = {
    shape: shape,
    weight: weight,
    height: height,
    id: id,
  };
  id++;
  return pottery;
};
