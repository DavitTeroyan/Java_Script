function passwordChecker(realPwd) {
    let attempts = 0;

    return function(password) {
        if (attempts >= 3) {
            return null;
        }

        if (password === realPwd) {
            return true;
        }

        attempts++;

        if (attempts >= 3) {
            return null;
        }

        return false;
    };
}

const checkPassword = passwordChecker("1234");

console.log(checkPassword("1122"));
console.log(checkPassword("2222"));
console.log(checkPassword("3333")); 
console.log(checkPassword("1234")); 