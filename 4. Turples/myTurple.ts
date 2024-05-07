// const user: (string | number)[] = ['John', 25, ]  // This is an array

let details: [string, number, boolean];

details = ["John", 12, false]; // This is a turple

console.log(details);

let rgb: [number, number, number] = [255, 0, 0];
console.log(rgb);


// using tuples for types
type user = [number, string]
const newUser: user = [1, 'John']
console.log(newUser)

export {};
