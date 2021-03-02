import mock from 'mock-fs'
import { getSortedWOTVData } from './mdParser'

beforeEach(async () => {
  // Creates an in-memory file system 
  mock({
    'cards': {
      'darkrose.md': 'hello world!'
    },
    'units': {
      'thancred.md': mock.file({
        content:
          `
          ---
          name: "Thancred"
          date: "2021-01-01"
          rarity: "UR"
          imgPath: "/thancred.png"
          ---
          
          Pros: He got the second best base HP and on average very high res values, he got a 50% damage reduction shield, with Dragoon sub he got extremly high range
          
          Cons: He dont got Defpen and with that limited damage, he got extremly weak magic res and very low utility.
          
          Note: He is free to obtain from the FFXIV Event Coins shop
          `
      })
    }
  })
})

afterEach(async () => {
  mock.restore()
})

it('reads and parses markdown files with frontmatter', () => {

  const expectedResult = [{
    id: 'thancred',
    name: 'Thancred',
    date: '2021-01-01',
    rarity: 'UR',
    imgPath: '/thancred.png'
  }]
  const sortedData = getSortedWOTVData('units')
  expect(sortedData).toEqual(expectedResult)
})