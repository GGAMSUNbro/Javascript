export const makeSeats = () =>
  Array(6 * 16)
    .fill()
    .map((v, i) => ({
      col: makeColumn(i),
      row: makeRow(i),
      state: makeState(i),
    }));

const makeColumn = (x) => [..."ABCDEF"][x % 6];
const makeRow = (x) => parseInt(x / 6) + 1;
const makeState = (i) => {
  const x = parseInt(i / 6);
  const stateMap = {
    red: [0, 14],
    blue: [1, 2, 3, 4],
    green: [5, 6, 7, 8, 9, 10, 11, 12, 13],
    pink: [15, 16],
  };
  const color = Object.keys(stateMap).find((v) => stateMap[v].includes(x));
  return color;
};
