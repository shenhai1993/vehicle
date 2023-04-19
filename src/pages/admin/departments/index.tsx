import { Space } from "antd";
import { useNavigate } from "react-router-dom";
import { ProFormText } from "@ant-design/pro-components";
import {
  MyButtonsCreate,
  MyButtonsDelete,
  MyButtonsEdit,
  MyColumns,
  useMyListPage,
  MyListPage,
} from "../../../common";
import Create from "./modal/Create";
import Update from "./modal/Update";

export default function CompanyEmployees() {
  const navigate = useNavigate();
  const { modalRef, actions, res, search, table, pagination } = useMyListPage({
    baseUri: "departments",
  });

  return (
    <MyListPage
      {...{ res, search, table, pagination }}
      columns={[
        MyColumns.common({
          title: "部门编号",
          key1: "departments_number",
          sorter: true,
        }),
        MyColumns.common({
          title: "部门名称",
          key1: "departments_name",
        }),
        MyColumns.softDelete({ actions }),
        MyColumns.common({
          title: "创建时间",
          key1: "created_at",
        }),
        MyColumns.operate({
          _render: (record: any) => (
            <Space key={`Space2${record.id}`}>
              <MyButtonsEdit
                key={`MyButtonsEdit_${record.id}`}
                onClick={() => {
                  modalRef.current?.showModal({
                    title: "编辑",
                    defaultData: record,
                    child: <Update actions={actions} />,
                  });
                }}
              />
              <MyButtonsDelete
                key={`MyButtonsDelete_${record.id}`}
                onConfirm={() => actions.delete({ id: record.id })}
              />
            </Space>
          ),
        }),
      ]}
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
      searchFormItems={[
        <ProFormText name="name" key="nameInput" label="名称" />
      ]}
    />
  );
}
