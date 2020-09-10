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
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, // Creating a copy of the state. This won't affect the other properties if any.
        numOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};
