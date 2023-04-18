import { Outlet } from "react-router-dom";
import { Col, Layout, Row, Typography } from "antd";
import HeaderRight from "./HeaderRight";
import MainMenu from "./MainMenu";
import SubMenu from "./SubMenu";
import { useMyState } from "../..";
import { useState } from "react";

export default function MyAdminLayout() {
  const { snap } = useMyState();
  const [twoMenu, setTwoMenu] = useState([]);

  return (
    <Layout>
      <Layout.Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          paddingInline: 0,
          width: "100%",
          height: "55px",
        }}
      >
        <Row>
          <Col
            span={24}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#fff",
              height: "55px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography.Text
                style={{
                  color: "#fff",
                  marginLeft: "40px",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                后台管理系统
              </Typography.Text>
              <MainMenu permissions={snap.session.permissions?.children} />
            </div>
            <HeaderRight />
          </Col>
          <Col span={24}>
            <SubMenu
              permissions={snap.session.permissions?.children}
              onChange={setTwoMenu}
            />
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content
        style={{
          height: "100%",
          margin: twoMenu?.length > 0 ? "60px 24px 24px 24px" : 0,
          padding: 0,
        }}
      >
        <Outlet />
      </Layout.Content>
    </Layout>
  );
}
