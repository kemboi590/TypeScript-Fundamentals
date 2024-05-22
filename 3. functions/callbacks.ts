
// callbacks
function doHomework(subject: string, callFinishedHomework: () => void) {
    console.log(`I have started my ${subject} homework`);
    callFinishedHomework();
  }
  
  function finishedHomework() {
    console.log("I have finished my homework");
  }
  
//   doHomework("Math", finishedHomework);
  
  
  // parameterized callbacks
  function doHomework1(
    subject: string,
    callFinishedHomework: (subject: string) => string
  ) {
    console.log(`I have started my ${subject} homework`);
    const result = callFinishedHomework(subject);
    console.log(result);
  }
  
  function finishedHomework2(subject: string) {
    return `I have finished my ${subject} homework`;
  }
  
  doHomework1("Math", finishedHomework2);