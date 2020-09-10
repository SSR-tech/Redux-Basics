const redux = require("redux");
const createStore = redux.createStore;

/**Action */
const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

const initialState = {
  numOfCakes: 10,
};

/**Reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

/**Redux Store(State) */
const store = createStore(reducer);
console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
