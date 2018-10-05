import {
  toggleMessageDetail,
} from '../actions/ui'

import ui from './ui'

/*

What BEHAVIOUR do we have to test?

Task 1, write the describe and its
Task 2, implement the expectations

*/
describe('UI reducer', () => {
  it(`should return the default state if no state is provided`, () => {
    const state = ui(undefined, toggleMessageDetail())

    expect(state).toEqual({ isMessageDetailOpen: true })
  })

  it(`should return a new state if it receives a TOGGLE_MESSAGE_DETAIL action`, () => {

  })

  it(`should return the current state if the action it receives is not handled by the reducer`, () => {

  })
})
