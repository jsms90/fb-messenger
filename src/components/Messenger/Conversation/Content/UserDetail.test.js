import React from 'react'
import { shallow, mount } from 'enzyme'
import UserDetail from './UserDetail'
import { shallowToJson } from 'enzyme-to-json'

describe('<UserDetail />', () => {
  it('renders properly',() => {
    const wrapper = shallow(<UserDetail secondsAgo={1} toggleModal={() =>{}} />)

    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
