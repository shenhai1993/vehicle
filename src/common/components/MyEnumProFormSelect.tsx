import { ProFormSelectProps } from "@ant-design/pro-components";
import { ProFormSelect } from "@ant-design/pro-form";

type MyEnumFormSelectProps = {
  enums: any;
} & ProFormSelectProps;

export default function MyEnumProFormSelect({
  enums,
  ...rest
}: MyEnumFormSelectProps) {
  const opt = Object.values(enums)?.map((item: any) => ({
    label: item["label"],
    value: item["value"],
  }));
  return <ProFormSelect options={opt} {...rest} />;
}
