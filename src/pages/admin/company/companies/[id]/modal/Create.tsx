import { ProFormText } from "@ant-design/pro-components";
import { MyModalForm } from "../../../../../../common";

export default function Create(props: any) {
  return (
    <MyModalForm api={props.actions.store}>
      <ProFormText
        name="name"
        placeholder="项目名称"
        label="项目名称"
        required
      />
      <ProFormText
        name="code"
        placeholder="项目编码"
        label="项目编码"
        required
      />
    </MyModalForm>
  );
}
