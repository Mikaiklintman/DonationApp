export default class Donation {
    constructor(name, date, amount, amountGoal) {
        this.mame = name;
        this.date = date;
        this.amount = amount;
        this.amountGoal = amountGoal;
    }
    addAmount(gorilla) {
        this.amount += gorilla;
    }
}