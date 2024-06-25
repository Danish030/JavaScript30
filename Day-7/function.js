// //1.Declare a function fullName and it print out your full name
// function fullName(params) {
//     let name = "Danish Ansari"
//     console.log(name)
// }
// fullName()

// //2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// function fullName(fname,lname) {

//     console.log(fname+lname)
// }
// fullName("dan","ish")

// //3.Declare a function addNumbers and it takes two two parameters and it returns sum.

// function sum2n(a,b) {
//     let sum = a+b;
//     console.log(sum)
// }

// sum2n(4,9)

// // 4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

// function areaOfRectangle(length,breadth){
//     let a = length * breadth;
//     console.log(a)
// }

// areaOfRectangle(6,8)

// // 5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

// function perimeterOfRectangle(length,breadth) {
//     let perimeter = 2*(length+breadth);
//     console.log(perimeter)

// }

// perimeterOfRectangle(4,5);

// // 7. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

// function volume(l,b,h) {
//     let v = l*b*h;
//     console.log(v)
// }
// volume(4,7,8)

// // 8.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

// function areaOfCircle(r){
//     let area = 22/7 * r *r;
//     console.log(area)
// }

// areaOfCircle(7)

// // 8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

// function circumOfCircle(r) {
//     let circumference = 2*22/7*r;
//     console.log(circumference)
// }
// circumOfCircle(7)

// // 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

// function density(m,v){
//     let d = m/v;
//     console.log(d)
// }
// density(10,2)
// // 10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

// function speed(distance,time) {
//     let s = distance/time;
//     console.log(s);
// }
// speed(50,6)

// // 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

// function weightOfSubstance(m,g) {
//     let weight = m * g
//     console.log(weight)
// }
// weightOfSubstance(5,6)

// // 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

// function convertCelsiusToFahrenheit(c){
//     let fahrenheit = (c* 9/5)+32
//     console.log(fahrenheit + " Fahrenheit")
//     }
// convertCelsiusToFahrenheit(10)

// // 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// // The same groups apply to both men and women.
// // Underweight: BMI is less than 18.5
// // Normal weight: BMI is 18.5 to 24.9
// // Overweight: BMI is 25 to 29.9
// // Obese: BMI is 30 or more

//  function calculateBMI(w,h) {
//         // limiting  2 digit after decimal
//         let bmi = parseFloat(w/(h*h)).toFixed(2);
//         console.log(bmi + " kg/m2")
//     if (bmi<18.5) {
//         console.log("You are Underwigt")
//     }
//     else if (bmi>=18.5 && bmi<=24.9) {
//         console.log("You are Normal")
//     }
//     else if (bmi>=25 && bmi<=29.9) {
//         console.log("You are Overweight")
//     }
//     else if (bmi>=30) {
//         console.log("You are Obese")
//     }
//  }
// calculateBMI(50,1.6)

// // 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// function checkSeason(month) {
//     switch(month.toLowerCase()){
//         case 'december':
//         case 'january':
//         case 'february':
//             return 'winter';

//         case 'march':
//         case 'april':
//         case 'may':
//             return 'summer';

//         case 'june':
//         case 'july':
//         case 'august':
//             return 'monsoon';

//         case 'september':
//         case 'october':
//         case 'november':
//             return 'spring';

//         default:
//             return 'invalid month'
//     }
// }
// console.log(checkSeason('May'))

// // 15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// function findMax(a,b,c){
//   if(a>b && a>c){
//     return a;
//   }
// else if (b>a && b>c) {
//     return b;
// }

// else if (c>a && c>b) {
//     return c;
// }
// }
// console.log(findMax(0, -10, -2))

/*  Exercises: Level 2 */
// // 1.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

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

// // 2.Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// function solveQuadratic(a,b,c) {
//     // Example quadratic equation: 2x + 3y = 6
//     let discriminant = (b*b)-(4*a*c);
//     if (discriminant>0) {
//         let x1= (-b+(Math.sqrt(discriminant)))/(2*a);
//         let x2 = (-b-(Math.sqrt(discriminant)))/(2*a);
//         console.log(`Two distinct real roots: x1 = ${x1}, x2 = ${x2}`);
//     }
//     else if (discriminant==0) {
//         let x = -b / (2 * a);
//         console.log(`One real root: x = ${x}`);
//     }
//     else{
//         console.log("discriminant is negative, there are no real roots (only complex roots).")
//     }
// }
// solveQuadratic(1, 4, 4) // {-2}
// solveQuadratic(1, -1, -2) // {2, -1}
// solveQuadratic(1, 7, 12) // {-3, -4}
// solveQuadratic(1, 0, -4)//{2, -2}
// solveQuadratic(1, -1, 0) //{1, 0}

