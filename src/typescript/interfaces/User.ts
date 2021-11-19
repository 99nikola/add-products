export interface ICompany {
    bs: string;
    catchPhrase: string;
    name: string;
}

export interface IGeo {
    lat: string;
    lng: string
}

export interface IAddress {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: IGeo
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: ICompany
    address: IAddress
}