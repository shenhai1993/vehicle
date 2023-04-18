import { ArrowLeftOutlined } from "@ant-design/icons";
import { ProCard } from "@ant-design/pro-components";
import { Button, Space } from "antd";
import { ReactNode } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { backToMainPage } from "../..";
import MyPageTabs from "./MyPageTabs";

type MyDetailPageProps = {
  title?: string;
  extra?: ReactNode;
  tabs?: {
    url?: string;
    items?: { key: string; label: string }[];
  };
};

export default function MyDetailPage({
  title = "详情页面",
  extra,
  tabs,
}: MyDetailPageProps) {
  const navigate = useNavigate();

  return (
    <>
      <ProCard
        title={
          <Space>
            <Button
              onClick={() => {
                backToMainPage(navigate);
              }}
              icon={<ArrowLeftOutlined />}
            />
            <div style={{ fontWeight: "500", fontSize: "1.2rem" }}>{title}</div>
          </Space>
        }
      >
        {extra}
        <MyPageTabs
          items={tabs?.items}
          onChange={(e: any) => {
            navigate(`${tabs?.url}/${e}`);
          }}
        />
        <Outlet />
      </ProCard>
    </>
  );
}
