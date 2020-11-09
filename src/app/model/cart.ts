export class Cart {
    id: number
    purchasedBy: number;
    items: string;
    quantities: string;
    totalCost: string;

    constructor(purchasedBy, items, quantities, totalCost) {
        this.purchasedBy = purchasedBy;
        this.items = items;
        this.quantities = quantities;
        this.totalCost = totalCost
    }
}