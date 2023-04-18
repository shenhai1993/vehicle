import { Tree, TreeProps } from "antd";
import { Key, useEffect, useState } from "react";

export type MyProFormTreeProps = {
  value?: Key[];
  onChange?: (value: Key[]) => void;
} & TreeProps;

export default function MyProFormTree({
  treeData,
  value,
  onChange,
  ...rest
}: MyProFormTreeProps) {
  const [checkedKeys, setCheckedKeys] = useState<Key[]>([]);

  const onCheck = (checked: Key[] | { checked: Key[]; halfChecked: Key[] }) => {
    setCheckedKeys(checked as Key[]);
    onChange?.(checked as Key[]);
  };

  useEffect(() => {
    if (value) {
      setCheckedKeys(value as Key[]);
    }
  }, [value]);

  return treeData?.length === 0 ? null : (
    <Tree
      checkable
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      treeData={treeData}
      defaultExpandAll={true}
      {...rest}
    />
  );
}
