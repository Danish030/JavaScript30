// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// /* The Fisher-Yates (or knuth) shuffle algorithm */
// const shuffleArray = () => {
//   let array = ["danish", "tanjiro", "inshara", "inosuke", "zentisu"];
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));

//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };
// console.log(shuffleArray());