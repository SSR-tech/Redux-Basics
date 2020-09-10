// String constant indecating the type of action.
const BUY_CAKE = "BUY_CAKE";

// Action Creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}
