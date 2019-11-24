import { sortAlphaNum } from '../sortAlphaNum'

describe('test sortAddressBook', () => {
  test('test sortAddressBook', () => {
    const initialArray: string[] = [
      'A1',
      'A10',
      'A11',
      'A12',
      'A2',
      'A3',
      'A4',
      'B10',
      'B2',
      'F1',
      'F12',
      'F3',
    ]
    const expectedSortedArray: string[] = [
      'A1',
      'A2',
      'A3',
      'A4',
      'A10',
      'A11',
      'A12',
      'B2',
      'B10',
      'F1',
      'F3',
      'F12',
    ]

    expect([].sort(sortAlphaNum)).toEqual([])
    const actualSortedArray = initialArray.sort(sortAlphaNum)
    expect(actualSortedArray).toEqual(expectedSortedArray)
  })
})
