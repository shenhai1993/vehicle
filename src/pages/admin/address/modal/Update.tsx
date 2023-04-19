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
        name="name"
        placeholder="学校名称"
        label="学校名称"
        rules={[{ required: true, message: "请输入学校名称！" }]}
      />
      <ProFormText
        name="phone"
        placeholder="联系电话"
        label="联系电话"
      />
      <ProFormText
        name="address"
        placeholder="学校地址"
        label="学校地址"
      />
      <ProFormText
        name="username"
        placeholder="负责人姓名"
        label="负责人姓名"
      />
      <ProFormRadio.Group
        radioType="button"
        name="status"
        label="状态"
        options={[
          { label: '启用', value: 1 },
          { label: '禁用', value: 0 }]}
        rules={[{ required: true, message: '请选择状态' }]}
      />
    </MyModalForm>
  );
}
