import padHex from './padHex';

export default function rgbToHex(rgb) {
  const parts = rgb.map(val => padHex(val.toString(16))).join('');

  return `#${parts}`;
};
