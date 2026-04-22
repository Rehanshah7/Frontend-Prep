async function parallelFetch() {
  try {
    const [res1, res2] = await Promise.all([fetch("url1"), fetch("url2")]);
  } catch (err) {
    console.log("Error", err);
  }
}

// Promise.all will wait for all promises to resolve and if any fails then it returns fails while the Promise.allSettled will wait for all promises to resolve and it never fails and returns status of each promises.
