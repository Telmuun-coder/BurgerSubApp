const initialState = {
  //Order State
  orders: [],
  loading: false,
  error: null,
  //Contact state
  newOrder: {
    saving: false,
    finished: false,
    error: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ORDER_START":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_ORDER_SUCCESS":
      return {
        ...state,
        orders: action.data,
        loading: false,
        error: null,
      };
    case "LOAD_ORDER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "SEND_ORDER_START":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: true,
        },
      };
    case "SEND_ORDER_SUCCESS":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: false,
          finished: true,
        },
      };
    case "SEND_ORDER_ERROR":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: false,
          finished: true,
          error: action.error,
        },
      };
    default:
      return state;
  }
};
export default reducer;
