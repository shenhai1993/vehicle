import MyProFormSelect from "../../common/components/MyProFormSelect";
import request from "../../common/libs/request";


export default function SchoolSelect({
   name,
   label,
   defaultValue = "",
   fieldProps,
   ...rest
 }: any) {
  return (
    <MyProFormSelect
      name={name || "schools_id"}
      label={label || "选择学校"}
      placeholder="请选择公司"
      showSearch
      request={async ({ keyWords }) => {
        const res: any = await request("schools/list", {
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
          label: "name",
          value: "id",
        },
        ...fieldProps,
      }}
      {...rest}
    />
  );
}
