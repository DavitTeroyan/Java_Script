function readFile(filename, callback) {
  setTimeout(() => {
    if (filename === "missing.txt") {
      callback(new Error("File not found"), null);
    } else {
      callback(null, "File content");
    }
  }, 500);
}

function callbackToPromise(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
}

const readFilePromise = callbackToPromise(readFile);

readFilePromise("test.txt")
  .then(result => console.log(result))
  .catch(error => console.log(error.message));
  