import { Client } from './Client.js';
import { Account } from './Account.js';

const client1 = new Client();
client1.name = 'Felipe';
client1.number = 45674125632;

const client2 = new Client();
client2.name = 'Maria';
client2.number = 456231565485;

const account1 = new Account();
account1.agency = 666;
account1.client = client1;

const account2 = new Account();
account2.agency = 777;
account2.client = new Client();
account2.client.name = 'Maria';
account2.client.number = '25136545698';

let income = 500;
let pixValue = 200;

// time to pay rent! i'm gonna send Maria a pix!
account1.deposit(income);
account1.sendPix(pixValue, account2);

console.log('Account 1', account1);
console.log('Account 2', account2);