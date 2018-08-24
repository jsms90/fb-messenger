import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { shallowToJson } from 'enzyme-to-json'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from '../../../../store'
import ConnectedMessage, { Messages, MessageBox, Message } from './Messages'

Enzyme.configure({ adapter: new Adapter() })

describe('<Messages />', () => {
  it(`should send a message (unit test)`, async () => {
    // 1. render Messages component
    // 2. find button
    // 3. click on the button
    // 4. assert the 'message was sent' -> you can use toHaveBeenCalled
  })

  it(`should send a message (integration test)`, async () => {

  })
})
