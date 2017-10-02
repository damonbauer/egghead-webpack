import getRgb from './color/getRgb';
import rgbToHex from './color/rgbToHex';

function getHex(opts, inputs) {
  const rgb = getRgb(opts, inputs);
  return rgbToHex(rgb);
}

document.getElementById('content').textContent = getHex();
