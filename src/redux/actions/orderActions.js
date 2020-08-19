import axios from "../../axios.orders";
export const loadOrder = (userId) => {
  return (dispatch, getState) => {
    //Захиалгуулыг татаж эхэлснийг мэдэгдэж байна.
    dispatch(loadorderStart());
    const token = getState().authReducer.token;
    axios
      .get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((res) => {
        //Амжиллтай ирсэн датаг хадгална
        dispatch(loadorderSuccess(Object.entries(res.data).reverse()));
      })
      .catch((e) => dispatch(loadorderError(e)));
  };
};
export const loadorderStart = () => ({
  type: "LOAD_ORDER_START",
});
export const loadorderSuccess = (data) => ({
  type: "LOAD_ORDER_SUCCESS",
  data,
});
export const loadorderError = (error) => ({
  type: "LOAD_ORDER_ERROR",
  error,
});
export const sendOrder = (newOrder) => {
  return (dispatch, getState) => {
    dispatch(sendOrderStart());
    const token = getState().authReducer.token;
    axios
      .post(`/orders.json?auth=${token}`, newOrder)
      .then((r) => dispatch(sendOrderSuccess()))
      .catch((e) => dispatch(sendOrderError(e)));

    // finally {
    //   this.setState({ loading: false });
    //   this.props.history.replace("/orders");
    // }
  };
};
export const sendOrderStart = () => ({ type: "SEND_ORDER_START" });
export const sendOrderSuccess = () => ({ type: "SEND_ORDER_SUCCESS" });
export const sendOrderError = (error) => ({ type: "SEND_ORDER_ERROR", error });
