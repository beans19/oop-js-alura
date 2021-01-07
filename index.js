import { Client } from './Client.js';
import { Account } from './Account.js';


const account1 = new Account();
account1.agency = 666;
account1.client = new Client();
account1.client.name = 'Felipe';
account1.client.number = 777;

const account2 = new Account();
account2.agency = 777;
account2.client = new Client();
account2.client.name = 'Maria';
account2.client.number = 666;

let income = 500;
let pixValue = 200;

// time to pay rent! i'm gonna send Maria a pix!
account1.deposit(income);
account1.sendPix(pixValue, account2);

console.log('Account 1', account1);
console.log('Account 2', account2);