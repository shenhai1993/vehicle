import { ProFormText } from "@ant-design/pro-components";
import { MyModalForm } from "../../../../common";
import SysRolesSelect from "../../../../components/selects/SysRolesSelect";

export default function Create({ actions }: any) {
  return (
    <MyModalForm api={actions.store}>
      <ProFormText
        name="username"
        placeholder="用户名"
        label="用户名"
        required
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
