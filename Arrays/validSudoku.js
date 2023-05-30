/**
 * @param {character[][]} board
 * @return {boolean}
 */

// validate that every single row doesn't have duplicates
// validate that every single column doesn't have duplicates
// validate that every 3 * 3 boxes in a row doesn't have duplicates
// Example of sub-grid: board[0 - 2][0 - 2], board[3 - 5][3 - 5], board[6 - 8][6 - 8]
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    let filteredRow = row.filter((v) => v !== ".");
    let rowSet = new Set(row.filter((v) => v !== "."));
    if (rowSet.size < filteredRow.length) {
      return false;
    }

    let col = [];
    for (let j = 0; j < 9; j++) {
      col.push(board[j][i]);
    }
    let filteredCol = col.filter((v) => v !== ".");
    let colSet = new Set(col.filter((v) => v !== "."));

    if (colSet.size < filteredCol.length) {
      return false;
    }
  }

  for (let row = 0; row <= 6; row += 3) {
    for (let col = 0; col <= 6; col += 3) {
      let subgrid = [];
      for (let i = row; i < row + 3; i++) {
        let subgridRow = [];
        for (let j = col; j < col + 3; j++) {
          let v = board[i][j];
          if (v !== ".") {
            subgridRow.push(board[i][j]);
          }
        }
        subgrid.push(subgridRow);
      }
      const arr = subgrid.reduce((a, b) => [...a, ...b]);
      //   const arr = [].concat.apply([], subgrid);
      let set = new Set(arr);
      if (set.size !== arr.length) {
        return false;
      }
    }
  }

  return true;
};

const boardA = [
  [".", "3", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", "7", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

const boardB = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const boardC = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const boards = [
  { name: "Board A", board: boardA },
  { name: "Board B", board: boardB },
  { name: "Board C", board: boardC },
];

(() => {
  let count = 200000;
  for (let { name, board } of boards) {
    console.time(name);
    for (let i = 0; i < count; i++) {
      isValidSudoku(board);
    }
    console.timeEnd(name);
  }
})();
