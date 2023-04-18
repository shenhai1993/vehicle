import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Popconfirm, Tag } from "antd";

export default function MyButtonsSoftDelete({ deleted_at, onConfirm }: any) {
  return (
    <Popconfirm
      title={deleted_at===0 ? "确定要恢复？" : "确定要禁用？"}
      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      onConfirm={onConfirm}
    >
      <Tag color={deleted_at===0 ? "gray" : "green"} style={{ cursor: "pointer" }}>
        {deleted_at===0 ? (
          <>
            <CloseCircleOutlined />
            已禁用
          </>
        ) : (
          <>
            <CheckCircleOutlined />
            已启用
          </>
        )}
      </Tag>
    </Popconfirm>
  );
}
