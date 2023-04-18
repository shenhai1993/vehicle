import { ProColumns } from "@ant-design/pro-components";
import { message, Space } from "antd";
import {
  MyListPage,
  MyButtonsCreate,
  MyButtonsDelete,
  MyColumns,
  useMyListPage,
  MyButtonsEdit,
  MyButtonsMoveDown,
  MyButtonsMoveUp,
  request,
} from "../../../common";
import { Update } from "./modal/Update";
import { Create } from "./modal/Create";

export default function SysPermissions() {
  const { modalRef, actions, res, search, table, pagination } = useMyListPage({
    baseUri: "sys_permissions",
    otherApi: {
      up(id: number) {
        request("sys_permissions/move", {
          data: { id: id, type: "up" },
        }).then(() => {
          message.success("操作成功");
          actions.list();
        });
      },
      down(id: number) {
        request("sys_permissions/move", {
          data: { id: id, type: "down" },
        }).then(() => {
          message.success("操作成功");
          actions.list();
        });
      },
    },
    tableExtra: { expandable: { defaultExpandAllRows: true } },
  });

  return (
    <MyListPage
      {...{ res, search, table, pagination }}
      columns={
        [
          {
            title: "名称",
            render: (_, record) => {
              return `${record.id}_${record.title}`;
            },
          },
          MyColumns.common({ title: "标识", key1: "name" }),
          MyColumns.common({ title: "链接", key1: "url" }),
          {
            title: "排序",
            render: (_: any, record: any) => [
              <Space key={`Space1${record.id}`}>
                <MyButtonsMoveUp
                  key={`MyButtonsMoveUp${record.id}`}
                  disabled={!record.parent_id}
                  onClick={() => actions.up(record.id)}
                />
                <MyButtonsMoveDown
                  key={`MyButtonsMoveDown${record.id}`}
                  disabled={!record.parent_id}
                  onClick={() => actions.down(record.id)}
                />
              </Space>,
            ],
          },
          MyColumns.operate({
            _render: (record: any) => (
              <Space key={`Space${record.id}`}>
                <MyButtonsEdit
                  key={`MyButtonsEdit${record.id}`}
                  onClick={() => {
                    modalRef.current?.showModal({
                      title: "编辑菜单",
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
              title: "新建菜单",
              defaultData: undefined,
              child: <Create actions={actions} />,
            })
          }
        />,
      ]}
    />
  );
}
