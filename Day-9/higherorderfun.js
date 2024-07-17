const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1.Explain the difference between forEach, map, filter, and reduce.

// forEch:- iterate over any array, it is used for only arrays, it take calbackfunction ,arrayofindex and array itself and the index and array optional

// map :- map method iterate over an array and   modify array

// reduce ;- reduce takes an accumalatior and current returns single value

// 2. Define a callback function before you use it in forEach, map, filter or reduce.

function callback(element, index, array) {}

// 3. Use forEach to console.log each country in the countries array.

countries.forEach((country) => console.log(country));

// 4.Use forEach to console.log each name in the names array.

names.forEach((name1) => console.log(name1));

// 5.Use forEach to console.log each number in the numbers array.

numbers.forEach((number) => console.log(number));

//6. Use map to create a new array by changing each country to uppercase in the countries array.

let upperCaseCountry = countries.map((country1) => country1.toUpperCase());
console.log(upperCaseCountry);

//7. Use map to create an array of countries length from countries array.
let countrylength = countries.map((country) => country.length);
console.log(countrylength);

// 8.Use map to create a new array by changing each number to square in the numbers array

const squaredArray = numbers.map((square) => square*square)
console.log(squaredArray)

// 9. Use map to change to each name to uppercase in the names array
const uppercaseArray = names.map((name) => name.toUpperCase())
console.log(uppercaseArray)

// 10.Use map to map the products array to its corresponding prices.

const prices = products.map((product)=> product.price)
console.log(prices)

//11. Use filter to filter out countries containing land

const landName = countries.filter((land)=> land.includes('land'))
console.log(landName)

// 12. Use filter to filter out countries having six character
const sixchar = countries.filter((six) => six.length === 6)
console.log(sixchar)

// 13. Use filter to filter out countries containing six letters and more in the country array.
const sixchar1 = countries.filter((six) => six.length >= 6)
console.log(sixchar1)

// 14. Use filter to filter out country start with 'E';

const findE = countries.filter((find) => find.includes('e'))
console.log(findE)

// 15.Use filter to filter out only prices with values

const arraywithprice = products.filter((prices) => prices.price != null)
console.log(arraywithprice)