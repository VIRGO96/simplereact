import React, { Component } from "react";
import "./App.css";
import store from "./store/";
import { Provider } from "react-redux";
import TextAreaUI from "./components/TextAreaUI";
import "bootstrap/dist/css/bootstrap.css";

export default class App extends Component {
  // }
  render() {
    return (
      <Provider store={store}>
        <div style={{ padding: "10px" }}>
          <div>
            <TextAreaUI />
          </div>
        </div>
      </Provider>
    );
  }
}
