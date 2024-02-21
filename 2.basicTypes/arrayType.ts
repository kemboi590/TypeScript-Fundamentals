let skills: string[] = [];

skills[0] = "Problem solving";
skills[1] = "Debuging";
skills[2] = "Programming";
skills.push("Software Design");
skills.push("Project management");
skills.shift();
skills.unshift("Database design");

// console.log(skills);
// console.log(typeof skills);

//Array properties
let series = [1, 2, 3, 4, 5];
// console.log(series);

//map()
let doubleSeries = series.map((e) => e * 2);
// console.log(doubleSeries);

// string and numbers array

// let values = ["programming", 5, "Azure", "4"];
// console.log(values);

//same as:
let values: (string | number)[] = ["programming", 5, "Azure", "4"];
console.log(values);
