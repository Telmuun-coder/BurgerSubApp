export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return { type: "LOGOUT" };
};
export const autoLogout = (ms) => {
  return (dispatch) => {
    setTimeout(() => dispatch(logout()), ms);
  };
};
