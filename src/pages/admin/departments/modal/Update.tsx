import { ProFormRadio, ProFormText} from "@ant-design/pro-components";
import { MyModalDataContext, MyModalForm } from "../../../../common";
import { useContext, useState } from "react";

export default function Update({ actions }: any) {
  const item: any = useContext(MyModalDataContext);
  item.citysArray = [item?.province_code, item?.city_code, item?.area_code];
  return (
    <MyModalForm
      api={actions?.update}
      onFinish={(values: any) => {
        actions?.update({ ...values, id: item?.id });
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
