import React, { Component } from "react";
import { Row, Col, Descriptions, Avatar } from "antd";
import Tags from "./Tags";
import Timelines from "./Timelines";

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ fontSize: 17 }}>
          꿈이 많은 개발자
          <span style={{ fontWeight: "bold" }}> 이현서 </span>
          입니다.
        </div>
        <Row>
          <Col span={4} push={7} style={{ marginTop: "2.3%" }}>
            <Avatar
              src="data:image/jpeg;base64,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"
              size={200}
            />
          </Col>
          <Col span={20} pull={-1} style={{ marginTop: "1.7%" }}>
            <Descriptions
              layout="horizontal"
              bordered={true}
              style={{ height: "50%", width: "30%", marginLeft: "35%" }}
            >
              <Descriptions.Item label="Phone" span={3}>
                010-9604-2104
              </Descriptions.Item>
              <Descriptions.Item label="E-mail" span={3}>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNwfZzlwjQlGnjWnfHxlCtxgKbJVKGPPXZvFFdqBFxdjRCdlGKKTwcVNGLzrFppWtRGCqB">
                  wjsdbtjs131313@gmail.com
                </a>
              </Descriptions.Item>
              <Descriptions.Item label="Github" span={3}>
                <a href="https://github.com/hyunseo0419">
                  https://github.com/hyunseo0419
                </a>
              </Descriptions.Item>
              <Descriptions.Item label="Blog" span={3}>
                <a href="https://analogcoding.tistory.com/">
                  https://analogcoding.tistory.com
                </a>
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>

        <div style={{ marginLeft: "35%", marginBottom: "2%", marginTop: "2%" }}>
          <Tags />
        </div>
        <div style={{ marginLeft: "30%" }}>
          <Timelines />
        </div>
      </React.Fragment>
    );
  }
}
