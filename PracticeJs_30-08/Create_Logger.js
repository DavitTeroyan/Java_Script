function createLogger(moduleName) {
    return function(text) {
        console.log(`[${moduleName}] ${text}`);
    };
}

const logger = createLogger("AUTH");

logger("User logged in");
logger("Password changed");