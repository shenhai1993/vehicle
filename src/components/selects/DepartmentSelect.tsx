import MyProFormSelect from "../../common/components/MyProFormSelect";
import request from "../../common/libs/request";


export default function DepartmentSelect({
   name,
   label,
   placeholder,
   defaultValue = "",
   fieldProps,
   ...rest
 }: any) {
  return (
    <MyProFormSelect
      name={name || "departments_id"}
      label={label || "选择部门"}
      placeholder= {placeholder || "请选择部门"}
      showSearch
      request={async ({ keyWords }) => {
        const res: any = await request("departments/list", {
          method: "POST",
          data: { keyword: keyWords || defaultValue },
        });
        if (res.code == 0) {
          defaultValue = "";
          return res.data;
        }
      }}
      fieldProps={{
        fieldNames: {
          label: "departments_name",
          value: "id",
        },
        ...fieldProps,
      }}
      {...rest}
    />
  );
}
