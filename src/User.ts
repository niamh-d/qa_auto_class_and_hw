type UserData = {
  firstName: string
  lastName: string
  phone: string
  address: string
  age: number
}

export class User {
  firstName: string
  lastName: string
  phone: string
  address: string
  age: number
  consentGiven: boolean | undefined

  constructor(userData: UserData) {
    this.firstName = userData.firstName
    this.lastName = userData.lastName
    this.phone = userData.phone
    this.address = userData.address
    this.age = userData.age
  }
}
