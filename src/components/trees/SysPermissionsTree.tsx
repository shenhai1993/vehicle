import { Form } from "antd";
import { useEffect, useState } from "react";
import MyProFormTree, {
  MyProFormTreeProps,
} from "../../common/components/MyProFormTree";
import request from "../../common/libs/request";

export default function SysPermissionsTree({ ...rest }: MyProFormTreeProps) {
  const [treeData, setTreeData] = useState<any[]>([]);

  useEffect(() => {
    request("sys_permissions/tree", { method: "post" }).then((res) => {
      setTreeData(res.data);
    });
  }, []);

  return (
    <Form.Item name="permissions_ids" label="选择菜单">
      <MyProFormTree
        fieldNames={{ title: "name", key: "id", children: "children" }}
        treeData={treeData}
        {...rest}
      />
    </Form.Item>
  );
}
