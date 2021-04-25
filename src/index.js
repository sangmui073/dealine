import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/jquery/dist/jquery.slim";
// import "../node_modules/popper.js/dist/popper";
// import "../node_modules/bootstrap/dist/js/bootstrap";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./redux/reducer/rootReducer";
import thunk from "redux-thunk";
//tạo store tổng để kết nối vs rootReducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeEnhancers(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
