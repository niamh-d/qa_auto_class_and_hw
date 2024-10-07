import { KycVerification } from '../../src/KYC/KycVerification'
import { UserLatvia } from '../../src/KYC/UserLatvia'
import { UserEstonia } from '../../src/KYC/UserEstonia'

describe('KYC test suite', () => {
  describe('UserEstonia', () => {
    let user: UserEstonia
    let kyc: KycVerification

    beforeEach(() => {
      const userData = {
        name: 'Julie',
        surname: 'Andrews',
        age: 16,
        personalCode: 'ABC123',
        phone: '123456',
        address: 'Pikk 12B, Tallinn',
      }
      user = new UserEstonia(userData)
      kyc = new KycVerification()
    })


      test('mobileIDAuthorization is undefined', () => {

          expect(user.mobileIDAuthorization).toBeUndefined()
      })

    test('activateMobileIDForEstonia activates Mobile ID for age 16+', () => {
      kyc.activateMobileIDForEstonia(user)

      expect(user.mobileIDAuthorization).toBe(true)
    })

    test('activateMobileIDForEstonia throws error for age <16', () => {

      expect(() => {
        kyc.activateMobileIDForEstonia({...user, age: 15});
      }).toThrow('User is too young')
    })
  })

  describe('UserLatvia', () => {
    let user: UserLatvia
    let kyc: KycVerification

    beforeEach(() => {
      const userData = {
        name: 'Julie',
        surname: 'Andrews',
        age: 16,
        personalCode: 'ABC123',
        phone: '123456',
        address: 'Sunny st 12B, Riga',
      }
      user = new UserLatvia(userData)
      kyc = new KycVerification()
    })


    test('eParakstsForLatvia is undefined', () => {

      expect(user.eParakstsForLatvia).toBeUndefined()
    })

    test('activateEParakstsForLatvia activates eParaksts for age 18+', () => {

      user = new UserLatvia({...user, age: 18})
      kyc.activateEParakstsForLatvia(user)

      expect(user.eParakstsForLatvia).toBe(true)
    })

    test('activateEParakstsForLatvia throws error for age <18', () => {

      expect(() => {
        kyc.activateEParakstsForLatvia({...user, age: 17});
      }).toThrow('User is too young')
    })
  })
})
