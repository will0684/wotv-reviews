import fs from "fs"
import { getSortedWOTVData } from './mdParser'
jest.mock("fs")



afterEach(async () => {
  fs.readdirSync.mockReset()
  fs.readFileSync.mockReset()
})

it('reads and parses markdown files with frontmatter', () => {

  fs.readdirSync.mockImplementationOnce(() => {
    return ["thancred.md"]
  })

  fs.readFileSync.mockImplementationOnce(() =>{
    return `---
name: 'Thancred'
date: '2021-01-01'
rarity: 'UR'
imgPath: '/thancred.png'
---

Pros: He got the second best base HP and on average very high res values, he got a 50% damage reduction shield, with Dragoon sub he got extremly high range

Cons: He dont got Defpen and with that limited damage, he got extremly weak magic res and very low utility.

Note: He is free to obtain from the FFXIV Event Coins shop`
  })

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