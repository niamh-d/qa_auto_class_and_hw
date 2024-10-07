import { UserEstonia } from './UserEstonia'
import { UserLatvia } from './UserLatvia'

export type UserData = {
  name: string
  surname: string
  age: number
  personalCode: string
  phone: string
  address: string
}

export class KycVerification {
  private readonly MIN_AGE_ESTONIA = 16
  private readonly MIN_AGE_LATVIA = 18

  // Estonia specific KYC
  activateMobileIDForEstonia(user: UserEstonia) {
    if (user.age < this.MIN_AGE_ESTONIA) throw new Error('User is too young')
    else user.mobileIDAuthorization = true
  }

  // Latvia specific KYC
  activateEParakstsForLatvia(user: UserLatvia) {
    if (user.age < this.MIN_AGE_LATVIA) throw new Error('User is too young')
    else user.eParakstsForLatvia = true
  }
}
