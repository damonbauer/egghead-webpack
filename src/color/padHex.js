const hexWidth = 2;

export default function padHex(str) {
  if (str.length > hexWidth) return str;
  return new Array(hexWidth - str.length + 1).join('0') + str;
};
