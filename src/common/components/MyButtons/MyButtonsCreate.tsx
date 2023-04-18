import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, ButtonProps } from "antd";

export default function MyButtonsCreate({ title, ...rest }: ButtonProps) {
  return (
    <Button
      key="MyButtonsCreate"
      type="primary"
      icon={<PlusSquareOutlined />}
      {...rest}
    >
      {title}
    </Button>
  );
}
