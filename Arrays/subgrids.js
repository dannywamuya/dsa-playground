function generateAllSubgrids(grid) {
  let subgrids = [];

  for (let row = 0; row <= 6; row += 3) {
    for (let col = 0; col <= 6; col += 3) {
      let subgrid = [];
      for (let i = row; i < row + 3; i++) {
        let subgridRow = [];
        for (let j = col; j < col + 3; j++) {
          subgridRow.push(grid[i][j]);
        }
        subgrid.push(subgridRow);
      }
      subgrids.push(subgrid);
      const arr = [].concat.apply([], subgrid);
      console.log(arr);
    }
  }

  return subgrids;
}

// Example 9x9 grid
let grid = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [9, 1, 2, 3, 4, 5, 6, 7, 8],
];

// Generate all subgrids
let allSubgrids = generateAllSubgrids(grid);

// console.log(allSubgrids);

// // Print all subgrids
// for (let i = 0; i < allSubgrids.length; i++) {
//   console.log("Subgrid " + (i + 1));
//   for (let j = 0; j < allSubgrids[i].length; j++) {
//     console.log(allSubgrids[i][j]);
//   }
//   console.log("");
// }
