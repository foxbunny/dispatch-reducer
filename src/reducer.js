import R from 'ramda'
import { createStore } from 'redux'

const SET_STATE = '@@SET_STATE'

const alterState = (note, fn, scope) => ({
  type: SET_STATE + '/' + note,
  fn,
  scope
})

const reducer = (state, action) =>
  action.type.startsWith(SET_STATE) ?
    R.over(
      action.scope ?
        R.lensPath(action.scope.split('.'))
        : R.lens(R.identity, R.identity),
      action.fn,
      state
    )
    : state

export default (initialState = {}) => {
  const store = createStore(reducer, initialState, window.devToolsExtension && window.devToolsExtension())
  const dispatch = store.dispatch.bind(store)
  store.dispatch = (action, fn, scope) =>
    action.type ?
      dispatch(action)
      : dispatch(alterState(action, fn, scope))
  return store
}
