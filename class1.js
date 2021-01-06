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
    agency;
    balance;
}

const client1 = new Client();

client1.name = "Felipe";
client1.number = "45674125632";
client1.agency = "6999";
client1.balance = 0;

console.log(client1);