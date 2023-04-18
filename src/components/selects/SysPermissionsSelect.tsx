import { ProFormTreeSelect } from "@ant-design/pro-components";
import MyProFormTreeSelect from "../../common/components/MyProFormTreeSelect";
import request from "../../common/libs/request";

export default function SysPermissionsSelect({ name, ...rest }: any) {
  return (
    <MyProFormTreeSelect
      name={name || "parent_id"}
      label="上级菜单"
      placeholder="请选择上级菜单，不选则为根节点"
      request={() => {
        return request("sys_permissions/list", { method: "post" })
          .then((res) => res.data)
          .catch(() => undefined);
      }}
      {...rest}
    />
  );
}
