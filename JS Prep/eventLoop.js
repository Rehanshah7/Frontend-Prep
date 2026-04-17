console.log("Start");

setTimeout(() => {
  console.log("Inside timeout");
}, 1000);

Promise.resolve().then(() => {
  console.log("Inside Promise");
});

console.log("End");
