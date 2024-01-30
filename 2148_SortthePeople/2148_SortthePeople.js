var sortPeople = function (names, heights) {
  if (!names || !heights || names.length !== heights.length) return false;

  let sortedNames = names.slice();
  for (let i = 0; i < heights.length; i++) {
    let maxIndex = heights.indexOf(Math.max(...heights));
    sortedNames[i] = names[maxIndex];
    heights[maxIndex] = -1; // Change original height to avoid reusing it
  }
  return sortedNames;
};

//Not the most effiecient method. first thoughts that came to mind
