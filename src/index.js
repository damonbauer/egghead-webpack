import getRgb from 'color/getRgb';
import rgbToHex from 'color/rgbToHex';

import './index.scss';

function getHex(opts, inputs) {
  const rgb = getRgb(opts, inputs);
  return rgbToHex(rgb);
}

const content = document.getElementById('content');

let i = 0;

while (i<5) {
  const color = getHex();
  const markup = `
    <div class="card" style="background-color: ${color}">
      <strong>${color}</strong>
    </div>
  `;
  content.innerHTML += markup;
  i++;
}
