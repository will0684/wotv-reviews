import { shallow } from 'enzyme'
import ListSection from './listSection'

describe("list section component", () => {
  it("renders without crashing", () => {
    shallow(
      <ListSection
        heading="some heading"
      />
    );
  });
  
  it("renders correct heading when passed through props", () => {
    const wrapper = shallow(
      <ListSection
        heading="some heading"
      />
    );
    const heading = <h2 className="my-4 mx-0">some heading</h2>;
    expect(wrapper.contains(heading)).toEqual(true);
  });
})