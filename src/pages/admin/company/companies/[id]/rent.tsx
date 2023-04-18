import { ProCard, ProDescriptions } from "@ant-design/pro-components";
import type { ProDescriptionsActionType } from "@ant-design/pro-components";
import { useRef } from "react";
import { MyButtonsEdit } from "../../../../../common";
import MainBodySelect from "../../../../../components/selects/MainBodySelect";

export default function rent() {
  const actionRef = useRef<ProDescriptionsActionType>();
  return (
    <>
      <ProCard
        title="收款信息"
        headerBordered
        extra={<MyButtonsEdit key={`MyButtonsEdit_card`} />}
      >
        <ProDescriptions
          actionRef={actionRef}
          bordered
          formProps={{
            onValuesChange: (e, f) => console.log(f),
          }}
          request={async () => {
            return Promise.resolve({
              success: true,
              data: {
                id: 1,
                username: "左老板",
                bankname: "中国银行",
                bankAdmin: "21312321321",
              },
            });
          }}
          columns={[
            {
              title: "开户银行(全称)",
              key: "bankname",
              dataIndex: "bankname",
              copyable: true,
            },
            {
              title: "户名",
              key: "username",
              dataIndex: "username",
              copyable: true,
              ellipsis: true,
            },
            {
              title: "账号",
              key: "bankAdmin",
              dataIndex: "bankAdmin",
              copyable: true,
            },
          ]}
        ></ProDescriptions>
      </ProCard>

      <ProCard title="租赁配置信息" headerBordered>
        <ProDescriptions
          actionRef={actionRef}
          bordered
          formProps={{
            onValuesChange: (e, f) => console.log(f),
          }}
          request={async () => {
            return Promise.resolve({
              success: true,
              data: {
                id: 1,
                username: "在线签约的合同主体",
                bankname: "中国银行",
              },
            });
          }}
          columns={[
            {
              title: "在线签约的合同主体",
              key: "bankname",
              dataIndex: "bankname",
              copyable: true,
              renderFormItem: () => {
                return <MainBodySelect />;
              },
            },
            {
              title: "租赁合同审核人",
              key: "username",
              dataIndex: "username",
              copyable: true,

              renderFormItem: () => {
                return <MainBodySelect />;
              },
            },
          ]}
        ></ProDescriptions>
      </ProCard>

      <ProCard title="作为租赁签约主体信息" headerBordered>
        <ProDescriptions
          actionRef={actionRef}
          bordered
          formProps={{
            onValuesChange: (e, f) => console.log(f),
          }}
          request={async () => {
            return Promise.resolve({
              success: true,
              data: {
                id: 1,
                username: "在线签约的合同主体",
                bankname: "中国银行",
              },
            });
          }}
          columns={[
            {
              title: "公司名称",
              key: "bankname",
              dataIndex: "bankname",
              copyable: true,
            },
            {
              title: "公司地址",
              key: "username",
              dataIndex: "username",
              copyable: true,
            },
            {
              title: "公司电话",
              key: "username",
              dataIndex: "username",
              copyable: true,
            },
            {
              title: "公司统一社会信用代码",
              key: "username",
              dataIndex: "username",
              copyable: true,
            },
            {
              title: "收款房名称",
              key: "username",
              dataIndex: "username",
              copyable: true,
            },
            {
              title: "收款方开户行",
              key: "username",
              dataIndex: "username",
              copyable: true,
            },
            {
              title: "收款方账号",
              key: "username",
              dataIndex: "username",
              copyable: true,
            },
            {
              title: "账号信息",
              key: "username",
              dataIndex: "username",
              copyable: true,
            },
          ]}
        ></ProDescriptions>
      </ProCard>
    </>
  );
}
