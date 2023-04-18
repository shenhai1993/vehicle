import React from "react";
import { MyProFormSelect, request } from "../../common";
import { ProFormSelectProps } from "@ant-design/pro-components";

type Props = {
  defaultValue?: string;
} & ProFormSelectProps;

export default function CompanyAdminsSelect({
  name,
  label,
  defaultValue = "",
  fieldProps,
  ...rest
}: Props) {
  return (
    <MyProFormSelect
      name={name}
      label={label}
      placeholder="请选择管理员"
      showSearch
      request={async ({ keyword }) => {
        return request("company_admins/select", {
          method: "POST",
          data: { keyword: keyword || defaultValue },
        }).then((res) => res.data);
      }}
      fieldProps={{
        ...fieldProps,
      }}
      {...rest}
    />
  );
}
