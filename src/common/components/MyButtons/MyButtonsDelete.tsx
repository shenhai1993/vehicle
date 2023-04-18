import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, ButtonProps, Popconfirm } from "antd";

export default function MyButtonsDelete({
  title,
  onConfirm,
  ...rest
}: ButtonProps & {
  onConfirm: () => void;
}) {
  return (
    <Popconfirm
      title={`确定要${title || "删除"}?`}
      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      onConfirm={() => onConfirm()}
    >
      <Button icon={<DeleteOutlined />} danger size="small" {...rest}>
        {title || "删除"}
      </Button>
    </Popconfirm>
  );
}
