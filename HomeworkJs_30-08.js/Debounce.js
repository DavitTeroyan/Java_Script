function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}


const search = debounce((text) => {
  console.log("Searching:", text);
}, 500);



search("h");
search("he");
search("hel");
search("hell");
search("hello");


