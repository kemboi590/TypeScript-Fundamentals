type person = {
  name: string;
  age: number;
  id: number;
  married: Boolean;
  gender: string;
  address: {
    city: string;
    state: string;
    street: string;
    zip: number;
  };
};

// adding the properties of the person type to the student type
type student = person & {
  studentId: number;
  grade: number;
  school: string;
};

let student1: student = {
  name: "Kemboi",
  age: 23,
  id: 1234,
  married: false,
  gender: "male",
  studentId: 1234,
  grade: 3,
  school: "KyU",
  address: {
    city: "Kutus",
    state: "Kirinyaga",
    street: "Kutus",
    zip: 10300,
  },
};

// log student1 city
console.log(student1.address.city);
