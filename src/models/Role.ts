export default class Role{
    id: number
    name: string
    subrole: string
    updateClub: number
    deleteClub: number
    addMembers: number
    removeMembers: number
    doPassation: number
    accessCvec: number
    clubId: number

    constructor(id: number, name: string, subrole: string, updateClub: number, deleteClub: number, addMembers: number, removeMembers: number, doPassation: number, accessCvec: number, clubId: number) {
        this.id = id
        this.name = name
        this.subrole = subrole
        this.updateClub = updateClub
        this.deleteClub = deleteClub
        this.addMembers = addMembers
        this.removeMembers = removeMembers
        this.doPassation = doPassation
        this.accessCvec = accessCvec
        this.clubId = clubId
    }

    static fromJson(json: any): Role {
        return new Role(json.id, json.name, json.subrole, json.updateClub, json.deleteClub, json.addMembers, json.removeMembers, json.doPassation, json.accessCvec, json.clubId);
    }

    static fromJsonArray(json: any): Role[] {
        return json.map(Role.fromJson);
    }

    toJson(): any {
        return {
            id: this.id,
            name: this.name,
            subrole: this.subrole,
            updateClub: this.updateClub,
            deleteClub: this.deleteClub,
            addMembers: this.addMembers,
            removeMembers: this.removeMembers,
            doPassation: this.doPassation,
            accessCvec: this.accessCvec,
            clubId: this.clubId
        };
    }

    static toJsonArray(roles: Role[]): any {
        return roles.map(role => role.toJson());
    }

    static empty(): Role {
        return new Role(0, "", "", 0, 0, 0, 0, 0, 0, 0);
    }

    static async getAll(): Promise<Role[]> {
        return await fetch('http://localhost:3000/roles').then(response => response.json()).then(Role.fromJsonArray);
    }

    static async getById(id: number): Promise<Role> {
        return await fetch(`http://localhost:3000/roles/${id}`).then(response => response.json()).then(Role.fromJson);
    }

    static async create(role: Role): Promise<Role> {
        return await fetch('http://localhost:3000/roles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(role)
        }).then(response => response.json()).then(Role.fromJson);
    }
}