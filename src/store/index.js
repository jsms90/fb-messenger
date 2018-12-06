import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'

const addLoggerMiddleware = ({getState}) => next => action => {
    console.group(action.type)
    console.log('prev state', getState())
    console.log('action', action)
    const returnValue = next(action)
    console.log('next state', getState())
    console.groupEnd(action.type)
    return returnValue
  }

const addThunkMiddleware = store => rawDispatch => action => {
  if (typeof action === "function") {
    action(rawDispatch)
  } else {
    rawDispatch(action) // i.e. continue as normal
  }
}

const configureStore = () => {
  const store = createStore(
    reducers
  )

    store.dispatch = addLoggerMiddleware(store)(store.dispatch)
    store.dispatch = addThunkMiddlware(store)
  // store.dispatch = appplyMiddlware(addLoggerMiddleware, addThunkMiddleware)

  return store
}

export default configureStore
