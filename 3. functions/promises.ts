// promises in ts
const doHomework: Promise<string> = new Promise((resolve, reject) => {
    console.log("I have started my homework");

    // await for 5 secs to resolve
    setTimeout(() => {
        resolve("I have finished my homework");
    }, 5000);

    //await for 5 secs rejecting
    // setTimeout(() => {
    //     reject("I have failed my homework");
    // }, 5000);
    

});

//1: handle the promise with async/await
async function handleHomeworkAsync() {
    try {
        const result = await doHomework;
        console.log(result);
        
    } catch (error : unknown) {
        console.log("error: ", error);
    }
}

// handleHomeworkAsync();


//2:  using .then()
doHomework.then((result) => {
    console.log("result", result);
}).catch((error) => {
    console.log("error: ", error);
});


export {};