//Every value has a type

/*
Cab be categorized into 2
 - primitive types -> string , number , boolean, null, undefined, symbol
 - object types -> functions, arrays, classes and more

*/

let counter: number = 1;
let age: number = 23;
let active: boolean = true;

//array annotation

let names: string[] = ["John", "Diana", "Peter", "David"];
//object annotation
let person: {
  name: string;
  age: number;
};

person ={
    name : 'John',
    age: 25
}

console.log(person)
