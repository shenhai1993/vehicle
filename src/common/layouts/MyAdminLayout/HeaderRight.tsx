import { Avatar, Space, Dropdown, Typography, MenuProps } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { stateActions, useMyState } from "../..";
import { useNavigate } from "react-router-dom";

export default function HeaderRight() {
  const navigate = useNavigate();
  const { snap } = useMyState();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Space
          onClick={() => {
            stateActions.logout(navigate);
          }}
        >
          <LogoutOutlined />
          <Typography.Text>退出登录</Typography.Text>
        </Space>
      ),
    },
  ];

  return (
    <Space style={{ marginRight: "40px" }}>
      <Dropdown
        menu={{ items }}
        placement="bottom"
        arrow={{ pointAtCenter: true }}
      >
        <Space style={{ cursor: "pointer" }}>
          <Avatar
            style={{ backgroundColor: "#fff" }}
            src="https://joesch.moe/api/v1/random"
            icon={<UserOutlined />}
          />
          <Typography.Text style={{ color: "#fff" }}>
            {snap.session.user?.real_name}
          </Typography.Text>
        </Space>
      </Dropdown>
    </Space>
  );
}
