export class Account {
    agency;
    client;

    _balance = 0;

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