import {BaseUser} from "./BaseUser";
import {UserData} from "./KycVerification";

export class UserLatvia extends BaseUser {

    eParakstsForLatvia: undefined | boolean

    constructor(userData: UserData) {
        super(userData)
    }
}
