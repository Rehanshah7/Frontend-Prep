function timer() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      console.log(4 - i);
    }, i * 1000);
  }
}

timer();
