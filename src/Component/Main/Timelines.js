import React from "react";
import { Timeline } from "antd";

export default function Timelines() {
  return (
    <div style={{ textAlign: "left" }}>
      <Timeline>
        <Timeline.Item>
          <span style={{ fontWeight: "bold" }}>2019-02 </span> Code states -
          <a
            href="https://www.codestates.com/"
            style={{ color: "black", fontWeight: "bolder" }}
          >
            Pre course
          </a>
        </Timeline.Item>
        <Timeline.Item>
          <span style={{ fontWeight: "bold" }}>2019-05 </span> Code states -
          <a
            href="https://www.codestates.com/"
            style={{ color: "black", fontWeight: "bolder" }}
          >
            Immersive course
          </a>
        </Timeline.Item>
        <Timeline.Item>
          <span style={{ fontWeight: "bold" }}>2019-06 </span> Side Project -
          <a
            href="https://www.codestates.com/"
            style={{ color: "black", fontWeight: "bolder" }}
          >
            OwlPost
          </a>
        </Timeline.Item>
        <Timeline.Item>
          <span style={{ fontWeight: "bold" }}>2019-07</span> Side Project -
          <a
            href="https://www.codestates.com/"
            style={{ color: "black", fontWeight: "bolder" }}
          >
            개고수
          </a>
        </Timeline.Item>
        <Timeline.Item>
          <span style={{ fontWeight: "bold" }}>2019-09</span> Educational
          Engineer -
          <a
            href="https://www.codestates.com/"
            style={{ color: "black", fontWeight: "bolder" }}
          >
            Codestates
          </a>
        </Timeline.Item>
        <Timeline.Item>
          <span style={{ fontWeight: "bold" }}>2019-07</span> Side Project -
          <a
            href="https://www.codestates.com/"
            style={{ color: "black", fontWeight: "bolder" }}
          >
            오역자들
          </a>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
