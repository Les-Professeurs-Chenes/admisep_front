import {ClubData} from './Club'
import Role from './Role'

export default class ClubPosition {
    id: number
    fromYear: number
    toYear: number
    position: string
    roleId: number
    userId: number
    parentId: number|null
    clubId: number
    club: ClubData
    role: Role

    constructor(id: number, fromYear: number, toYear: number, position: string, roleId: number, userId: number, parentId: number|null, clubId: number, club: ClubData, role: Role) {
        this.id = id
        this.fromYear = fromYear
        this.toYear = toYear
        this.position = position
        this.roleId = roleId
        this.userId = userId
        this.parentId = parentId
        this.clubId = clubId
        this.club = club
        this.role = role
    }

    static fromJson(json: any): ClubPosition {
        return new ClubPosition(json.id, json.fromYear, json.toYear, json.position, json.roleId, json.userId, json.parentId, json.clubId, json.club, json.role);
    }

    static fromJsonArray(json: any): ClubPosition[] {
        return json.map(ClubPosition.fromJson);
    }

    toJson(): any {
        return {
            id: this.id,
            fromYear: this.fromYear,
            toYear: this.toYear,
            position: this.position,
            roleId: this.roleId,
            userId: this.userId,
            parentId: this.parentId,
            clubId: this.clubId,
            club: this.club,
            role: this.role
        };
    }

    static toJsonArray(clubPositions: ClubPosition[]): any {
        return clubPositions.map(clubPosition => clubPosition.toJson());
    }
}