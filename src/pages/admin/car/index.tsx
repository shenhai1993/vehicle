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
import Add from "./modal/Add";

export default function CompanyEmployees() {
  const navigate = useNavigate();
  const { modalRef, actions, res, search, table, pagination } = useMyListPage({
    baseUri: "cars",
  });

  return (
    <MyListPage
      {...{ res, search, table, pagination }}
      columns={[
        MyColumns.common({
          title: "车牌号",
          key1: "car_number",
          sorter: true,
        }),
        MyColumns.common({
          title: "车主姓名",
          key1: "user_name",
        }),
        MyColumns.common({
          title: "车主手机号",
          key1: "phone",
        }),
        MyColumns.common({
          title: "汽车品牌",
          key1: "brand",
        }),
        MyColumns.common({
          title: "预计存放天数",
          key1: "estimated_time",
        }),
        MyColumns.common({
          title: "入库图片",
          key1: "file",
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
          title="车辆入库"
          onClick={() =>
            modalRef.current?.showModal({
              title: "车辆入库",
              defaultData: undefined,
              child: <Create actions={actions}  />,
            })
          }
        />,
        <MyButtonsCreate
          key="MyButtonsCreate"
          title="新增车辆"
          onClick={() =>
            modalRef.current?.showModal({
              title: "新增车辆",
              defaultData: undefined,
              child: <Add modalRef={modalRef} actions={actions}/>,
            })
          }
        />,
      ]}
      searchFormItems={[
        <ProFormText name="name" key="nameInput" label="学校名称" />
      ]}
    />
  );
}
