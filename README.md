# dispatch-reducer

This repository is a demonstration of an architecture based on Flow/Redux
pattern we call dispatched reducer.

## Overview

In this pattern, the entire application state is handle by a single
reducer-action pair and the state change is not done in the reducer but in a
function that is included in the action object's payload. We are therefore
dispatching reducers instead of pure data.

The advantages of using this pattern are:

- It is much simpler to set up: only one action and one reducer
- The code that changes the state lives close te actual components that initiate
  the state change.

One disadvantage of using this pattern is that it violates the principle of
least autority by surrendering the state to the code outside the reducers. There
could be other unintended effects that the author has overlooked.

## Implementation notes

Start by looking at the code in `src/TodoInput.js` and `src/TodoList.js`. This
is where the reducers are dispatched. The `dispatch()` function referenced in
these modules is a modified version of `store.dispatch()` which provides some
invocation sugar to avoid boilerplate.

See the `reducer.js` file in the `src` directory for the actual reducers and the
modified version of `dispatch()`. There are also accompanying tests in
`reducer.test.js` which should make the intended API clearer.