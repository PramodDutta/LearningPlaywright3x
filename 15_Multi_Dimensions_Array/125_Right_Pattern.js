// n = 3
// *
// * *
// * * *

const process = require("process");

let n = 3;
// for (let i = 1; i <= n; i++) {
//     for(let j=1;j<=i;j++){
//         process.stdout.write("*");
//     }
//     console.log("");  
// }
for (let i=0; i < n; i++) {
    for(let j=0;j<=i;j++){
        process.stdout.write("*");
    }
    console.log("");  
}