import { UpOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";

export default function MyButtonsMoveUp({ ...rest }: ButtonProps) {
  return <Button size="small" icon={<UpOutlined />} {...rest} />;
}
