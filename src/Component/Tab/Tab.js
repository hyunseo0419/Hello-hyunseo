import React from "react";
import { Tabs, Icon } from "antd";
const { TabPane } = Tabs;

export default function Tab() {
  return (
    <Tabs defaultActiveKey="2">
      <TabPane
        tab={
          <span>
            <Icon type="apple" />
            Tab 1
          </span>
        }
        key="1"
      >
        Tab 1
      </TabPane>
      <TabPane
        tab={
          <span>
            <Icon type="android" />
            Tab 2
          </span>
        }
        key="2"
      >
        Tab 2
      </TabPane>
      <TabPane
        tab={
          <span>
            <Icon type="android" />
            Tab 3
          </span>
        }
        key="3"
      >
        Tab 3
      </TabPane>
    </Tabs>
  );
}
