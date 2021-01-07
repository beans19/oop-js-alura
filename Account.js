import { Client } from "./Client.js";

export class Account {
    agency;
    
    _client;
    _balance = 0;

    set client(client) {
        if ( !(client instanceof Client) ) return;
        this._client = client;
        return this._client;
    }

    get client() {
        return this._client;
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