import { Client } from './Client.js';
import { Account } from './Account.js';


const client1 = new Client('Felipe', 777);
const account1 = new Account(666, client1);

const client2 = new Client('Maria', 666);
const account2 = new Account(777, client2);

let income = 500;
let pixValue = 200;

// time to pay rent! i'm gonna send Maria a pix!
account1.deposit(income);
account1.sendPix(pixValue, account2);

console.log('Account 1', account1);
console.log('Account 2', account2);
console.log(Account.numberOfAccounts);