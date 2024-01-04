// you are given number n
// do this until n === 1;
// if odd: 3*n+1
// if even: n/2

const reduceUntil1 = (input, step = 0) => {
  if (input <= 0) return false;
  if (input === 1) return step;
  if (input % 2 === 1) {
    input = 3 * input + 1;
    step++;
  } else {
    input = input / 2;
    step++;
  }
  console.log(input);
  return reduceUntil1(input, step);
};

const result = reduceUntil1(10);
console.log(result);
