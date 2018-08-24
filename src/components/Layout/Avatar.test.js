import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import Avatar  from './Avatar'

Enzyme.configure({ adapter: new Adapter() })

describe('<Avatar />', () => {
  it('renders Avatar', () => {
    const wrapper = shallow(<Avatar />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
    console.log(<Avatar />)
  })
})
