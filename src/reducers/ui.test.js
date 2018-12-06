import {
  toggleMessageDetail,
  TOGGLE_MESSAGE_DETAIL,
} from '../actions/ui'

import uiReducer, { getInitialState } from './ui'
import { INSPECT_MAX_BYTES } from 'buffer';

/*

What BEHAVIOUR do we have to test?

Task 1, write the describe and its
Task 2, implement the expectations

*/
describe('UI reducer', () => {
  it(`
    should return the initial state if the state passed in is undefined and the action is an empty object
  `, () => {
    expect(uiReducer(undefined, {})).toEqual({isMessageDetailOpen: false})
  })

  it(`
    should return the current state unchanged if the action.type is unrecognised
  `, () => {
    const state = {isMessageDetailOpen: false}
    expect(uiReducer(state, {type: 'LOG_IN'}).isMessageDetailOpen).toBe(false)
  })

  it(`
    should return the new state if the action is relevant
  `, () => {
    const state = {isMessageDetailOpen: false}
    expect(uiReducer(state, {type: 'TOGGLE_MESSAGE_DETAIL'}).isMessageDetailOpen).toBe(true)
  })
})
