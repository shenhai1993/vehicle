import { ProColumns } from "@ant-design/pro-components";
import { ReactNode } from "react";
import { MyButtonsSoftDelete, MyEnumTag } from "..";

type MyColumnsProps = {
  key1?: any;
  key2?: any;
  enums?: any;
  actions?: any;
  _render?: (record: any) => ReactNode;
} & ProColumns;

export const MyColumns = {
  id() {
    return {
      title: "id",
      dataIndex: "id",
    };
  },
  common({ key1, key2, ...rest }: MyColumnsProps): ProColumns {
    if (key2) {
      return {
        dataIndex: [key1, key2],
        ...rest,
      };
    } else {
      return {
        dataIndex: key1,
        ...rest,
      };
    }
  },
  enumTag({ key1, enums, ...rest }: MyColumnsProps): ProColumns {
    return {
      ...rest,
      render: (_, record) => <MyEnumTag items={enums} value={record?.[key1]} />,
    };
  },
  operate({ _render, ...rest }: MyColumnsProps): ProColumns {
    return {
      title: "操作",
      key: "action",
      valueType: "option",
      align: "right",
      ...rest,
      render: (_, record) => [_render?.(record)],
    };
  },
  softDelete({ actions, ...rest }: MyColumnsProps): ProColumns {
    return {
      title: "启/禁用",
      dataIndex: "status",
      render: (_, record) => (
        <MyButtonsSoftDelete
          deleted_at={record.status}
          onConfirm={() => actions?.softDelete(record)}
        />
      ),
      ...rest,
    };
  },
};
