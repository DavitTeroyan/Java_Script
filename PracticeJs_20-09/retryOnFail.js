function retryOnFail(fn, retries) {
    return async function () {
        let lastError;

        for (let i = 0; i <= retries; i++) {
            try {
                return await fn();
            } catch (error) {
                lastError = error;
            }
        }

        throw lastError;
    };
}

async function fn() {
    throw new Error("Failed");
}

const test = retryOnFail(fn, 3);

test().catch(error => {
    console.log(error.message);
});