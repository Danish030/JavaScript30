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

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
    switch(month.toLowerCase()){
        case 'december':
        case 'january':
        case 'february':
            return 'winter';
        
        case 'march':
        case 'april':
        case 'may':
            return 'summer';
        
        case 'june':
        case 'july':
        case 'august':
            return 'monsoon';
        
        case 'september':
        case 'october':
        case 'november':
            return 'spring';

        default:
            return 'invalid month'
    }
}
console.log(checkSeason('May'))
