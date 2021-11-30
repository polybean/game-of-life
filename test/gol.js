const { bump, score, nextState, currentState } = require("../library.js");

const scoreSuite = [
  // {
  //   matrix: [
  //     [0, 0, 0],
  //     [0, 0, 0],
  //     [0, 0, 0],
  //   ],
  //   scoreSpec: [
  //     { coord: [1, 1], expected: 0 },
  //     { coord: [2, 1], expected: 0 },
  //     { coord: [7, 1], expected: 0 },
  //     { coord: [1, 8], expected: 0 },
  //     { coord: [-1, -2], expected: 0 },
  //     { coord: [0, 1], expected: 0 },
  //   ],
  //   currentStateSpec: [],
  //   nextStateSpec: [],
  // },
  {
    matrix: [
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 1],
    ],
    scoreSpec: [
      { coord: [1, 1], expected: 2 },
      { coord: [2, 1], expected: 1 },
      { coord: [7, 1], expected: 0 },
      { coord: [1, 8], expected: 0 },
      { coord: [-1, -2], expected: 0 },
      { coord: [0, 1], expected: 2 },
    ],
    currentStateSpec: [
      { coord: [0, 1], expected: 0 },
      { coord: [1, 1], expected: 1 },
      { coord: [-7, 1], expected: 0 },
      { coord: [0, -1], expected: 0 },
      { coord: [0, 6], expected: 0 },
    ],
    nextStateSpec: [
      { coord: [0, 1], expected: 0 },
      { coord: [1, 1], expected: 1 },
      { coord: [1, 2], expected: 0 },
      { coord: [2, 2], expected: 1 },
      { coord: [1, 1], expected: 1 },
      { coord: [-7, 1], expected: 0 },
      { coord: [0, -1], expected: 0 },
      { coord: [0, 6], expected: 0 },
    ],
  },
  // {
  //   matrix: [
  //     [0, 0, 0],
  //     [0, 0, 0],
  //     [0, 0, 0],
  //   ],
  //   spec: [
  //     { coord: [1, 1], expected: 0 },
  //     { coord: [2, 1], expected: 0 },
  //     { coord: [7, 1], expected: 0 },
  //     { coord: [1, 8], expected: 0 },
  //     { coord: [-1, -2], expected: 0 },
  //     { coord: [0, 1], expected: 0 },
  //   ],
  // },
];

scoreSuite.forEach((group) => {
  group.scoreSpec.forEach((testCase, i) => {
    QUnit.test(`score case ${i + 1}`, (assert) => {
      coord = testCase.coord;
      expected = testCase.expected;
      assert.equal(score(coord[0], coord[1], group.matrix), expected);
    });
  });

  group.currentStateSpec.forEach((testCase, i) => {
    QUnit.test(`currentState case ${i + 1}`, (assert) => {
      coord = testCase.coord;
      expected = testCase.expected;
      assert.equal(currentState(coord[0], coord[1], group.matrix), expected);
    });
  });

  group.nextStateSpec.forEach((testCase, i) => {
    QUnit.test(`nextState case ${i + 1}`, (assert) => {
      coord = testCase.coord;
      expected = testCase.expected;
      assert.equal(nextState(coord[0], coord[1], group.matrix), expected);
    });
  });
});
