export class Cart {
    id: number
    purchasedBy: number;
    items: String;
    quantities: String;
    totalCost: String;

    constructor(purchasedBy, items, quantities, totalCost) {
        this.purchasedBy = purchasedBy;
        this.items = items;
        this.quantities = quantities;
        this.totalCost = totalCost
    }
}