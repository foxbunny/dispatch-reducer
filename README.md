# dispatch-reducer

This repository is a demonstration of a pattern based on Flow/Redux
architecture we call *dispatched reducers*.

## Overview

In a typical Redux application, reducers are in charge of modifying the
applcation state. Reducers modify the state by handling actions, which are
dispatched by the application code. While this approach has proven quite
effective from the architectural standpoint, it introduces a lot of indirection
and complex set-up.

In this pattern, the entire application state is handled by a single
reducer-action pair and the state change is not done in the reducer but in a
function that is included in the action object. We are essentially shuffling the
Redux architecture by moving the code that would normally live in a reducer into
the action payload.

This solves two issues the author of this code saw with Redux:

- complexity of set-up is reduced (pun intentional) by having a single
  reducer-action pair
- the code that changes the state now lives closer to the application code, thus
  removing the indirection

As an indirect result of using this pattern, the author believes we can move
faster because we are able to write reducers without having to write matching
actions and the boilerplate for matching against them.

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