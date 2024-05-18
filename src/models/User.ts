export default class User {
    id: string;
    name: string;
    email: string;
    role: string;
    token: string;

    constructor(id: string, name: string, email: string, role: string, token: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.token = token;
    }

    static fromJson(json: any): User {
        return new User(json.id, json.name, json.email, json.role, json.token);
    }

    toJson(): any {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            role: this.role,
            token: this.token,
        };
    }

    static fromJsonArray(json: any): User[] {
        return json.map(User.fromJson);
    }

    static toJsonArray(users: User[]): any {
        return users.map(user => user.toJson());
    }
}