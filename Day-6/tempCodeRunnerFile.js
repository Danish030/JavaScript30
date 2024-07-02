let randomdata = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let id = ''; // Initialize id as an empty string
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * randomdata.length); // Correct random index calculation
    id += randomdata[random]; // Append random character to id
}
console.log(id); // Print the generated id