// // 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// function printArray(array){
//     array.forEach(value => console.log(value))
// }
// printArray(['shifa', 'Rabiya','Saheefa','Alfiya', 'nazzu', 'inshara'])

// //4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// // showDateTime()
// // 08/01/2020 04:08

// function showDateTime() {
//   const date = new Date();
//   const formatter = new Intl.DateTimeFormat("en-GB", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12:true
//   });
//   const formattedDate = formatter.format(date);
//   console.log(formattedDate);
// }
// showDateTime();

// // 5.Declare a function name swapValues. This function swaps value of x to y.

// /* functions parameters should nnot declared like let a; */
// function swapValues(a,b) {
//    let temp = a;
//    a = b;
//    b = temp;
//    console.log(a,b)
// }
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

// // 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// function reverseArray(arr){
// let start = 0;
// let end = arr.length-1
// while (start<end) {
//     let temp =  arr[start];
//     arr[start] = arr[end];
//      arr[end] = temp;
//     start+=1;
//     end-=1
// }
// return arr;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]))
// console.log(reverseArray(['A', 'B', 'C']))

// // 8. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

// function capitalizeArray(arr){
//     const capitalizedarray = []
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof(arr[i]) === 'string'){
//             capitalizedarray.push(arr[i].toUpperCase());
//         }
//         else{
//             console.log("it is not string of array")
//         }
//     }
//     return capitalizedarray;
// }

// console.log(capitalizeArray(['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']))

// // 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

// let arr = []
// function addItem(item) {
//     arr.push(item)
// return arr;
// }

// console.log(addItem('five'))
// console.log(addItem('danish'))
// console.log(addItem(9))

// // 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
// const arr = ['Danish', 'ansari','jjk','aott']
// console.log(arr)
// function removeItem(index) {
//     if(index>=0 && index < arr.length){
//      arr.splice(index,1)
//     }
//     return arr // Return the modified same  array after removing the item
// }
// console.log(removeItem(1));

// // 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// const sumOfNumbers = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// };
// console.log(sumOfNumbers(5));

// // 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// const sumOfodds = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 != 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };
// console.log(sumOfodds(5));

// // 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// const sumOfEven = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// };
// console.log(sumOfEven(5));

// // 13.Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// // evensAndOdds(100);
// // The number of odds are 50.
// // The number of evens are 51.

// const evensAndOdds = (n) => {
//   let even=0 ;
//   let odd=0 ;
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 == 0) {
//       even+=1;
//     }
//     else if (i % 2 != 0) {
//       odd+=1;
//     }
//   }
//   return `The number of odds are ${odd}. \nThe number of evens are ${even}.`;
// };
// console.log(evensAndOdds(100));

// // 14. Write a function which takes any number of arguments and return the sum of the arguments

// const sumOfNumbers = (...args) =>{
//     let sum = 0;
//     for (const num of args) {
//         sum+=num;
//     }
//     return sum;
// }
// console.log(sumOfNumbers(1, 2, 3)) // -> 6
// console.log(sumOfNumbers(1, 2, 3, 4)) // -> 10

// //15. Writ a function which generates a randomUserIp
// //192.168.0.107

// const randomUserIp = () => {
//   const minCeiled = Math.ceil(0);
//   const maxFloored = Math.floor(255);
//   let first = Math.floor(
//     Math.random() * (maxFloored - minCeiled + 1) + minCeiled
//   );
//   let second = Math.floor(
//     Math.random() * (maxFloored - minCeiled + 1) + minCeiled
//   );
//   let third = Math.floor(
//     Math.random() * (maxFloored - minCeiled + 1) + minCeiled
//   );
//   let forth = Math.floor(
//     Math.random() * (maxFloored - minCeiled + 1) + minCeiled
//   );

//   console.log(first + "." + second + "." + third + "." + forth);
// };

// randomUserIp();

// 16.Write a function which generates a randomMacAddress
// 80-A5-89-17-5B-DE

