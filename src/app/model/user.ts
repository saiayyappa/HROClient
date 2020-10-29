export class User {
    id: number;
    name: String;
    email: String;
    password: String;
    role: String;

    constructor(name, email, role, password?, id?) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role
    }
}