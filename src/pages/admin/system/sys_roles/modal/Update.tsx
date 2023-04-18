import { ProFormText } from "@ant-design/pro-form";
import { MyColorPicker, MyModalForm } from "../../../../../common";

export default function Update({ actions }: any) {
  return (
    <MyModalForm api={actions?.update}>
      <ProFormText name="name" placeholder="角色名称" label="角色名称" />
      <MyColorPicker name="color" label="选择颜色" />
    </MyModalForm>
  );
}
