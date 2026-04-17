function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const search = debounce((text) => {
  console.log(text);
}, 500);

search("H");
search("He");
search("Hel");
search("Hell");
search("Hello");
