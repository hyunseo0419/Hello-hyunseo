import React from "react";
import { Tabs, Icon } from "antd";
import Main from "../Main/Main";
const { TabPane } = Tabs;

export default function Tab() {
  return (
    <Tabs defaultActiveKey="2" size={"large"} style={{ textAlign: "center" }}>
      <TabPane
        tab={
          <span>
            <Icon type="book" />
            Posting
          </span>
        }
        key="1"
      >
        posting
      </TabPane>
      <TabPane
        tab={
          <span>
            <Icon type="user" />
            I'm 이현서
          </span>
        }
        key="2"
      >
        <Main />
      </TabPane>
      <TabPane
        tab={
          <span>
            <Icon type="project" />
            Project
          </span>
        }
        key="3"
      >
        project
      </TabPane>
    </Tabs>
  );
}
