import MyProFormSelect from "../../common/components/MyProFormSelect";
import request from "../../common/libs/request";


export default function CarsSelect({
   name,
   label,
   defaultValue = "",
   fieldProps,
   ...rest
 }: any) {
  return (
    <MyProFormSelect
      name={name || "cars_id"}
      label={label || "选择车辆"}
      placeholder="请选择车辆"
      showSearch
      request={async ({ keyWords }) => {
        const res: any = await request("cars/list", {
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
          label: "user_name",
          value: "id",
        },
        ...fieldProps,
      }}
      {...rest}
    />
  );
}
