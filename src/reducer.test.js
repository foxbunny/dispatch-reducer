import createStore from './reducer'

test('can create an autodispatching store without exceptions', () => {
  const store = createStore({ foo: 'bar' })
  expect(store.getState()).toEqual({ foo: 'bar' })
})

test('can dispatch reducer directly', () => {
  const store = createStore({ foo: 'bar' })
  store.dispatch('set foo', state => Object.assign({}, state, { foo: 'baz' }))
  expect(store.getState()).toEqual({ foo: 'baz' })
})

test('can dispatch scoped reducers', () => {
  const store = createStore({ foo: { bar: { baz: 1 } } })
  store.dispatch('set scope', state => state + 1, 'foo.bar.baz')
  expect(store.getState()).toEqual({ foo: { bar: { baz: 2 } } })
})
