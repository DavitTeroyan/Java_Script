function retry(fn, maxRetries) {
  let attempts = 0;

  while (attempts <= maxRetries) {
    try {
      return fn();
    } catch (error) {
      attempts++;

      if (attempts > maxRetries) {
        throw error;
      }
    }
  }
}


let count = 0;

const test = () => {
  count++;

  if (count < 3) {
    throw new Error("Failed!");
  }

  return "Success!";
};

console.log(retry(test, 3));
