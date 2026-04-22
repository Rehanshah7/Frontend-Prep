let count = 0;

async function increment() {
  let temp = count;
  await Promise.resolve();
  count = temp + 1; // instead of temp directly use the count + 1
}

increment();
increment();

setTimeout(() => {
  console.log(count);
}, 1000);

/*
    count = 0
    First increment() → reads 0, pauses at await
    Second increment() → also reads 0, pauses at await
    Microtasks resume:
    First resumes → sets count = 1
    Second resumes → also sets count = 1 (overwrites)

    Fix 1: Move the read(temp) after await
*/
