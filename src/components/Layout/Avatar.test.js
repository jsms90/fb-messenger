import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Avatar  from './Avatar'

describe('<Avatar />', () => {
  it('renders Avatar', () => {
    const wrapper = shallow(<Avatar />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
