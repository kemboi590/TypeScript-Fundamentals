function addTwoNumbers(num: number) {
  return num + 3;
}

console.log(addTwoNumbers(5));

function getUpper(val: string) {
  return val.toUpperCase();
}

console.log(getUpper("kemboi"));

function greet(name: string) {
  return `Hello ${name}`;
}

// console.log(greet("John"));

// Optional parameters
const fullName = (firstName: string, lastName?: string): string => {
  return lastName ? `${firstName} ${lastName}` : firstName;
};

// console.log(fullName("John", "Doe"));

// default parameters
const getSalary = (basic: number, bonus: number = 0): number => {  //in this case default parameter is 0 for bonus
  return basic + bonus;
};

// console.log(getSalary(1000, 500));


// rest parameters
const addNumbers = (...numbers: number[]): number => {
  return numbers.reduce((sum, num) => sum + num, 0);
};
// console.log(addNumbers(1, 2, 3, 4, 5));

export {};
