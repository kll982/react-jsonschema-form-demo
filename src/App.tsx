import React, { useState } from "react";
import { Layout } from "antd";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Router as RouteTable } from "./route";
import LeftMenu from "./route/leftMeun";
import "./App.less";

import "./mock/mock";

const { Header, Footer, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="demoApp-wrap">
      <HashRouter>
        <Layout className="demoApp-layout-wrap">
          <Sider
            className="demoApp-layout-sider"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <LeftMenu />
          </Sider>
          <Layout className="demoApp-site-layout">
            <Content
              style={{ margin: "0 0 0 16px" }}
              className="demoApp-layout-content"
            >
              <div className="demoApp-content-main">
                <RouteTable />
              </div>
            </Content>
          </Layout>
        </Layout>
      </HashRouter>
    </div>
  );
};

const container = document.getElementById("app") as HTMLElement;
createRoot(container).render(<App />);
