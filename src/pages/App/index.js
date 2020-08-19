import React from "react";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import Sidebar from "../../components/Sidebar";
import OrderPage from "../OrderPage";
import { Switch, Route, Redirect } from "react-router-dom";
import ShippingPage from "../ShippingPage";
import Login from "../LoginPage";
import Signup from "../SignupPage";
import Logout from "../../components/Logout";
import { connect } from "react-redux";
import { loginUserSuccess } from "../../redux/actions/loginActions";
import * as actions from "../../redux/actions/logoutActions";

class App extends React.Component {
  state = {
    showSidebar: false,
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expiresDate = new Date(localStorage.getItem("expiresDate"));
    const now = new Date();
    if (token) {
      if (expiresDate > now) {
        //tokenii hugatsaa duusagui
        this.props.autoLogin(token, userId);
        //tokenii hugatsaa duusah hugatsaag tootsooj autlogout action duudaj baina
        this.props.autoLogout(expiresDate.getTime() - new Date().getTime());
      } else {
        //tokenii hugatsaa duussan tul logout hiine
        this.props.logout();
      }
    }
  }
  togleSidebar = () => {
    this.setState((PrevState) => {
      return { showSidebar: !PrevState.showSidebar };
    });
  };
  render() {
    return (
      <div className="App">
        <Toolbar togleSidebar={this.togleSidebar} />
        <Sidebar
          showSidebar={this.state.showSidebar}
          togleSidebar={this.togleSidebar}
        />
        <main className={css.main}>
          {this.props.userId ? (
            <Switch>
              <Route path="/logout" component={Logout} />
              <Route path="/orders" component={OrderPage} />
              <Route path="/ship" component={ShippingPage} />
              <Route path="/" component={BurgerPage} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Redirect to="login" />
            </Switch>
          )}
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userId: state.authReducer.userId,
});
const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userId) => dispatch(loginUserSuccess(token, userId)),
    logout: () => dispatch(actions.logout()),
    autoLogout: (ms) => dispatch(actions.autoLogout(ms)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
