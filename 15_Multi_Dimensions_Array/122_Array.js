// 1D array,list - duplicate element
let results = ["pass", "fail", "pass"];



// 2D — array of arrays (like a table/grid)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let mad = [
    [1,2,3,4] //1x4
]

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        process.stdout.write(grid[i][j]+"");
    }
    console.log("");
}