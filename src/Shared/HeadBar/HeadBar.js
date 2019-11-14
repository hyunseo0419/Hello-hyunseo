import React, { Component } from "react";
import { Layout } from "antd";
const { Header } = Layout;

export default class HeadBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          style={{
            backgroundColor: "#b3e6ff",
            height: 75,
            textAlign: "center"
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center"
            }}
          >
            A Dreamy developer
          </div>
        </Header>
      </React.Fragment>
    );
  }
}
