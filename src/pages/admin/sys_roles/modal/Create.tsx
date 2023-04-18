import { ProFormText } from "@ant-design/pro-form";
import { MyModalForm, MyColorPicker } from "../../../../common";

export default function Create({ actions }: any) {
  return (
    <MyModalForm api={actions.store}>
      <ProFormText name="name" placeholder="角色名称" label="角色名称" />
      <MyColorPicker name="color" label="选择颜色" />
    </MyModalForm>
  );
}
