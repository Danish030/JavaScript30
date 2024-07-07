// // 1. Create an empty object called dog

// const dog ={

// };
// // 2. print the dog in console
// console.log(dog)

// // 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

// const dog1 = {
//     name:"bunny",
//     legs:2,
//     color:'black',
//     age: "2 years",
//     bark: function () {
//         return 'woof woof';
//     },
// }

// console.log(dog1)
// let bark1 = dog1.bark()
// console.log(bark1)

// // 4. Get name, legs, color, age and bark value from the dog object

// let name1 = dog1.name 
// console.log(name1)
// let leg = dog1.legs 
// console.log(leg)
// let colors = dog1.color
// console.log(colors)

// // 5. Set new properties the dog object: breed, getDogInfo
// dog1.breed = 'xamerian';
// dog1.getDoginfo = function () {
//     return `Name :${this.name}, Age: ${this.age}, color:${this.color}, breed: ${this.breed}, bark:${this.bark} `
// };

// console.log(dog1.getDoginfo())

// Exercise - 2 //

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//   // 1. Find the person who has many skills in the users object.

//   let maxSkills = 0;
//   let personWithMostSkills = '';
  
//   for (const user in users) {
//     const skillsCount = users[user].skills.length;
//     if (skillsCount > maxSkills) {
//       maxSkills = skillsCount;
//       personWithMostSkills = user;
//     }
//   }
  
//   console.log(`${personWithMostSkills} has the most skills with ${maxSkills} skills.`);

//   //2. Count logged in users, count users having greater than equal to 50 points from the following object.

//   let loggedinUsers = 0;
//   let mostPoints = 0;

//   Object.values(users).forEach(user => {
//     // Logic for counting goes here
//     if(user.isLoggedIn) loggedinUsers++;
//     if(user.points >=50) mostPoints++;
//   });
// console.log(loggedinUsers)
// console.log(mostPoints)

// // 3.Find people who are MERN stack developer from the users object

// let mernStackUsers = 0;
// Object.values(users).forEach(user=> {
//  if(user.skills.includes('MongoDB')&& user.skills.includes('Express') && user.skills.includes('React') && user.skills.includes('Node')){
//   mernStackUsers++;
//  }
// });
// console.log(mernStackUsers)

// // 4.Set your name in the users object without modifying the original users object
// const updatedUsers = {
//   ...users,
//   Danish: {
//       ...users.Danish,
//       email: 'danish@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 22,
//       isLoggedIn: true,
//       points: 30
//   }
// };

// console.log(updatedUsers);

// // 5. Get all keys or properties of users object

// const keys = Object.keys(users);
// console.log(keys)


// // 6. Get all the values of users object
// const keys1 = Object.values(users);
// console.log(keys1)

// //7. Use the countries object to print a country name, capital, populations and languages

// const country ={
//   India:{
//     CountryName:"India",
//     Capital:"Dlehi",
//     Currency:"Rupees"
//   },
//   Pakistan:{
//     CountryName:"pakistan",
//     Capital:"islambad",
//     Currency:"Rupees"
//   }
// }

// console.log(country.India.CountryName);
// console.log(country.India.Capital);
// console.log(country.India.Currency);

// exercise-2 //