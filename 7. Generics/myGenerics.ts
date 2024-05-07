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
function connectDb<T extends string, U extends Database>(
  value1: T,
  value2: U
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
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
