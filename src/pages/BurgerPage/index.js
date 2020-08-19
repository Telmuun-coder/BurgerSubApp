import React, { Component } from "react";
// import axios from "../../axios.orders";

import Burger from "../../components/Burger";
import BurgerControls from "../../components/BurgerControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";

const names = {
  Bacon: "Гахайн мах",
  Cheese: "Бяслаг",
  Meat: "Үхрийн мах",
  Salad: "Салад",
};

class BurgerPage extends Component {
  state = {
    modal: false,
    loading: false,
    loadingModal: false,
  };
  // componentDidMount = () => {
  //   this.setState({ loading: true });
  //   axios
  //     .get("/orders.json")
  //     .then((res) => {
  //       // let data = Object.entries(res.data);
  //       // data.forEach((e) => console.log(e[1].info.name));
  //     })
  //     .catch((e) => console.log(e))
  //     .finally(() => this.setState({ loading: false }));
  // };
  modalTogle = () =>
    this.setState((PrevState) => {
      return { modal: !PrevState.modal };
    });
  urgeljluul = () => {
    this.props.history.push("/ship");
    this.modalTogle();
  };

  render() {
    return (
      <div>
        <Modal modalTogle={this.modalTogle} modal={this.state.modal}>
          {this.state.loadingModal ? (
            <Spinner />
          ) : (
            <OrderSummary
              modalTogle={this.modalTogle}
              urgeljluul={this.urgeljluul}
              names={names}
            />
          )}
        </Modal>
        {this.state.loading && <Spinner />}
        <Burger />
        <BurgerControls modalTogle={this.modalTogle} />
      </div>
    );
  }
}

export default BurgerPage;
