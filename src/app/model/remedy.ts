export class Remedy {
    id: number
    name: number;
    curesDisease: String;
    description: String;
    cost: number;

    constructor(name, curesDisease, description, cost) {
        this.name = name;
        this.curesDisease = curesDisease;
        this.description = description;
        this.cost = cost
    }
}