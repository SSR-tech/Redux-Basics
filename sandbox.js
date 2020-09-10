const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

/**Action */
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

/**Action Creator */
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

/**Reducer */
const cakeReducer = (state = initialCakeState, action) => {
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

const icecreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

/**Redux Store(State) */
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});
const store = createStore(rootReducer);
console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state: ", store.getState()));

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
