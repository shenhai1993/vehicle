import { Space } from "antd";
import { useNavigate } from "react-router-dom";
import { ProFormText } from "@ant-design/pro-components";
import {
  MyButtonsCreate,
  MyButtonsShow,
  MyButtonsDelete,
  MyButtonsEdit,
  MyColumns,
  useMyListPage,
  MyListPage,
} from "../../../../common";
import CompaniesTypeSelect from "../../../../components/selects/CompaniesTypeSelect";
import Create from "./modal/Create";
import Update from "./modal/Update";
import { CompanyTypeEnum } from "../../../../const/enums";

export default function CompanyEmployees() {
  const navigate = useNavigate();
  const { modalRef, actions, res, search, table, pagination } = useMyListPage({
    baseUri: "company_employees",
  });

  return (
    <MyListPage
      {...{ res, search, table, pagination }}
      columns={[
        MyColumns.id(),
        MyColumns.common({
          title: "名称",
          key1: "name",
          sorter: true,
        }),
        MyColumns.enumTag({
          title: "类型",
          key1: "type",
          enums: CompanyTypeEnum,
        }),
        MyColumns.common({
          title: "机构编码",
          key1: "code",
        }),
        MyColumns.softDelete({ actions }),
        MyColumns.common({
          title: "创建时间",
          key1: "created_at",
        }),
        MyColumns.operate({
          _render: (record: any) => (
            <Space key={`Space2${record.id}`}>
              <MyButtonsShow
                key={`MyButtonsShow_${record.id}`}
                onClick={() => {
                  navigate(`/admin/company/companies/${record.id}/rent`);
                }}
              />
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
        <CompaniesTypeSelect key="CompaniesTypeSelect" />,
        <ProFormText name="name" key="nameInput" label="名称" />,
        <ProFormText name="code" key="codeInput" label="机构码" />,
      ]}
    />
  );
}
