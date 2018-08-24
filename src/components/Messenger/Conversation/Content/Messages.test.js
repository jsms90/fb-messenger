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
    // 1. shallow the <Messages /> component

    // 2  Mock the api. Hint, the api functions are passed as a defaultProp (look at the bottom of Messages.js),
    // you can override that prop by doing <Messages api={my_mocked_api_object} />

    // 3. Find the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering

    // 4. Click on the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering

    // 5. Assert the 'message was sent' -> you can use toHaveBeenCalled on the my_mocked_api_object you passed
    //      You have an example here http://airbnb.io/enzyme/#shallow-rendering heads-up!
    //      Enzyme expectations are not camel case,
    //      Jest expectations are camel case (for when you copy&paste :)

  })

  it(`should send a message (integration test)`, async () => {

  })
})
