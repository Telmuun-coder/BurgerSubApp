import axios from "axios";
export const signupUser = (email, password) => {
  return (dispatch) => {
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    dispatch(signupUserStart());
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXeI-OQDc8ErWtejviKaJQCqFaRk9pSdg",
        data
      )
      .then((res) => dispatch(signupUserSuccess(res.data)))
      .catch((e) => dispatch(signupUserError(e)));
  };
};
export const signupUserStart = () => ({
  type: "SIGNUP_USER_START",
});
export const signupUserSuccess = (data) => {
  const token = data.idToken;
  const userId = data.localId;
  localStorage.setItem("token", token);
  localStorage.setItem("userId", userId);
  return { type: "SIGNUP_USER_SUCCESS", token, userId };
};
export const signupUserError = (error) => ({
  type: "SIGNUP_USER_ERROR",
  error,
});
