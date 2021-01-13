import { Client } from "./Client.js";

export class Account {
    static numberOfAccounts = 0;

    agency;
    client;

    _balance = 0;

    constructor(agency, client){
        this.agency = agency
        this.client = client;
        Account.numberOfAccounts += 1;
    }

    set client(client) {
        if ( !(client instanceof Client) ) return;
        this.client = client;
        return this.client;
    }

    get client() {
        return this.client;
    }

    get balance() {
        return this._balance
    }

    withdrawn(amountWithdrawn) {
        if (this._balance < amountWithdrawn) return;
        this._balance -= amountWithdrawn;
        return amountWithdrawn;
    }

    deposit(amountDeposited) {
        if(amountDeposited <= 0) return;
        this._balance += amountDeposited;
        return amountDeposited;
    }

    sendPix(ammount, account) {
        const withdrawnValue = this.withdrawn(ammount);
        account.deposit(withdrawnValue);
    }
}