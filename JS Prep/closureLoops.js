for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

/*
    var is function-scoped, not block-scoped
    There is only ONE shared i for the entire loop

    let is block-scoped
    Each iteration gets a new separate i
*/
