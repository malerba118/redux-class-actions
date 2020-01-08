import React from "react";
import ReactDOM from "react-dom";
import Count from "./Count";
import Buttons from "./Buttons";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import counter from "./reducer";
import { Action } from "./actions";

const classMiddleware = store => next => action => {
  if (action instanceof Action) {
    next({ ...action, type: action.constructor.name });
  } else {
    next(action);
  }
};

const store = createStore(counter, applyMiddleware(classMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Count />
    <Buttons />
  </Provider>,
  document.getElementById("root")
);
