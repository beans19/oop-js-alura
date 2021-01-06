import {Client} from './Client.js';
import {CurrentAccount} from './CurrentAccount.js';

const client1 = new Client();
client1.name = "Felipe";
client1.number = "45674125632";

console.log(client1);

const client2 = new Client();
client2.name = "Maria";
client2.number = "456231565485";

const client1CurrentAccount = new CurrentAccount();
client1CurrentAccount.agency = "9666";

client1CurrentAccount.deposit(450);

const withdrawnValue= client1CurrentAccount.withdrawn(150);