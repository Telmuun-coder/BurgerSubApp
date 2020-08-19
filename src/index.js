import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import burgerReducer from "./redux/reducer";
import orderReducer from "./redux/reducer/orderReducer";
import authReducer from "./redux/reducer/authReducer";

const reducers = combineReducers({
  orderReducer,
  burgerReducer,
  authReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("Middleware: Dispatching=> ", action);
      console.log("Middleware: state before=> ", store.getState());
      const result = next(action);
      console.log("Middleware: state after=> ", store.getState());
      return result;
    };
  };
};
const middlwares = [logger, thunk];
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlwares))
);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
