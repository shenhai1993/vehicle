import { Tag } from "antd";

export default function MyEnumTag({ items = null, value, ...rest }: any) {
  let color = "";
  Object.values(items)?.forEach((item: any) => {
    if (item["value"] === value) color = item["color"];
  });
  return <Tag color={color}>{items?.[value]?.label || value}</Tag>;
}
