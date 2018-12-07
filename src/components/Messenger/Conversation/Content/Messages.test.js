import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import waitForExpect from 'wait-for-expect'

import configureStore from '../../../../store'
import ComposedMessages, { Messages, MessageBox, Message } from './Messages'

describe('<Messages />', () => {
  it(`should send a message (unit test)`, async () => {
    const username = "semra"
    const conversation = [{from: 'jen', to: 'semra', message: 'this is sooooo fun'}]
    const handleMessageReceipt = jest.fn()
    const fakeApi = {
      sendMessage: jest.fn()
    }
    const wrapper = shallow(<Messages username={username} receiveMessage={handleMessageReceipt} api={fakeApi} conversation={conversation}/>)
    
    await wrapper.find('button').simulate('click')
    expect(wrapper).toMatchSnapshot()
    expect(handleMessageReceipt).toHaveBeenCalled()
    expect(fakeApi.sendMessage).toHaveBeenCalled()

    // 1. shallow the <Messages /> component
    // You can use console.log(wrapper.debug()) to console.log the component that you are testing

    // 2  Mock the api. Hint, the api functions are passed as a defaultProp (look at the bottom of Messages.js),
    // you can override that prop by doing <Messages api={my_mocked_api_object} />

    // 3. Find the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering

    // 4. Click on the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering

    // 5. Assert the 'message was sent' -> 
    //      You can use toHaveBeenCalled on the my_mocked_api_object you passed. 
    //      toHaveBeenCalled needs a mock function https://jestjs.io/docs/en/mock-functions, is your sendMessage a mock?
    //      You have an example here http://airbnb.io/enzyme/#shallow-rendering heads-up!
    //      Enzyme expectations are not camel case,
    //      Jest expectations are camel case (for when you copy&paste :)

    // Final questions:
    // - Is this black-box testing or white-box testing?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    // - What's your level of confidence that the user will be able to send a message?
  })

  it(`should send a message (integration test)`, async () => {
    // 1. shallow or mount the <Messages /> component ?
    //    A) which component, Messages or ComposedMessages?
    //    B) If you mount the component then all the children are rendered. Hint: you need to provide a store.
    
    // 2  Mock the api. Hint, the api functions are passed as a defaultProp (look at the bottom of Messages.js),
    // you can override that prop by doing <Messages api={my_mocked_api_object} />
    const store = configureStore()

    const username = "semra"
    const conversation = [{from: 'jen', to: 'semra', message: 'this is sooooo fun'}]
    const handleMessageReceipt = jest.fn(message => Promise.resolve({id: 1, ...message}))
    const fakeApi = {
      sendMessage: jest.fn(message => Promise.resolve({id: 1, ...message}))
    }
    
    const wrapper = mount(
      <Provider store={store}>
        <ComposedMessages
          username={username}
          receiveMessage={handleMessageReceipt}
          api={fakeApi}
          conversation={conversation}
        />
      </Provider>
    )

    // 3. Add some text to the input
    expect(wrapper.find(Message).length).toEqual(0)
    wrapper.find(MessageBox).props().onChange({ target: { value: 'hi!' }})
    
    // 4. Find the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering
    const button = wrapper.find('button')
    
    // 5. Click on the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering
    // Heads-up! you need to use await on the click button. Or even better use https://www.npmjs.com/package/wait-for-expect
    button.simulate('click')
    
    // 6. You need to update the rendered component using http://airbnb.io/enzyme/docs/api/ShallowWrapper/update.html
    
    // 7. Assert the 'message was sent' -> you can just validate the message you sent is on the Messages list
    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find(Message).length).toBe(1)
      expect(wrapper.find(Message).text()).toEqual('hi!')
    })

    wrapper.find(MessageBox).props().onChange({ target: { value: 'what\'s up?' }})
    button.simulate('click')
    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.find(Message).length).toBe(2)
      expect(wrapper.find(Message).at(1).text()).toEqual('what\'s up?')
    })

    // Final questions:
    // - Is this black-box testing or white-box testing?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    // - What's your level of confidence that the user will be able to send a message?
  })
})
