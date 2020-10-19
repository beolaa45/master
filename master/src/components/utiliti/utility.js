export const toSlug = (title) => {
  return title.toLowerCase().split(" ").join("-");
};

export const toLowerCase = (str) => {
  return str.toLowerCase();
};

export const toFix = (number) => {
  return "$" + parseFloat(number).toFixed(2);
};
