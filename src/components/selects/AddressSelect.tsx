import MyProFormSelect from "../../common/components/MyProFormSelect";
import request from "../../common/libs/request";


export default function AddressSelect({
   name,
   label,
   defaultValue = "",
   fieldProps,
   ...rest
 }: any) {
  return (
    <MyProFormSelect
      name={name || "addresses_id"}
      label={label || "选择场地"}
      placeholder="请选择场地"
      showSearch
      request={async ({ keyWords }) => {
        const res: any = await request("addresses/list", {
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
          label: "address",
          value: "id",
        },
        ...fieldProps,
      }}
      {...rest}
    />
  );
}
