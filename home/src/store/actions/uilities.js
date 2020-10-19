export const immutableObject = (oldObject, newPropety) => {
  return {
    ...oldObject,
    ...newPropety,
  };
};

export const storage = (cart) => {
  cart && localStorage.setItem("cart", JSON.stringify(cart));
};
