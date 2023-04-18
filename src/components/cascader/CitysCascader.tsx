import { MyCascader } from "../../common";
import citys from "./citys.json";

export default function CitysCascader({ fieldProps, ...rest }: any) {
  return (
    <MyCascader
      allowClear
      showSearch
      fieldProps={{
        options: citys?.data,
        changeOnSelect: true,
        ...fieldProps,
      }}
      {...rest}
    />
  );
}
