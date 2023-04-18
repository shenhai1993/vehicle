import { ProCard } from "@ant-design/pro-components";
import { Divider, Statistic } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { MyDetailPage } from "../../../../common";

export default () => {
  const params = useParams();

  return (
    <MyDetailPage
      title="机构详情"
      extra={
        <ProCard.Group direction={"row"}>
          <ProCard>
            <Statistic title="今日UV" value={79.0} precision={2} />
          </ProCard>
          <Divider type={"vertical"} />
          <ProCard>
            <Statistic title="冻结金额" value={112893.0} precision={2} />
          </ProCard>
          <Divider type={"vertical"} />
          <ProCard>
            <Statistic title="信息完整度" value={93} suffix="/ 100" />
          </ProCard>
          <Divider type={"vertical"} />
          <ProCard>
            <Statistic title="冻结金额" value={112893.0} />
          </ProCard>
        </ProCard.Group>
      }
      tabs={{
        url: `/admin/company/companies/${params?.id}`,
        items: [
          {
            key: "settings",
            label: "基本信息",
          },
          {
            key: "rent",
            label: `租赁-基础设置`,
          },
          {
            key: "openableItems",
            label: `租赁-可开盘项目`,
          },
          {
            key: "projects",
            label: `租赁-可推荐项目`,
          },
        ],
      }}
    />
  );
};
