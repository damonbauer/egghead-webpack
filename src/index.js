const goldenRatio = 0.618033988749895;
const hexWidth = 2;

function padHex(str) {
  if (str.length > hexWidth) return str;
  return new Array(hexWidth - str.length + 1).join('0') + str;
}

function rgbToHex(rgb) {
  const parts = rgb.map(val => padHex(val.toString(16))).join('');

  return `#${parts}`;
}

function hsvToRgb(h, s, v) {
  var hi = Math.floor(h * 6);
  var f = h * 6 - hi;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var r = 255;
  var g = 255;
  var b = 255;

  switch (hi) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
  }

  return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
}

function getRgb(inputs = {}) {
  let { hue, saturation, value } = inputs;
  if (!hue) hue = Math.random();
  hue += goldenRatio;
  hue %= 1;

  if (typeof saturation !== 'number') saturation = 0.5;
  if (typeof value !== 'number') value = 0.95;

  return hsvToRgb(hue, saturation, value);
}

function getHex(opts, inputs) {
  const rgb = getRgb(opts, inputs);
  return rgbToHex(rgb);
}

document.getElementById('content').textContent = getHex();
