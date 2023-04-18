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
      name={name || "grades_id"}
      label={label || "选择年级"}
      placeholder="请选择年级"
      showSearch
      request={async ({ keyWords }) => {
        const res: any = await request("grades/list", {
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
