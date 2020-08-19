const initialState = {
  saving: false,
  signupError: null,
  // --------------------
  token: null,
  userId: null,
  // --------------------
  isLogin: false,
  loginError: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true,
      };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.token,
        userId: action.userId,
        signupError: null,
      };
    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        signupError: action.error.response.data.error.message,
      };
    case "LOGIN_USER_START":
      return {
        ...state,
        isLogin: true,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        isLogin: false,
        token: action.token,
        userId: action.userId,
        loginError: null,
      };
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        isLogin: false,
        loginError: action.error.response.data.error.message,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        error: null,
        userId: null,
      };
    default:
      return state;
  }
};
export default reducer;
