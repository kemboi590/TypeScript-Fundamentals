// union types are a way to combine multiple types into one type. This allows you to have a variable that can be of multiple types. For example, you can have a variable that can be either a number or a string. This is useful when you want to be able to accept multiple types for a single variable. In the example below, the variable unionType can be either a number or a string.
// By usng types
let unionTye: number | string;
unionTye = 10;
unionTye = "Hello";

console.log(unionTye);

// intersection types are a way to combine multiple types into one type. This allows you to have a variable that has all the properties of multiple types. For example, you can have a variable that has all the properties of a number and a string. This is useful when you want to combine multiple types into a single type. In the example below, the variable intersectionType has all the properties of a number and a string.
type A = {
  a: number;
};
type B = {
  b: string;
};

type C = {
  c: boolean;
};

// combining them
type ABC = A & B & C; //interconnection of the types
let abc: ABC = {
  a: 10,
  b: "Hello",
  c: true,
};



console.log(abc);

// using Interface

interface D {
  d: number;
}

interface E {
  e: string;
}

interface F {
  f: boolean;
}

// combining them
// type DEF = D & E & F; //interconnection of the types
// let def: DEF = {
//   d: 10,
//   e: "Hello",
//   f: true,
// };

// or
interface DEF extends D, E, F {}
let def: DEF = {
    d: 10,
    e: "Hello",
    f: true,
}

console.log(def);