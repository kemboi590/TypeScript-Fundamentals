// enums are a way to define a set of named constants i.e. a collection of related values that can be numeric or string values.
// Enums start numbering their members starting from 0 but can be changed to any other number.

enum SeatChoice {
  Window,
  Aisle,
  Middle,
  None,
}

const mySeat: SeatChoice = SeatChoice.Aisle;
console.log(mySeat);
