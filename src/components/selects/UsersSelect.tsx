import MyProFormSelect from "../../common/components/MyProFormSelect";
import request from "../../common/libs/request";


export default function SchoolSelect({
 name,
 label,
 placeholder,
 defaultValue = "",
 fieldProps,
 ...rest
}: any) {
  return (
    <MyProFormSelect
      name={name || "users_id"}
      label={label || "选择教师"}
      placeholder= {placeholder || "请选择教师"}
      showSearch
      request={async ({ keyWords }) => {
        const res: any = await request("users/list", {
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
          label: "username",
          value: "id",
        },
        ...fieldProps,
      }}
      {...rest}
    />
  );
}
