import { ProFormText, ProFormRadio} from "@ant-design/pro-components";
import { MyModalForm } from "../../../../common";

export default function Create({ actions }: any) {
  return (
    <MyModalForm
      api={actions?.store}
      onFinish={(values: any) => {
        actions?.store(values);
        return Promise.resolve();
      }}
    >
      <ProFormText
        name="departments_number"
        placeholder="部门编号"
        label="部门编号"
        rules={[{ required: true, message: "请输部门编号！" }]}
      />
      <ProFormText
        name="departments_name"
        placeholder="部门名称"
        label="部门名称"
        rules={[{ required: true, message: "请输部门名称！" }]}
      />
    </MyModalForm>
  );
}
