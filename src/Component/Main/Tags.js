import React from "react";
import { Rate, Tag } from "antd";
export default function Tags() {
  return (
    <div style={{ textAlign: "left" }}>
      <Rate defaultValue={1} count={1} style={{ marginRight: "1%" }} />
      <Tag color="cyan">javascript</Tag>
      <Tag color="cyan">React</Tag>
      <Tag color="cyan">React Native</Tag>
      <Tag color="cyan">Node.js</Tag>
      <Tag color="cyan">Express</Tag>
      <Tag color="cyan">Antd</Tag>
      <Tag color="cyan">MySQL</Tag>
      <br />
      <Rate
        defaultValue={1}
        count={1}
        character={"📖"}
        style={{ marginRight: "1%" }}
      />
      <Tag color="geekblue">Redux</Tag>
      <Tag color="geekblue">GraphQL</Tag>
      <Tag color="geekblue">React-apollo</Tag>
      <Tag color="geekblue">Typescript</Tag>
      <Tag color="geekblue">Styled-component</Tag>
      <br />
      <Rate
        defaultValue={1}
        count={1}
        character={"⚙️"}
        style={{ marginRight: "1%" }}
      />
      <Tag color="purple">GitHub</Tag>
      <Tag color="purple">Notion</Tag>
      <Tag color="purple">Slack</Tag>
      <Tag color="purple">Asana</Tag>
      <Tag color="purple">Figma</Tag>
      <Tag color="purple">VScode</Tag>
    </div>
  );
}
