import React, { Component } from "react";
import { Layout } from "antd";
const { Header } = Layout;

export default class HeadBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Header className="header">
          <div>
            <img src="" alt="" /> 사진 A Dreamy developer
          </div>
        </Header>
      </React.Fragment>
    );
  }
}
