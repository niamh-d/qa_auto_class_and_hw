import { User } from '../src/User'
import { Processor } from '../src/processor'

describe('Processor Class', () => {
  describe('Tests for consent', () => {

  let user: User
  let processor: Processor


    beforeEach(() => {

    user = new User('Peeter', 'Tamm', '12345', '12 Testija tn., Tallinn')
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
})
})