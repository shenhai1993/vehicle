import { EditOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";

export default function MyButtonsEdit({ title, ...rest }: ButtonProps) {
  return (
    <Button type="primary" size="small" ghost icon={<EditOutlined />} {...rest}>
      {title || "编辑"}
    </Button>
  );
}
