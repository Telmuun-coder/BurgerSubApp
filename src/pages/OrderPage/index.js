import React from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/actions/orderActions";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";

class OrderPage extends React.Component {
  componentDidMount() {
    this.props.loadOrder(this.props.userId);
    // this.setState({ loading: true });
    // axios
    //   .get("/orders.json")
    //   .then((res) => {
    //     this.setState({ orders: Object.entries(res.data).reverse() });
    //   })
    //   .catch((e) => console.log(e))
    //   .finally(() => this.setState({ loading: false }));
  }
  render() {
    // console.log("Oooooorder: ", JSON.stringify(this.state.orders[0]));
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          this.props.orders.map((e) => <Order key={e[0]} data={e[1]} />)
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    userId: state.authReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadOrder: (userId) => dispatch(actions.loadOrder(userId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
