import { ProFormSelectProps } from "@ant-design/pro-components";
import { MyEnumProFormRadioGroup } from "../../common";
import { CompanyTypeEnum } from "../../const/enums";

export default function SysRolesSelect({
  name,
  label,
  ...rest
}: ProFormSelectProps) {
  return (
    <MyEnumProFormRadioGroup
      name="type"
      label="选择类型"
      placeholder="请选择类型"
      allowClear
      enums={CompanyTypeEnum}
      {...rest}
    />
  );
}
