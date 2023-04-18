import { ProFormSelectProps } from "@ant-design/pro-components";
import React from "react";
import MyProFormSelect from "../../common/components/MyProFormSelect";
import request from "../../common/libs/request";

export default function SysRolesSelect({
  name,
  label,
  ...rest
}: ProFormSelectProps) {
  return (
    <MyProFormSelect
      name={name || "roles_id"}
      label={label || "选择角色"}
      placeholder="请选择所属角色"
      request={async () => {
        return request("sys_roles/select", {
          method: "POST",
        })
          .then((res) => res.data)
          .catch(() => []);
      }}
      mode="multiple"
      allowClear
      fieldProps={{
        fieldNames: {
          label: "name",
          value: "id",
        },
      }}
      {...rest}
    />
  );
}
