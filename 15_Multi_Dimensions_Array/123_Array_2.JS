let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

console.log(grid[0][0])
// grid[2][1]; 
// grid[1][2];

grid[0][0] = 99;
console.log(grid);

console.log(grid.length); // 3 — number of rows
console.log(grid[0].length);

console.log(grid[grid.length - 1][grid[0].length - 1]);
console.log(grid[2][2]);

let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

for(let i=0;i< testMatrix.length;i++){
    for(let j=0;j< testMatrix[i].length;j++){
        process.stdout.write(testMatrix[i][j]+" ");
    }
    console.log("");
}

console.log(" --------- ");

for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ")
    }
    console.log();
}
console.log(" --------- ");

// forEach
testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
});

console.log(" --------- ");