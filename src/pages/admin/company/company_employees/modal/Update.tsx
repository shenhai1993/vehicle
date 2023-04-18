import { ProCard, ProFormText } from "@ant-design/pro-components";
import { MyModalDataContext, MyModalForm } from "../../../../../common";
import CitysCascader from "../../../../../components/cascader/CitysCascader";
import MyCompaniesTypeSelect from "../../../../../components/selects/CompaniesTypeSelect";
import CompaniesSelect from "../../../../../components/selects/CompaniesSelect";
import { useContext, useState } from "react";

export default function Update({ actions }: any) {
  const item: any = useContext(MyModalDataContext);
  const [selectedOptions, setSelectedOptions] = useState<any>([]);
  item.citysArray = [item?.province_code, item?.city_code, item?.area_code];
  return (
    <MyModalForm
      api={actions?.update}
      onFinish={(values: any) => {
        values.province = selectedOptions[0]?.label;
        values.province_code = selectedOptions[0]?.value;
        values.city = selectedOptions[1]?.label;
        values.city_code = selectedOptions[1]?.value;
        values.area = selectedOptions[2]?.label;
        values.area_code = selectedOptions[2]?.value;
        actions?.update({ ...values, id: item?.id });
        return Promise.resolve();
      }}
    >
      <CompaniesSelect
        label="上级机构"
        name="parent_id"
        defaultValue={` ${item?.parent_id}`}
      />
      <MyCompaniesTypeSelect
        rules={[{ required: true, message: "请选择类型！" }]}
      />
      <ProFormText
        name="name"
        placeholder="机构名称"
        label="机构名称"
        rules={[{ required: true, message: "请输入机构名称！" }]}
      />
      <ProFormText
        name="code"
        placeholder="机构编码"
        label="机构编码"
        rules={[{ required: true, message: "请输入机构编码！" }]}
      />
      <CitysCascader
        label="选择城市"
        name="citysArray"
        fieldProps={{
          onChange: (e: any, selectedOptions: any) => {
            setSelectedOptions(selectedOptions);
          },
        }}
      />
      <ProCard title="管理信息" headerBordered>
        <MyCompaniesTypeSelect label="机构签约人" name="corp_signers_id" />
        <MyCompaniesTypeSelect label="机构维护人" name="corp_maintainers_id" />
        <MyCompaniesTypeSelect
          label="机构审核人"
          name="contract_verifiers_id"
        />
      </ProCard>
      <ProCard title="工商信息" headerBordered>
        <ProFormText
          name="biz_company_name"
          placeholder="公司名称"
          label="公司名称"
        />
        <ProFormText
          name="biz_license_no"
          placeholder="营业执照号码"
          label="统一社会代码"
        />
        <ProFormText name="biz_legal_person" placeholder="法人" label="法人" />
        <ProFormText
          name="biz_address"
          placeholder="联系方式"
          label="联系方式"
        />
        <ProFormText
          name="biz_license_img"
          placeholder="营业执照图片"
          label="营业执照图片"
        />
      </ProCard>
    </MyModalForm>
  );
}
