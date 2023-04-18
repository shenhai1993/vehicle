import { ProFormText } from "@ant-design/pro-components";
import { MyModalForm } from "../../../../common";
import SysRolesSelect from "../../../../components/selects/SysRolesSelect";

export default function Update({ actions }: any) {
  return (
    <MyModalForm
      api={actions.update}
      beforeRender={(item: any, formRef: any) => {
        const roles_id = item?.roles.map((d: any) => d.id);
        formRef?.current?.setFieldsValue({ ...item, roles_id: roles_id });
      }}
    >
      <ProFormText
        name="username"
        placeholder="用户名"
        label="用户名"
        required
        disabled
      />
      <ProFormText.Password
        name="password"
        placeholder="密码"
        label="密码"
        required
      />
      <SysRolesSelect />
    </MyModalForm>
  );
}
