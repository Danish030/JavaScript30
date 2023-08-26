//Declare an empty array;

const arr = []
console.log(arr)

//Declare an array with more than 5 number of elements
const n = [0,1,2,3,4]

//find the length of an array
console.log(n.length) 

//Get the first item, the middle item and the last item of the array

//firt item
const firstItem=n[0];

//middle item
const middleindex=Math.floor(n.length/2);
const middleItem=n[middleindex];
console.log()


//last item
const lastItem=n[n.length-1];

console.log("first item",firstItem)
console.log("Middle item", middleItem)
console.log("Last item", lastItem)

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes=[ 1, 1.2, 'car', 'a','true', null]
console.log(mixedDataTypes.length)

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"]

//7.print the array using console.log()
console.log(itCompanies)

//8.Print the number of companies in the array
console.log("No. of companies:",itCompanies.length)

//9. Print the first company, middle and last company

const firstCompany=itCompanies[0];
const middle = Math.floor(itCompanies.length/2)
const middleCompany=itCompanies[middle]
const lastCompany=itCompanies[itCompanies.length-1]

console.log("First Comapny : ", firstCompany)
console.log("Second Comapnay : ", middleCompany)
console.log("Last Comapny : ", lastCompany)

//10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

//11.Change each company name to uppercase one by one and print them out

for (let i = 0; i < itCompanies.length; i++) {
    let uppercaseName = itCompanies[i].toUpperCase();
    console.log(uppercaseName);
}

//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies
console.log(itCompanies.toString())

//13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let target ="Microsoft"
if (itCompanies.includes(target)) {
    console.log(target + " Exist in the list it companies")
} else {
    console.log(target + "Does not Exist in the list it companies") 
}



function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

let companiesWithMoreThanOneO = [];

for (let i = 0; i < itCompanies.length; i++) {
    if (countOccurrences(itCompanies[i], 'o') > 1) {
        companiesWithMoreThanOneO.push(itCompanies[i]);
    }
}

console.log("Companies with more than one 'o':", companiesWithMoreThanOneO);


//15 sort the array using sorting method
const num=[0,2,5,3,5,3,7,9]
console.log(num.sort())

//Revesrse array
console.log(num.reverse())

//slice 3 companies
console.log(itCompanies.slice(3))

//slice last 3 companies

    
