import { User } from '../src/User'
import { Processor } from '../src/Processor'

describe('Processor Class', () => {
  describe('Tests for consent', () => {
    let user: User
    let processor: Processor

    beforeEach(() => {
      const userData = {
        firstName: 'Peeter',
        lastName: 'Tamm',
        phone: '12345',
        address: '12 Testija tn., Tallinn',
        age: 21,
      }
      user = new User(userData)
      processor = new Processor()
    })

    test('Not processed user should initially have undefined consent', () => {
      expect(user.consentGiven).toBeUndefined()
    })

    test('Processor can give consent to user', () => {
      processor.giveConsent(user)

      expect(user.consentGiven).toBe(true)
    })

    test('Processor should verify failed consent when it is not given', () => {
      const actual = processor.checkConsent(user)

      expect(actual).toBeFalsy()
    })

    test('A user younger than 18 cannot give consent; consentGiven field will be undefined and checkConsent method will return false', () => {
      const youngerUser = {
        ...user,
        age: 17,
      }

      processor.giveConsent(youngerUser)

      expect(youngerUser.consentGiven).toBeUndefined()
      expect(processor.checkConsent(youngerUser)).toBe(false)
    })

    test('A user aged exactly 18 can give consent; consentGiven field will be true and checkConsent method will return true', () => {
      const userAged18 = {
        ...user,
        age: 18,
      }

      processor.giveConsent(userAged18)

      expect(userAged18.consentGiven).toBe(true)
      expect(processor.checkConsent(userAged18)).toBe(true)
    })

    test('A user older than 18 can give consent; consentGiven field will be true and checkConsent method will return true', () => {
      // default age for user = 21
      processor.giveConsent(user)

      expect(user.consentGiven).toBe(true)
      expect(processor.checkConsent(user)).toBe(true)
    })

    test('revokeConsent method revokes consent; consentGiven field will be false and checkConsent method will return false', () => {
      processor.giveConsent(user)

      expect(user.consentGiven).toBe(true)

      processor.revokeConsent(user)

      expect(user.consentGiven).toBe(false)
      expect(processor.checkConsent(user)).toBe(false)
    })
  })
})
