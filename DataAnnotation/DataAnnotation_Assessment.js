const fs = require('fs');
const filePath = './input.txt';

fs.readFile(filePath, 'utf-8', async (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  data = data.split('\n').map((line) => line.split(' '));

  let cache = {};
  for (let i = 0; i < data.length; i += 1) {
    cache[Number(data[i][0])] = data[i][1];
  }
  let answer = '';
  let j = 1;
  for (let i = 1; i < Object.keys(cache).length; i += ++j) {
    answer += `${cache[i]} `;
  }
  console.log(answer);
});
