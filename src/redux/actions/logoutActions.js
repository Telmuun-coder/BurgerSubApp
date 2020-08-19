export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expiresDate");
  localStorage.removeItem("refreshToken");

  return { type: "LOGOUT" };
};
export const autoLogout = (ms) => {
  return (dispatch) => {
    setTimeout(() => dispatch(logout()), ms);
  };
};
