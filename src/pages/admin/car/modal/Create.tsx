import { ProFormText, ProFormRadio} from "@ant-design/pro-components";
import { MyModalForm } from "../../../../common";
import CarsSelect from "../../../../components/selects/CarsSelect";
import AddressSelect from "../../../../components/selects/AddressSelect";
export default function Create({ actions }: any) {
  return (
    <MyModalForm
      api={actions?.store}
      onFinish={(values: any) => {
        actions?.store(values);
        return Promise.resolve();
      }}
    >
      <CarsSelect label="车辆"   rules={[{ required: true, message: "请选择车辆！" }]}/>
      <AddressSelect label="场地"   rules={[{ required: true, message: "请选择车辆！" }]}/>
      <ProFormText
        name="remark"
        placeholder="备注"
        label="备注"
        rules={[{ required: true, message: "请输入备注！" }]}
      />
      <ProFormText
        name="estimated_time"
        placeholder="请输入预计存放天数"
        label="预计存放天数"
        rules={[{ required: true, message: "请输入预计存放天数！" }]}
      />
    </MyModalForm>
  );
}
