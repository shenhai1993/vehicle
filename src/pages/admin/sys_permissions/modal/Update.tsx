import { ProFormText } from "@ant-design/pro-form";
import { MyModalForm } from "../../../../common";
import SysPermissionsSelect from "../../../../components/selects/SysPermissionsSelect";

export const Update = ({ actions }: any) => {
  return (
    <MyModalForm api={actions?.update}>
      <SysPermissionsSelect />
      <ProFormText name="title" placeholder="菜单名称" label="菜单名称" />
      <ProFormText name="name" placeholder="权限名称" label="权限名称" />
      <ProFormText name="url" placeholder="链接" label="菜单链接" />
    </MyModalForm>
  );
};
