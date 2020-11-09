export class Remedy {
    id: number
    name: string;
    curesDisease: string;
    description: string;
    cost: number;

    constructor(name, curesDisease, description, cost) {
        this.name = name;
        this.curesDisease = curesDisease;
        this.description = description;
        this.cost = cost
    }
}