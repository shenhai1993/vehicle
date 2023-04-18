import {
  ProFormSelectProps,
  ProFormTreeSelect,
} from "@ant-design/pro-components";

export default function MyProFormTreeSelect({ ...rest }: ProFormSelectProps) {
  return (
    <ProFormTreeSelect
      width={300}
      allowClear
      fieldProps={
        {
          showSearch: true,
          treeNodeFilterProp: "title",
          treeDefaultExpandAll: true,
          fieldNames: {
            label: "title",
            value: "id",
            children: "children",
          },
        } as any
      }
      {...rest}
    />
  );
}
