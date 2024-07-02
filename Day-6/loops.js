const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// let i = 1;
// while (i<=10) {
//    console.log(i)
//    i++;
// }

// let j = 1;
// do {
//     console.log(j)
//     j++;
// } while (j<=10)

//  2.Iterate 10 to 0 using for loop, do the same using while and do while loop

// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// let i = 10;
// while (i>=0) {
//    console.log(i)
//    i--;
// }

// let j = 10;
// do {
//     console.log(j)
//     j--;
// } while (j>=0)

// // 3.  Iterate 0 to n using for loop
//  let n = prompt("enter n")
// for (let i = 0; i < n; i++) {
//     console.log(i)
// }

// // 4 . Write a loop that makes the following pattern using console.log():
// let star = ''
//  for (let i = 0; i < 6; i++) {
//     star+='*'
//     console.log(star)
//  }

// // 5. Use loop to print the following pattern:  0*0=0

//  let pattern=''
//  for (let i = 0; i <= 10.; i++) {
//       pattern = `${i} * ${i} = ${i * i}`
//     console.log(pattern)
//  }

// // 6. Using loop print the following pattern
// //  i    i^2   i^3

//  let pattern1=''
//  console.log('i    i^2   i^3')
//  for (let i = 0; i <= 10.; i++) {
//       pattern = `${i}  ${i * i} = ${i * i * i}`
//     console.log(pattern)
//  }

// // 7. Use for loop to iterate from 0 to 100 and print only even numbers

// for (let i = 0; i <= 100; i++) {
//     if (i%2 == 0) {
//         console.log(i)
//     }
// }

// // 8.Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 0; i <= 100; i++) {
//     if (i%2 != 0) {
//         console.log(i)
//     }
// }
// // 9. Use for loop to iterate from 0 to 100 and print only prime numbers
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (let i = 0; i <= 100; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }

// // 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log("Sum of 0 to 100 is: " + sum);

// // 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let sumOfEven = 0;
// let sumOfOdd = 0;

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         sumOfEven += i;
//     } else {
//         sumOfOdd += i;
//     }
// }

// console.log('Sum of even numbers from 0 to 100 is: ' + sumOfEven);
// console.log('Sum of odd numbers from 0 to 100 is: ' + sumOfOdd);

// // 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

// let sumOfEven = 0;
// let sumOfOdd = 0;
// let arr = []

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         sumOfEven += i;
//     } else {
//         sumOfOdd += i;
//     }
// }
// arr.push(sumOfEven,sumOfOdd)
// console.log(arr)

// // 13.Develop a small script which generate array of 5 random numbers

// let arr = []
// for (let i = 0; i < 5; i++) {
//     let random = Math.floor(Math.random() * 100)
//     arr.push(random)
// }
// console.log(arr)

// // 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

// let arr = [];

// for (let i = 0; i < 5; i++) {
//   let random = Math.floor(Math.random() * 100);
//   if (!arr.includes(random)) {
//     arr.push(random);
//   }
// }
// console.log(arr);

// // 15. Develop a small script which generate a six characters random id:

// let randomdata = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// let id = ''; // Initialize id as an empty string
// for (let i = 0; i < 6; i++) {
//     let random = Math.floor(Math.random() * randomdata.length); // Correct random index calculation
//     id += randomdata[random]; // Append random character to id
// }
// console.log(id); // Print the generated id

 // // exercise 2

//  // 1. Develop a small script which generate any number of characters random id:

//  let data = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//  let randomId = ''

// for (let i = 0; i < 7; i++) {
//      let random = Math.floor(Math.random() * data.length);
//      randomId+=data[random];
// }
// console.log(randomId)

// // 2. Write a script which generates a random hexadecimal number.

// let hexDigits = "ABCDEF0123456789"
// let hex = "#"

// for (let i = 0; i < 7; i++) {
//   let random = Math.floor(Math.random() * 16 )
//   hex+=hexDigits[random]
// }
// console.log(hex)

// // 3. Write a script which generates a random rgb color number.

// for (let i = 0; i <1; i++) {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     console.log(`rgb(${r},${g},${b})`)
// }

// // 4. Using the above countries array, create the following new array.
// let arr = []
//  for (let i = 0; i < countries.length; i++) {
//       arr.push(countries[i].toUpperCase())
//  }

//  console.log(arr)

// // 5. Using the above countries array, create an array for countries length'.

// let length = []
// for (let i = 0; i < countries.length; i++) {
//   length.push(countries[i].length);
// }
// console.log(length)

// // 6. Use the countries array to create the following array of arrays:
// [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

// let arrayOfArrays = countries.map(country => [
//   country,
//   country.length,
//   country.substring(0,3).toUpperCase()
// ])

// console.log(arrayOfArrays)

// 7.