import { shallow } from 'enzyme'
import Card from './card'

describe("card component", () => {
  it("renders without crashing", () => {
    shallow(
      <Card
        type="unit"
        id="thancred"
        name="thancred"
        rarity="UR"
        imgPath="/thancred.png"
      />
    );
  });
  
  it("renders correct name field value when passed through props", () => {
    const wrapper = shallow(
      <Card
        type="unit"
        id="thancred"
        name="Thancred"
        rarity="UR"
        imgPath="/thancred.png"
      />
    );
    const name = <p className="text-lg font-bold">Thancred</p>;
    expect(wrapper.contains(name)).toEqual(true);
  });
  
  it("renders correct rarity field value when passed through props", () => {
    const wrapper = shallow(
      <Card
        type="unit"
        id="thancred"
        name="Thancred"
        rarity="UR"
        imgPath="/thancred.png"
      />
    );
    const name = <p className="text-lg font-bold">UR</p>;
    expect(wrapper.contains(name)).toEqual(true);
  });
})