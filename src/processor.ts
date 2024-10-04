import { User } from './User'

export class Processor {
  giveConsent(userInput: User): void {
    userInput.consentGiven = true
  }

  checkConsent(userInput: User):boolean {
    return userInput.consentGiven === true
  }
}