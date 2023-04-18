import { request, MyModalForm } from "../../../../../common";
import SysPermissionsTree from "../../../../../components/trees/SysPermissionsTree";

export default function Permissions({ actions }: any) {
  return (
    <MyModalForm
      beforeRender={(item, formRef) => {
        request("sys_roles/get_permissions", {
          data: { id: item?.id },
        }).then((res) => {
          formRef?.current?.setFieldsValue(res.data);
        });
      }}
      beforeSubmit={(values: any, item: any) => {
        actions?.setPermissions(item?.id, values.permissions_ids);
      }}
    >
      <SysPermissionsTree />
    </MyModalForm>
  );
}
