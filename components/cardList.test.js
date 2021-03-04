import { shallow } from 'enzyme'
import CardList from './cardList'
import Card from './card'

const data = [
  {
    type: "unit",
    id: "thancred",
    name: "Thancred",
    rarity: "UR",
    imgPath: "/thancred.png"
  },
  {
    type: "unit",
    id: "rhaldor",
    name: "Rhaldor",
    rarity: "UR",
    imgPath: "/rhaldor.png"
  },
  {
    type: "unit",
    id: "ellshra",
    name: "Ellshra",
    rarity: "UR",
    imgPath: "/ellshra.png"
  },
]

describe("cardlist component", () => {
  it("accepts an array of data and renders the correct amount of cards", () => {
    const arrayLength = data.length
    const wrapper = shallow(
      <CardList data={data}/>
    )
    expect(wrapper.find(Card).length).toEqual(arrayLength)
  })
})