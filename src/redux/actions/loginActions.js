import axios from "axios";
import { autoLogout } from "./logoutActions";
export const loginUser = (email, password) => {
  return (dispatch) => {
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    dispatch(loginUserStart());
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXeI-OQDc8ErWtejviKaJQCqFaRk9pSdg",
        data
      )
      .then((res) => {
        const token = res.data.idToken;
        const userId = res.data.localId;
        const expiresIn = res.data.expiresIn;
        const expiresDate = new Date(
          new Date().getTime() + parseInt(expiresIn * 1000)
        );
        const refreshToken = res.data.refreshToken;
        // console.log("Loot at me sexy boy!", res.data);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("expiresDate", expiresDate);
        localStorage.setItem("refreshToken", refreshToken);
        dispatch(loginUserSuccess(token, userId));
        dispatch(autoLogout(expiresIn * 1000));
      })
      .catch((e) => dispatch(loginUserError(e)));
  };
};
export const loginUserStart = () => ({
  type: "LOGIN_USER_START",
});
export const loginUserSuccess = (token, userId) => {
  return { type: "LOGIN_USER_SUCCESS", token, userId };
};
export const loginUserError = (error) => ({
  type: "LOGIN_USER_ERROR",
  error,
});
