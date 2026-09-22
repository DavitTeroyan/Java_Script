function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(result => {
          results[index] = result;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

const promises = [
  Promise.resolve("First"),
  Promise.resolve("Second"),
  Promise.resolve("Third")
];

promiseAll(promises)
  .then(result => console.log(result))
  .catch(error => console.log(error));