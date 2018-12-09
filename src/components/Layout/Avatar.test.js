import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
// import Adapter from 'enzyme-adapter-react-16'
import Avatar  from './Avatar'

// TASK 1: configure the Enzyme adapter. Hint https://airbnb.io/enzyme/
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Avatar />', () => {
  it('renders Avatar', () => {
    // You can use console.log(wrapper.debug()) to console.log the component that you are testing
    // TASK 2: Shallow the Avatar component
    //    Hint:  https://github.com/adriantoine/enzyme-to-json#helper
    // TASK 3: Create the snapshot
    const wrapper = shallow(<Avatar username="my-lovely-username"/>)
    console.log(wrapper.debug())
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
