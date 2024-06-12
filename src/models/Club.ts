import * as clubHelper from '../helpers/Club';
import User from './User';

export default class Club {
    id: number
    name: string
    description: string
    type: string
    creation: string
    logoUrl: string
    website: string
    facebook: string
    instagram: string
    twitter: string
    viewable: string
    members: User[] = []

    constructor(id: number, name: string, description: string, type: string, creation: string, logoUrl: string, website: string, facebook: string, instagram: string, twitter: string, viewable: string) {
        this.id = id
        this.name = name
        this.description = description
        this.type = type
        this.creation = creation
        this.logoUrl = logoUrl
        this.website = website
        this.facebook = facebook
        this.instagram = instagram
        this.twitter = twitter
        this.viewable = viewable
    }

    static fromJson(json: any): Club {
        return new Club(json.id, json.name, json.description, json.type, json.creation, json.logoUrl, json.website, json.facebook, json.instagram, json.twitter, json.viewable);
    }

    static async getAll() {
        return await clubHelper.getAllClubs();
    }

    toJson(): any {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            type: this.type,
            creation: this.creation,
            logoUrl: this.logoUrl,
            website: this.website,
            facebook: this.facebook,
            instagram: this.instagram,
            twitter: this.twitter,
            viewable: this.viewable
        };
    }

    static fromJsonArray(json: any): Club[] {
        return json.map(Club.fromJson);
    }

    static toJsonArray(clubs: Club[]): any {
        return clubs.map(club => club.toJson());
    }

    static empty(): Club {
        return new Club(0, "", "", "", "", "", "", "", "", "", "");
    }
}

export interface ClubData {
    name: string;
    description: string;
    type: string;
    creation: string;
    logoUrl: string;
    website: string;
    facebook: string;
    instagram: string;
    twitter: string;
    viewable: boolean;
    presId: number|null;
}

