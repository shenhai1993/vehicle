import { Pagination } from "antd";

export type ResDataMetaProps = {
  /**
   * 当前页
   * @default 1
   */
  current_page: number;
  /**
   * 最后一页
   */
  last_page: number;
  /**
   * 每页记录数
   * @default 20
   */
  per_page: number;
  /**
   * 总记录数
   * @default 0
   */
  total: number;
};

export type MyPaginationProps = {
  key: string;
  meta?: ResDataMetaProps | any;
  onChange: (page: number, pageSize: number) => void;
};

export default function MyPagination({ meta, onChange }: MyPaginationProps) {
  return (
    <div style={{ padding: "10px 0" }}>
      <Pagination
        current={meta?.current_page || 1}
        total={meta?.total || 0}
        pageSize={meta?.per_page || 20}
        onChange={onChange}
        size="small"
        showTotal={(total) => `总共${total}条`}
        showSizeChanger
        showQuickJumper
      />
    </div>
  );
}
