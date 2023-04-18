import { ProFormCascader } from "@ant-design/pro-components";

export default function MyCascader({ options, ...rest }: any) {
  return <ProFormCascader options={options} {...rest} />;
}
