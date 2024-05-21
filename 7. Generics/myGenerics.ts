// Generics are a way to create reusable components in TypeScript. They allow you to create a component that can work over a variety of types rather than a single one. This enables users to consume these components and use their own types.
// Generics definitions
function getSearchProducts<T>(products: T[]): T {
  //db operations
  const myIndex = 3;
  return products[myIndex];
}

//arrow funvtion of the same
const getMoreSearchProducts = <T>(products: T[]): T => {
  //db operations
  const myIndex = 5;
  return products[myIndex];
};

//production implementation
interface Database {
  connection: string;
  username: string;
  password: string;
}

function connectDb<T extends string, U extends Database>( // the code means that T must be a string and U must be an object that has the properties of the Database interface
  value1: T, // the code means that value1 must be a string
  value2: U // the code means that value2 must be an object that has the properties of the Database interface
): object {
  return {
    value1,
    value2,
  };
}

console.log(
  connectDb("4", { connection: "url", username: "Kemboi", password: "pass" })
);

// sell a course class
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  auther: string;
  subject: string;
}

class SellCourse<T> {
  // the code means that the SellCourse class is a generic class that can take any type of data
  public cart: T[] = []; // the code means that the cart property of the SellCourse class is an array of the type T

  addToCart(product: T) {  // the code means that the addToCart method of the SellCourse class takes a parameter of the type T
    this.cart.push(product);
  }
}

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

console.log(getArray<number>([100, 200, 300]));
console.log(getArray<string>(["Hello", "World"])); //object

