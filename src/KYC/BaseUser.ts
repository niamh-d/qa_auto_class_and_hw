import {UserData} from "./KycVerification";

export class BaseUser {
    name: string
    surname: string
    age: number
    personalCode: string
    phone: string
    address: string

    constructor(userData: UserData) {
        this.name = userData.name
        this.surname = userData.surname
        this.age = userData.age
        this.personalCode = userData.personalCode
        this.phone = userData.phone
        this.address = userData.address
    }
}