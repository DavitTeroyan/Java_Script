function createBankSession(initialBalance) {
    let balance = initialBalance;
    let history = [];

    return {
        deposit(amount) {
            balance += amount;
            history.push(`+${amount}`);
        },

        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                history.push(`-${amount}`);
            }
        },

        getHistory() {
            return history;
        }
    };
}

const bank = createBankSession(500);

bank.deposit(100);
bank.withdraw(50);
bank.deposit(200);

console.log(bank.getHistory());