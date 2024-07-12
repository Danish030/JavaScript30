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

// exercise-3 //

// //1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// const personAccount = {
//   firstName:"Danish",
//   lasttName:"Ansari",
//   incomes:[
//     { description: 'Salary', amount: 3500 },
//     { description: 'Salary', amount: 1000 },
//     { description: 'Salary', amount: 500 },
//   ],
//   expenses:[
//     { description: 'recharge', amount: 500 },
//     { description: 'snacks', amount: 500 },
//     { description: 'Fees', amount: 1000 },
//     { description: 'installment', amount: 1500 },
//   ],
//    totalIncome:function (){
//     return this.incomes.reduce((total,income) => total + income.amount,0);
//    },
//    totalexpesnse:function (){
//     return this.expenses.reduce((total,expense) => total + expense.amount,0);
//    },
//   accountInfo:function(){
//     return `Name:${this.firstName} ${this.lasttName}, ${this.totalIncome()} ${this.totalexpesnse()}`;
//   },
//   addIncome: function(description, amount) {
//     this.incomes.push({ description, amount });
// },

// addExpense: function(description, amount) {
//     this.expenses.push({ description, amount });
// },

// accountBalance: function() {
//     return this.totalIncome() - this.totalexpesnse();
// }
// };
// // Example usage:
// console.log(personAccount.accountInfo());
// // Output: "Name: John Doe, Total Income: 4500, Total Expense: 1300"

// personAccount.addIncome('Investment', 500);
// console.log(personAccount.totalIncome());
// // Output: 5000

// personAccount.addExpense('Utilities', 200);
// console.log(personAccount.totalexpesnse());
// // Output: 1500

// console.log(personAccount.accountBalance());
// // Output: 3500

// console.log(personAccount)

//2.**** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const usersdetail = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

 

// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application


// Assuming users is an array of user objects
function signIn(email,password) {
  const userExists = usersdetail.some(user => user.email === email && user.password === password);
  if (!userExists) {
    console.log("User not found");
    return;
  }
  else
  console.log('user found')
}

signIn('thomas@thomas.com','123333'); // Output: User  found
signIn('thomas@thoas.com','123333'); // Output: User not  found


function signUp(email,password,username){
  const userExists = usersdetail.some(user => user.email === email && user.password === password);
  if (!userExists) {
    console.log("User not found, need to signup");
    const newUser = {
      _id: Math.random().toString(36).substring(2, 7), // generating a random id
      username: username,
      email: email,
      password: password,
      createdAt: new Date().toLocaleString(),
      isLoggedIn: false
    };
  
    usersdetail.push(newUser);
    console.log("User signed up successfully");
    return;
  }
  
  
}
signUp('danish@gmail.com', 'danish8909', 'Danish');
console.log(usersdetail)


// product object
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
  ]

// 3.The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product
function rateProduct(productId, userId, rate) {
  const product = products.find(p => p._id === productId);
  
  if (!product) {
    console.log("Product not found");
    return;
  }
  
  const userRating = product.ratings.find(r => r.userId === userId);
  
  if (userRating) {
    userRating.rate = rate; // Update existing rating
    console.log("Rating updated");
  } else {
    product.ratings.push({ userId, rate }); // Add new rating
    console.log("Rating added");
  }
}

// Example usage:
rateProduct('eedfcf', 'fg12cy', 4); // Update existing rating
rateProduct('aegfal', 'zwf8md', 5); // Add new rating
rateProduct('unknown', 'fg12cy', 4); // Product not found

function averageRating(productId) {
  const product = products.find(p => p._id === productId);
  
  if (!product) {
    console.log("Product not found");
    return;
  }
  
  const totalRatings = product.ratings.reduce((acc, curr) => acc + curr.rate, 0);
  const numberOfRatings = product.ratings.length;
  
  const average = numberOfRatings ? totalRatings / numberOfRatings : 0;
  
  console.log(`Average rating: ${average}`);
  return average;
}

// Example usage:
averageRating('eedfcf'); // Calculate and log the average rating
averageRating('aegfal'); // Calculate and log the average rating
averageRating('unknown'); // Product not found


// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function removeLike(productId, userId) {
  const product = products.find(p => p._id === productId);
  
  if (!product) {
    console.log("Product not found");
    return;
  }

  const userIndex = product.likes.indexOf(userId);
  
  if (userIndex === -1) {
    console.log("Like not found for this user");
    return;
  }
  
  product.likes.splice(userIndex, 1);
  console.log("Like removed");
}
removeLike('hedfcg', 'fg12cy'); // Remove like from TV by user fg12cy
removeLike('aegfal', 'fg12cy'); // Remove like from Laptop by user fg12cy
removeLike('unknown', 'fg12cy'); // Product not found
removeLike('eedfcf', 'unknown'); // Like not found for this user