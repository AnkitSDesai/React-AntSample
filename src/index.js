import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import "ant-design-pro/dist/ant-design-pro.css";
import ContactCard from "./contactCard";
import CustomTag from "./customTag";
import {
  Icon,
  Row,
  Col,
  Drawer,
  Tag,
  Avatar,
  Badge,
  Card,
  Button,
  Tooltip
} from "antd";

import NoticeIcon from "ant-design-pro/lib/NoticeIcon";
import PageHeader from "ant-design-pro/lib/PageHeader";
import DescriptionList from "ant-design-pro/lib/DescriptionList";
import { ChartCard, yuan } from "ant-design-pro/lib/Charts";

const { Description } = DescriptionList;

const content = (
  <Row>
    {/* 
    <Col span={24}>
      <CustomTag title="Legal Type" color="magenta">
        Limited Liability Company (LLC)
      </CustomTag>
      <CustomTag title="Organization Type" color="green">
        Client
      </CustomTag>
      <CustomTag title="Activity" color="blue">
        Funeral Home
      </CustomTag>
    </Col> */}

    <DescriptionList size="small" col="3">
      <Description term="Legal Type">
        Limited Liability Company (LLC)
      </Description>
      <Description term="Organization Type">Client</Description>
      <Description term="Activity">Funeral Home</Description>
    </DescriptionList>
  </Row>
);

const breadcrumbList = [
  {
    title: "Organization",
    href: "/"
  },
  {
    title: "Smith Company"
  }
];

const title = <span>Smith Company</span>;

const tabList = [
  {
    key: "1",
    tab: (
      <span>
        Contacts&nbsp;
        <Badge
          count={4}
          style={{
            backgroundColor: "#fff",
            color: "#999",
            boxShadow: "0 0 0 1px #d9d9d9 inset",
            marginTop: -3,
            marginLeft: 2
          }}
        />
      </span>
    )
  },
  {
    key: "2",
    tab: (
      <span>
        Topics&nbsp;
        <Badge
          count={2}
          style={{
            backgroundColor: "#fff",
            color: "#999",
            boxShadow: "0 0 0 1px #d9d9d9 inset",
            marginTop: -3,
            marginLeft: 2
          }}
        />
      </span>
    )
  },
  {
    key: "3",
    tab: "Notes"
  }
];

class Page extends React.Component {
  state = {
    activeTab: "1"
  };
  onTabChange = key => {
    this.setState({
      activeTab: key
    });
  };
  render() {
    const { activeTab } = this.state;
    return (
      <div style={{ backgroundColor: "#f0f2f5", minHeight: "500px" }}>
        <PageHeader
          logo={
            <img
              alt="Organization Logo"
              src="https://picsum.photos/200/300/?random"
            />
          }
          title={title}
          content={content}
          breadcrumbList={breadcrumbList}
          tabList={tabList}
          tabActiveKey={activeTab}
          onTabChange={this.onTabChange}
        />
        <div>
          {activeTab === "1" && (
            <Row
              type="flex"
              justify="space-around"
              align="middle"
              style={{ margin: "24px 12px", height: "100%" }}
              gutter={24}
            >
              <Col span={6}>
                <ContactCard title="Owner" firstName="John" lastName="Doe" />
              </Col>
              <Col span={6}>
                <ContactCard
                  title="Lawyer"
                  firstName="Jane"
                  lastName="Doe"
                  contactType="mail"
                  contact="jane.doe@smith.fake"
                />
              </Col>
              <Col span={6}>
                <ContactCard
                  title="Accountant"
                  firstName="Bill"
                  lastName="Mallard"
                />
              </Col>
              <Col span={6}>
                <Tooltip title="Add a Contact">
                  <Button icon="plus" shape="circle" type="primary" />
                </Tooltip>
              </Col>
            </Row>
          )}
          {activeTab === "2" && <div />}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("container"));
