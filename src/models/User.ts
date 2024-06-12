import * as userHelper from '../helpers/User';

export default class User {
    id: number
    moodleId: string
    firstName: string
    lastName: string
    mail: string
    promo: number|null
    birthDate: Date|null

    constructor(id: number, moodleId: string, firstName: string, lastName: string, mail: string, promo: number|null, birthDate: Date|null) {	
        this.id = id
        this.moodleId = moodleId
        this.firstName = firstName
        this.lastName = lastName
        this.mail = mail
        this.promo = promo
        this.birthDate = birthDate
    }

    getClubs() {
        return userHelper.getUserClubs(this.id);
    }

    static fromJson(json: any): User {
        return new User(json.id, json.moodleId, json.firstName, json.lastName, json.mail, json.promo, json.birthDate);
    }

    static async getAll() {
        return await userHelper.getAllUsers();
    }

    toJson(): any {
        return {
            id: this.id,
            moodleId: this.moodleId,
            firstName: this.firstName,
            lastName: this.lastName,
            mail: this.mail,
            promo: this.promo,
            birthDate: this.birthDate
        };
    }

    static fromJsonArray(json: any): User[] {
        return json.map(User.fromJson);
    }

    static toJsonArray(users: User[]): any {
        return users.map(user => user.toJson());
    }

    static empty(): User {
        return new User(0, "", "", "", "", null, null);
    }
}