import MyProFormSelect from "../../common/components/MyProFormSelect";
import request from "../../common/libs/request";

export default function CompaniesSelect({
  name,
  label,
  defaultValue = "",
  fieldProps,
  ...rest
}: any) {
  return (
    <MyProFormSelect
      name={name || "companies_id"}
      label={label || "选择公司"}
      placeholder="请选择公司"
      showSearch
      request={async ({ keyWords }) => {
        const res: any = await request("companies/select", {
          method: "POST",
          data: { keyword: keyWords || defaultValue },
        });
        if (res.code == 0) {
          defaultValue = "";
          return res.data;
        }
      }}
      fieldProps={{
        ...fieldProps,
      }}
      {...rest}
    />
  );
}
