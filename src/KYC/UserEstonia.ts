import { UserData } from './KycVerification'
import {BaseUser} from "./BaseUser";

export class UserEstonia extends BaseUser {
  mobileIDAuthorization: undefined | boolean

  constructor(userData: UserData) {
    super(userData)
  }
}