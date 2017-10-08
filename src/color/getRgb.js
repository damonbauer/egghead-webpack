import hsvToRgb from './hsvToRgb';

const goldenRatio = 0.618033988749895;

export default function getRgb(inputs = {}) {
  let { hue, saturation, value } = inputs;
  if (!hue) hue = Math.random();
  hue += goldenRatio;
  hue %= 1;

  if (typeof saturation !== 'number') saturation = 0.5;
  if (typeof value !== 'number') value = 0.95;

  return hsvToRgb(hue, saturation, value);
}
