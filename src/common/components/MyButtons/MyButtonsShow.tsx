import { EyeOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";

export default function MyButtonsShow({ title, ...rest }: ButtonProps) {
  return (
    <Button type="primary" size="small" icon={<EyeOutlined />} {...rest}>
      {title || "查看"}
    </Button>
  );
}
