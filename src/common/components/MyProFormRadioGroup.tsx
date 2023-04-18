import {
  ProFormRadio,
  ProFormRadioGroupProps,
} from "@ant-design/pro-components";

export default function MyProFormRadioGroup({
  ...rest
}: ProFormRadioGroupProps) {
  return (
    <ProFormRadio.Group
      radioType="button"
      fieldProps={{ buttonStyle: "solid" }}
      {...rest}
    />
  );
}
