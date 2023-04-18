import { ProColumns } from "@ant-design/pro-components";
import { Space, Tag } from "antd";
import Update from "./modal/Update";
import Create from "./modal/Create";
import {
  useMyListPage,
  MyColumns,
  MyListPage,
  MyButtonsCreate,
  MyButtonsDelete,
  MyButtonsEdit,
} from "../../../../common";

export default function SysRoles() {
  const { modalRef, actions, res, search, table, pagination } = useMyListPage({
    baseUri: "admins",
  });

  return (
    <MyListPage
      {...{ res, search, table, pagination }}
      columns={
        [
          MyColumns.id(),
          MyColumns.common({
            title: "用户名",
            key1: "username",
          }),
          {
            title: "角色",
            render: (_: any, record: any) => {
              return record.roles.map((item: any) => (
                <Tag key={item.id} color={item.color}>
                  {item.name}
                </Tag>
              ));
            },
          },
          MyColumns.operate({
            _render: (record: any) => (
              <Space key={`Space${record.id}`}>
                <MyButtonsEdit
                  key={`MyButtonsEdit${record.id}`}
                  onClick={() => {
                    modalRef.current?.showModal({
                      title: "编辑",
                      defaultData: record,
                      child: <Update actions={actions} />,
                    });
                  }}
                />
                <MyButtonsDelete
                  key={`MyButtonsDelete${record.id}`}
                  onConfirm={() => actions.delete({ id: record.id })}
                />
              </Space>
            ),
          }),
        ] as ProColumns[]
      }
      toolBarRender={() => [
        <MyButtonsCreate
          key="MyButtonsCreate"
          title="添加"
          onClick={() =>
            modalRef.current?.showModal({
              title: "添加",
              defaultData: undefined,
              child: <Create actions={actions} />,
            })
          }
        />,
      ]}
    />
  );
}
