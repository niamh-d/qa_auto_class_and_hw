import { User } from './User'

export class Processor {
  private readonly AGE_MAJORITY_YRS = 18

  public giveConsent(userInput: User): void {
    if (!this.verifyAge(userInput)) return

    userInput.consentGiven = true
  }

  public revokeConsent(userInput: User): void {
    userInput.consentGiven = false
  }

  public checkConsent(userInput: User): boolean {
    return userInput.consentGiven === true
  }

  private verifyAge(userInput: User): boolean {
    return userInput.age >= this.AGE_MAJORITY_YRS
  }
}
