import { KycVerification } from '../../src/KYC/KycVerification'
import { UserLatvia } from '../../src/KYC/UserLatvia'
import { UserEstonia } from '../../src/KYC/UserEstonia'
import {Contract} from "../../src/KYC/Contract";

describe('KYC test suite', () => {
  describe('UserEstonia', () => {
    let user: UserEstonia
    let kyc: KycVerification
    let contract: Contract

    beforeEach(() => {
      const userData = {
        name: 'Julie',
        surname: 'Andrews',
        age: 16,
        personalCode: 'ABC123',
        phone: '123456',
        address: 'Lai 50, 10133 Tallinn, EE',
      }
      user = new UserEstonia(userData)
      kyc = new KycVerification()
      contract = new Contract()
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

    test('Contract CANNOT be signed if MobileID authorization is NOT activated', () => {
      expect(user.mobileIDAuthorization).toBeUndefined()
      contract.sign(user)
      expect(contract.signed).toBe(false)
    })

    test('Contract CAN be signed if MobileID authorization IS activated', () => {
      kyc.activateMobileIDForEstonia(user)
      expect(user.mobileIDAuthorization).toBe(true)
      expect(contract.signed).toBe(false)
      contract.sign(user)
      expect(contract.signed).toBe(true)
    })
  })

  describe('UserLatvia', () => {
    let user: UserLatvia
    let kyc: KycVerification
    let contract: Contract

    beforeEach(() => {
      const userData = {
        name: 'Julie',
        surname: 'Andrews',
        age: 18,
        personalCode: 'ABC123',
        phone: '123456',
        address: 'Rātslaukums 7, Rīga, LV-1050, LV',
      }
      user = new UserLatvia(userData)
      kyc = new KycVerification()
      contract = new Contract()
    })


    test('eParakstsForLatvia is undefined', () => {

      expect(user.eParakstsForLatvia).toBeUndefined()
    })

    test('activateEParakstsForLatvia activates eParaksts for age 18+', () => {

      user = new UserLatvia(user)
      kyc.activateEParakstsForLatvia(user)

      expect(user.eParakstsForLatvia).toBe(true)
    })

    test('activateEParakstsForLatvia throws error for age <18', () => {

      expect(() => {
        kyc.activateEParakstsForLatvia({...user, age: 17});
      }).toThrow('User is too young')
    })

    test('Contract CANNOT be signed if eParakstsForLatvia is NOT activated', () => {
      expect(user.eParakstsForLatvia).toBeUndefined()
      contract.sign(user)
      expect(contract.signed).toBe(false)
    })

    test('Contract CAN be signed if eParakstsForLatvia IS activated', () => {
      kyc.activateEParakstsForLatvia(user)
      expect(user.eParakstsForLatvia).toBe(true)
      expect(contract.signed).toBe(false)
      contract.sign(user)
      expect(contract.signed).toBe(true)
    })
  })
})
