// https://www.typescripttutorial.net/typescript-tutorial/typescript-void-type/
let val: void = undefined;
// val=1;  // cannot be possible as it is now useless

function log(message: string): void {
  console.log(message);
}

log("Hello World");
