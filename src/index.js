import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import Store from "./Store/Store";

import App from "./App";

import pbFetch from "./helper/pbFetch";

import "./index.css";

const store = Store.create({}, { pbFetch });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
