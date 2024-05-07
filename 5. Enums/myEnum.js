// enums
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["Window"] = 0] = "Window";
    SeatChoice[SeatChoice["Aisle"] = 1] = "Aisle";
    SeatChoice[SeatChoice["Middle"] = 2] = "Middle";
    SeatChoice[SeatChoice["None"] = 3] = "None";
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.Window;
console.log(mySeat);
