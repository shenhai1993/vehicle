import {
  PageContainer,
  ProCard,
  QueryFilter,
  ProTable,
} from "@ant-design/pro-components";
import { css } from "@emotion/react";
import { Space } from "antd";
import { MyPagination } from "..";

const style = css`
  .ant-pro-page-container-children-content {
    margin: 0;
    padding: 0;
    min-height: calc(100vh - 150px);
    position: relative;
    z-index: 0;
  }
`;

export default function MyListPage({
  res,
  search,
  table,
  pagination,
  searchFormItems,
  columns,
  toolBarRender,
}: any) {
  const actions = {
    onSearchShow: () => {
      if (searchFormItems && searchFormItems?.length > 0) {
        return (
          <ProCard bordered={false} bodyStyle={{ padding: 0 }} size="small">
            <QueryFilter {...search}>
              {searchFormItems.map((item: any) => item)}
            </QueryFilter>
          </ProCard>
        );
      }
    },
    onProTableShow: (data: any) => {
      if (data) {
        return (
          <ProTable
            {...table}
            columns={columns}
            toolBarRender={toolBarRender}
          />
        );
      }
    },
  };

  return (
    <div css={style}>
      <PageContainer
        title={false}
        footer={res.meta ? [<MyPagination {...pagination} />] : undefined}
        waterMarkProps={{ content: "waterMarkProps" }}
      >
        <Space
          direction="vertical"
          css={{ width: "100%", padding: 0, margin: 0 }}
        >
          {actions?.onSearchShow()}
          <ProCard
            bordered={false}
            bodyStyle={{ padding: 0, margin: 0 }}
            size="small"
          >
            {actions?.onProTableShow(res?.data)}
          </ProCard>
        </Space>
      </PageContainer>
    </div>
  );
}
