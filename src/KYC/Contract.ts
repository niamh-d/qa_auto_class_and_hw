import {BalticBaseUser} from "./KycVerification";

class Contract {
    title = null
    signed = false

    sign(user: BalticBaseUser): void {
        if(user.mobileIDAuthorization || user.eParakstsForLatvia) this.signed = true;
    }
}
