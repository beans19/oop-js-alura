export class CurrentAccount {
    agency;
    _balance = 0;

    withdrawn(amountWithdrawn) {
        if (this._balance < amountWithdrawn) return;
        this._balance -= amountWithdrawn;
        return amountWithdrawn;
    }

    deposit(amountDeposited) {
        if(amountDeposited < 0) return;
        this._balance += amountDeposited;
        return amountDeposited;
        
    }
}