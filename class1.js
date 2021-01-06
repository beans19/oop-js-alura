//  unnecessary code repetition
const client1Name = "Felipe";
const client1Number = "12321523654";
const client1Agency = "3666";
const client1Balance = 0;

const client2Name = "Maria";
const client2Number = "45695674125";
const client2Agency = "3666";
const client2Balance = 0;

// using classes
class Client {
    name;
    number;
}

class currentAccount {
    agency;
    #balance = 0;

    withdrawn(amountWithdrawn) {
        if (this.#balance >= amountWithdrawn){
            this.#balance -= amountWithdrawn;
            console.log('balance after withdrawn: ', this.#balance);
        }
    }

    deposit(amountDeposited) {
        if(amountDeposited > 0){
            this.#balance += amountDeposited;
            console.log('balance after deposit: ', this.#balance);
        }
    }
}

const client1 = new Client();

client1.name = "Felipe";
client1.number = "45674125632";

console.log(client1);

const client2 = new Client();

client2.name = "Maria";
client2.number = "456231565485";

console.log(client2);

const client1CurrentAccount = new currentAccount();

client1CurrentAccount.agency = "9666";

// console.log(client1CurrentAccount.balance);

// let amountWithdrawn = 200;

// client1CurrentAccount.balance -= amountWithdrawn;

// negative balance can't exist, let's do an if to solve this issue

// if (client1CurrentAccount.balance >= amountWithdrawn){
//     client1CurrentAccount.balance -= amountWithdrawn;
// }

// console.log(client1CurrentAccount.balance);

//this could turn into a function, so let's do it!

client1CurrentAccount.deposit(450);

client1CurrentAccount.withdrawn(100)

console.log(client1CurrentAccount);