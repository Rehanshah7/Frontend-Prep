function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log("count", count);
  };
}

const fn1 = outer();
const fn2 = outer();

fn1();
fn1();
fn2();
fn2();

/*
    Every time outer() runs, it creates a new variable count.
    It returns the inner() function, which remembers (closes over) that specific count variable.

    fn1 gets its own separate count (starting at 0)
    fn2 gets a different, independent count (also starting at 0)
*/
