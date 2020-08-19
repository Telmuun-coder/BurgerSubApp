import React from "react";
import { withRouter } from "react-router-dom";
// import axios from "../../axios.orders";
import { connect } from "react-redux";

import css from "./style.module.css";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import * as actions from "../../redux/actions/orderActions";

class Contact extends React.Component {
  state = {
    name: null,
    phoneNumber: null,
    address: {
      duureg: null,
      bair: null,
    },
    loading: false,
  };
  changeName = (e) => this.setState({ name: e.target.value });
  changePhone = (e) => this.setState({ phoneNumber: e.target.value });
  changeDuureg = (e) => this.setState({ address: { duureg: e.target.value } });
  changeBair = (e) => {
    const bair = e.target.value;
    this.setState((Prev) => {
      const duureg = Prev.address.duureg;
      return { address: { duureg, bair } };
    });
  };
  sendOrder = () => {
    const order = {
      userId: this.props.userId,
      orts: this.props.ingredient,
      dun: this.props.price,
      info: {
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
        address: {
          duureg: this.state.address.duureg,
          bair: this.state.address.bair,
        },
      },
    };
    this.props.sendOrderToFB(order);
  };
  componentDidUpdate() {
    if (
      this.props.newOrderStatus.error === null &&
      this.props.newOrderStatus.finished
    )
      this.props.history.replace("/orders");
  }
  render() {
    return (
      <div className={css.Contact}>
        <div>Үнэ: {this.props.price}₮</div>
        <div>
          {this.props.newOrderStatus.error &&
            `Алдаа гарлаа: ${this.props.newOrderStatus.error}`}
        </div>
        {this.props.newOrderStatus.saving ? (
          <Spinner />
        ) : (
          <div>
            <input
              onChange={this.changeName}
              type="text"
              name="name"
              placeholder="Таны нэр"
            />
            <input
              onChange={this.changePhone}
              type="text"
              name="phoneNumber"
              placeholder="Холбогдох утас"
            />
            <input
              onChange={this.changeDuureg}
              type="text"
              name="Duureg"
              placeholder="Дүүрэг"
            />
            <input
              onChange={this.changeBair}
              type="text"
              name="Bair"
              placeholder="Байр"
            />
            <Button do={this.sendOrder} btnType="Success" text="ИЛГЭЭХ" />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
    ingredient: state.burgerReducer.ingredient,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.authReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendOrderToFB: (newOrder) => dispatch(actions.sendOrder(newOrder)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Contact));
