interface Employee {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
}

let employee: Employee;

employee = {
  firstName: "Brian",
  lastName: "Kemboi",
  age: 23,
  jobTitle: "Developer",
};

// console.log(employee.firstName);

let student:  {
  firstName: string;
  lastName: string;
  age: number;
  course: string;
};

student = {
  firstName: "Caleb",
  lastName: "Kimani",
  course: "Software Engineering",
  age: 22,
  
};

console.log(student);
