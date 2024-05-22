
let port: string = "8080";

// using a port in an API call needs a port number to be a number
// cast the port to a number using as keyword
let portNumber: number = parseInt(port);
console.log(`type of portNumber: ${typeof portNumber} and value: ${4+ portNumber}`);


// omitting the type 

type employedPerson = {
    id: number;
    name: string;
    age: number;
    salary: number;
}

type unemployedPerson = Omit<employedPerson, 'salary'>;

let emploeyee: employedPerson = {
    id: 1,
    name: "Kemboi",
    age: 25,
    salary: 1000
}

let unemployed: unemployedPerson = {
    id: 2,
    name: "Kathuri",
    age: 23
}

console.log(emploeyee);
console.log(unemployed);
export{}