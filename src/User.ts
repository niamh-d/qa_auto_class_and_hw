export class User {
  firstName: string
  lastName: string
  phone: string
  address: string
  consentGiven: boolean | undefined

  constructor(firstName: string, lastName: string, phone: string, address: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.phone = phone
    this.address = address
  }

}