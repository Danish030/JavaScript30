// 1.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// function solveLinEquation({x=null,y=null}={}) {
//     if(x == null && y == null){
//         throw new Error("at least provide x or y")
//     }
//     // Example linear equation: 2x + 3y = 6
//     const a = 2;
//     const b = 3;
//     const c = 6;
//    if (x !== null) {
//         // Solve for y: 3y = 6 - 2x
//         const y = (c - a * x) / b;
//         return { x, y };
//     }

//     if (y !== null) {
//         // Solve for x: 2x = 6 - 3y
//         const x = (c - b * y) / a;
//         return { x, y };
//     }
// }

// console.log(solveLinEquation({ x: 1 })); // Should output: { x: 1, y: 4/3 }
// console.log(solveLinEquation({ y: 1 })); // Should output: { x: 3/2, y: 1 }