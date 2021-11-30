const _ = require("ramda");
// [[], [], [], [], [],]
// =>
// [[], [], [], [], [],]
function bump(matrix) {
  const resultMatrix = _.clone(matrix);

  matrix.forEach((row, r) => {
    row.forEach((cell, c) => {
      const newState = nextState(r, c, matrix);
      resultMatrix[r][c] = newState;
    });
  });

  return resultMatrix;
}

function print(matrix) {
  let output = "";
  matrix.forEach((row, r) => {
    row.forEach((cell, c) => {
      output = output + matrix[r][c];
    });
    output = output + "\n";
  });
  console.log(output);
}

function currentState(row, col, matrix) {
  const rowCnt = matrix.length;
  const colCnt = matrix[0].length;

  if (row < 0 || col < 0 || row >= rowCnt || col >= colCnt) {
    return 0;
  }
  return matrix[row][col];
}

function score(row, col, matrix) {
  // return number of living cells
  const offsets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  return offsets.reduce((acc, offset) => {
    r = row + offset[0];
    c = col + offset[1];
    return acc + currentState(r, c, matrix);
  }, 0);
}

function nextState(row, col, matrix) {
  const myState = currentState(row, col, matrix);
  const neighborScores = score(row, col, matrix);

  if (myState === 1) {
    // living cell
    if (neighborScores < 2 || neighborScores > 3) {
      return 0;
    } else {
      return 1;
    }
  } else {
    // dead cell
    if (neighborScores === 3) {
      return 1;
    } else {
      return 0;
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo(matrix) {
  while (1) {
    console.clear();
    matrix = bump(matrix);
    graph = _.map(_.map((x) => (x === 1 ? "\033[40;32m▢" : " ")))(bump(matrix));
    print(graph);
    await sleep(1000);
  }
}

demo([
  [
    0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1,
  ],
  [
    0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1,
  ],
  [
    0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1,
  ],
  [
    0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1,
  ],
  [
    0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1,
  ],
  [
    0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1,
  ],
  [
    0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1,
  ],
  [
    0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1,
  ],
  [
    0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1,
  ],
  [
    0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1,
  ],
  [
    0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0,
    0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1,
  ],
]);

module.exports = { bump, score, nextState, currentState };
