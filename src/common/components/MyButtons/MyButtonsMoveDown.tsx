import { DownOutlined } from "@ant-design/icons";
import { ButtonProps, Button } from "antd";

export default function MyButtonsMoveDown({ ...rest }: ButtonProps) {
  return <Button size="small" icon={<DownOutlined />} {...rest} />;
}
