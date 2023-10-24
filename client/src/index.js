import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
// he does like that connect all child compnents to store to access all data thorugh this
// like main point to endless tree branches ko data mile
import {
  legacy_createStore as createStore,
  applyMiddleware,
  // thunk is exmaple of this middleware for using or appyling this on async programming
  // Redux is a way to modify or intercept
  // actions before they reach the reducers.
  //  It allows you to perform tasks like logging,
  //   making asynchronous API calls, or handling side
  //    effects before an action is processed by the reducers
  compose,
  // its like store enhancers to redux store wiht help of compose middelware funcion we used
} from "redux";

import thunk from "redux-thunk";
import App from "./App";
import { reducers } from "./reducers/index";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
