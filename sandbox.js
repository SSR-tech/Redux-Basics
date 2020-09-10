const redux = require("redux");
const createStore = redux.createStore;

// String constant indecating the type of action.
const BUY_CAKE = "BUY_CAKE";

// Action Creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

// Reducers - Specify how the app's state changes in response to actions sent to the store.

// Function that accepts state and action as arguements, and returns the next state of the application.

// (previousState, action) => newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // Creating a copy of the state. This won't affect the other properties if any.
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

/* 
Redux Store 
    -> Holds application state
    -> Allows access to state via getState()
    -> Allows state to be updated via dispatch(action)
    -> Registers listeners via subscribe(listener)
    -> Handles unregistering of listeners via the function returned by subscribe(listener)
*/
const store = createStore(reducer);
console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
