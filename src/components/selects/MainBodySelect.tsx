import React from "react";
import MyProFormSelect from "../../common/components/MyProFormSelect";
import request from "../../common/libs/request";

export default function CompaniesSelect({ name, ...rest }: any) {
  return (
    <MyProFormSelect
      name={name || "companies_id"}
      label={"选择公司"}
      placeholder="请选择公司"
      request={async () => {
        return request("companies/select", {
          method: "POST",
        })
          .then((res) => res.data)
          .catch(() => []);
      }}
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
