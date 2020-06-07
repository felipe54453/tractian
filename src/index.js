import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;

ReactDOM.render(
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo"> Tractian </div> />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1">Unidade 1</Menu.Item>
        <Menu.Item key="2">Unidade 2</Menu.Item>
        <Menu.Item key="3">Status Ativos</Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{ padding: 0 }}
      />
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          info
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>,
  document.getElementById("container")
);
