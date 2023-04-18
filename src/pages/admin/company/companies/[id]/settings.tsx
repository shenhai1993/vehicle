import { ProCard, ProDescriptions } from "@ant-design/pro-components";
import type { ProDescriptionsActionType } from "@ant-design/pro-components";
import { useRef } from "react";

export default function rent() {
  const actionRef = useRef<ProDescriptionsActionType>();
  return (
    <>
      <ProCard title="基本信息" headerBordered>
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
              title: "上级机构",
              key: "bankname",
              dataIndex: "bankname",
              copyable: true,
            },
            {
              title: "机构编码",
              key: "username",
              dataIndex: "username",
              copyable: true,
              ellipsis: true,
            },
            {
              title: "组织类型",
              key: "bankAdmin",
              dataIndex: "bankAdmin",
              copyable: true,
            },
            {
              title: "经纪人管理员",
              key: "bankAdmin",
              dataIndex: "bankAdmin",
              copyable: true,
            },
            {
              title: "经营规模",
              key: "bankAdmin",
              dataIndex: "bankAdmin",
              copyable: true,
            },
            {
              title: "主要联系人",
              key: "bankAdmin",
              dataIndex: "bankAdmin",
              copyable: true,
            },
            {
              title: "联系人电话",
              key: "bankAdmin",
              dataIndex: "bankAdmin",
              copyable: true,
            },
            {
              title: "联系邮箱",
              key: "bankAdmin",
              dataIndex: "bankAdmin",
              copyable: true,
            },
          ]}
          editable={{
            onSave: async (keypath, newInfo, oriInfo) => {
              console.log(keypath, newInfo, oriInfo);
              return true;
            },
          }}
        ></ProDescriptions>
      </ProCard>

      <ProCard title="主体信息" headerBordered>
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
              title: "机构名称",
              key: "bankname",
              dataIndex: "bankname",
              copyable: true,
            },
            {
              title: "成立时间",
              key: "username",
              dataIndex: "username",
              copyable: true,
              ellipsis: true,
            },
            {
              title: "营业执照",
              key: "bankAdmin",
              dataIndex: "bankAdmin",
              copyable: true,
            },
            {
              title: "经营地址",
              key: "bankAdmin",
              dataIndex: "bankAdmin",
              copyable: true,
            },
            {
              title: "经营范围",
              key: "bankAdmin",
              dataIndex: "bankAdmin",
              copyable: true,
            },
          ]}
          editable={{
            onSave: async (keypath, newInfo, oriInfo) => {
              console.log(keypath, newInfo, oriInfo);
              return true;
            },
          }}
        ></ProDescriptions>
      </ProCard>
    </>
  );
}
