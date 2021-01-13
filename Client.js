export class Client {
    name;
    _number;

    get _number(){
        return this._number;
    }

    constructor(name, number){
        this.name = name;
        this._number = number;
    }
}