import { ProFormRadio, ProFormSelectProps } from "@ant-design/pro-components";

type MyEnumProFormRadioGroupProps = {
  enums: any;
} & ProFormSelectProps;

export default function MyEnumProFormRadioGroup({
  enums,
  ...rest
}: MyEnumProFormRadioGroupProps) {
  const opt = Object.values(enums)?.map((item: any) => ({
    label: item["label"],
    value: item["value"],
  }));

  return (
    <ProFormRadio.Group
      radioType="button"
      fieldProps={{ buttonStyle: "solid" } as any}
      options={opt as any}
      {...rest}
    />
  );
}
