import {
  useMyListPage,
  MyListPage,
  MyColumns,
  MyButtonsCreate,
} from "../../../../../common";
import Create from "./modal/Create";

export default function rent() {
  const { modalRef, actions, res, search, table, pagination } = useMyListPage({
    baseUri: "projects",
  });

  return (
    <MyListPage
      {...{ res, search, table, pagination }}
      columns={[
        MyColumns.id(),
        MyColumns.common({
          title: "名称",
          key1: "name",
          sorter: true,
        }),
        MyColumns.common({
          title: "编码",
          key1: "code",
        }),
        {
          title: "封面图",
        },
      ]}
      toolBarRender={() => [
        <MyButtonsCreate
          key="MyButtonsCreate"
          title="单个添加"
          onClick={() =>
            modalRef.current?.showModal({
              title: "单个添加",
              defaultData: undefined,
              child: <Create actions={actions} />,
            })
          }
        />,
      ]}
    />
  );
}
