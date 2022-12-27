jest.mock('../src/settings', () => jest.requireActual('./__mocks__/settings').default)

import { getAccountByAlias, getAccountByHost } from '../src/utils'
import { TestAccountBasic, TestAccountOpen } from './__mocks__/settings'

const kAccountNotFound = 'NotExistingAlias'

describe('Utils', () => {
    test('getAccountByAlias ok', () => {
        expect(getAccountByAlias(TestAccountOpen.alias)).toEqual(TestAccountOpen)
        expect(getAccountByAlias(TestAccountBasic.alias)).toEqual(TestAccountBasic)
    })
    test('getAccountByAlias not found', () => {
        expect(() => getAccountByAlias(kAccountNotFound)).toThrow(new Error(`No accounts found with alias: ${kAccountNotFound}`))
    })
    test('getAccountByAlias invalid input', () => {
        expect(getAccountByAlias(null)).toBeNull()
    })

    test('getAccountByHost ok', () => {
        expect(getAccountByHost(TestAccountOpen.host)).toEqual(TestAccountOpen)
        expect(getAccountByHost(TestAccountBasic.host)).toEqual(TestAccountBasic)
    })
    test('getAccountByHost not found', () => {
        expect(getAccountByHost(kAccountNotFound)).toBeNull()
    })
    test('getAccountByHost invalid input', () => {
        expect(getAccountByHost(null)).toBeNull()
    })
})

export { }