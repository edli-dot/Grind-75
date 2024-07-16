/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  if (position.length == 1) return 1;
  let combined = position.map((pos, index) => ({
    position: pos,
    speed: speed[index],
  }));
  combined.sort((a, b) => {
    if (a.position === b.position) {
      return a.speed - b.speed;
    } else {
      return a.position - b.position;
    }
  });
  position = combined.map((item) => item.position);
  speed = combined.map((item) => item.speed);
  let time = Array(position.length).fill(0);
  let count = position.length;
  for (let i = 0; i < position.length; i++) {
    const firstCarTime = (target - position[i]) / speed[i];
    time[i] = firstCarTime;
  }
  for (let i = position.length - 1; i >= 0; i--) {
    if (time[i] >= time[i - 1]) {
      count--;
      time[i - 1] = time[i];
    }
  }
  return count;
};
