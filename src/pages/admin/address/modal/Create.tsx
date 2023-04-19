import { ProFormText, ProFormRadio} from "@ant-design/pro-components";
import { MyModalForm } from "../../../../common";
import DepartmentSelect from "../../../../components/selects/DepartmentSelect";
import CarsSelect from "../../../../components/selects/CarsSelect";
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
        name="address"
        placeholder="场所地址"
        label="场所地址"
        rules={[{ required: true, message: "请输入场所地址！" }]}
      />
      <ProFormText
        name="address_detail"
        placeholder="地址详情"
        label="地址详情"
      />
        <ProFormText
            name="max_count"
            placeholder="最大存放数量"
            label="最大存放数量"
            rules={[{ required: true, message: "请输入最大存放数量！" }]}
        />
      <DepartmentSelect label="部门"   rules={[{ required: true, message: "请选择车辆！" }]}/>
    </MyModalForm>
  );
}
