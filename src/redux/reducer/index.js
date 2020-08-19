const initialState = {
  ingredient: {
    Cheese: 0,
    Meat: 0,
    Salad: 0,
    Bacon: 0,
  },
  totalPrice: 1000,
};
const prices = { Cheese: 2500, Meat: 3500, Salad: 2500, Bacon: 3000 };
const Reducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ingredient: {
        ...state.ingredient,
        [action.ortsNer]: state.ingredient[action.ortsNer] + 1,
      },
      totalPrice: state.totalPrice + prices[action.ortsNer],
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    return {
      ingredient: {
        ...state.ingredient,
        [action.ortsNer]: state.ingredient[action.ortsNer] - 1,
      },
      totalPrice: state.totalPrice - prices[action.ortsNer],
    };
  }
  return state;
};

export default Reducer;
