/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  let winningPairs = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  let movesA = new Set();
  let movesB = new Set();

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    let moveString = move.toString();
    console.log(moveString);
    if (i % 2 === 0) {
      movesA.add(moveString);
    } else {
      movesB.add(moveString);
    }
  }

  const checkWin = (playerMoves) => {
    for (let pair of winningPairs) {
      //for winning pair, checks to see if all the moves are in playerMoves
      if (pair.every((move) => playerMoves.has(move.toString()))) {
        return true;
      }
    }
    return false;
  };

  if (checkWin(movesA)) {
    return 'A';
  }
  if (checkWin(movesB)) {
    return 'B';
  }

  return moves.length === 9 ? 'Draw' : 'Pending';
};
