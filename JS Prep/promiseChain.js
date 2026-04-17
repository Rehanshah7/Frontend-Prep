Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error("Error");
  })
  .then((x) => console.log(x))
  .catch((err) => {
    console.log("Caught");
    return 10;
  })
  .then((x) => console.log(x));

/*
    🔹 Step (1)
    returns 2

    🔹 Step (2)
    This rejects the promise
    Control jumps to the nearest .catch()

    🔹 Step (3)
    Skipped
    Because the promise is already rejected

    🔹 Step (4) .catch()
    return 10;
    Logs: Caught

    The promise becomes resolved again with value 10

    🔹 Step (5)
    Receives 10
    Logs: 10

    
    Key question
    Why does execution continue after .catch()?

    Because:
    .catch() handles the error and returns a new resolved promise (if you return something)
*/
