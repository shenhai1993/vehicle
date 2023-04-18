import { ProColumns } from "@ant-design/pro-components";
import { Button, message, Space } from "antd";
import Permissions from "./modal/Permissions";
import { PicRightOutlined } from "@ant-design/icons";
import {
  MyButtonsCreate,
  MyButtonsDelete,
  MyButtonsEdit,
  MyColumns,
  MyListPage,
  request,
  useMyListPage,
} from "../../../common";
import Update from "./modal/Update";
import Create from "./modal/Create";

export default function SysRoles() {
  const { modalRef, actions, res, search, table, pagination } = useMyListPage({
    baseUri: "sys_roles",
    otherApi: {
      setPermissions: (id: number, permissions_ids: number[]) => {
        request("sys_roles/set_permissions", {
          data: { id: id, permissions_ids: permissions_ids },
        }).then(() => {
          message.success("操作成功");
          modalRef.current?.hideModal();
        });
      },
    },
  });

  return (
    <MyListPage
      {...{ res, search, table, pagination }}
      columns={
        [
          MyColumns.id(),
          MyColumns.common({ title: "名称", key1: "name" }),
          {
            title: "设置权限",
            render: (_: any, record: any) => [
              <Button
                key="setPermission"
                type="primary"
                size="small"
                ghost
                icon={<PicRightOutlined />}
                onClick={() => {
                  modalRef.current?.showModal({
                    title: "权限设置",
                    defaultData: record,
                    child: <Permissions actions={actions} />,
                  });
                }}
              >
                设置权限
              </Button>,
            ],
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
