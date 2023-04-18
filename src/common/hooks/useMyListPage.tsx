import {
  ProFormInstance,
  ProTableProps,
  QueryFilterProps,
} from "@ant-design/pro-components";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import {
  request,
  useMyModal,
  getBrowserParams,
  getRequsetParams,
  MyPaginationProps,
} from "..";
import { message } from "antd";
import { useSearchParams } from "react-router-dom";
import { useSetState } from "react-use";

type DefaultActionType =
  | "list"
  | "store"
  | "update"
  | "softDelete"
  | "delete"
  | "import"
  | "export"
  | string;

type Actions = {
  list: () => void;
  store: (data: Record<string, any>) => void;
  update: (data: Record<string, any>) => void;
  softDelete: (data: Record<string, any>) => void;
  delete: (data: Record<string, any>) => void;
  import: (data: Record<string, any>) => void;
  export: (data: Record<string, any>) => void;
  [key: string]: (...args: any) => any;
};

type useMyListPageProps = {
  defaultParams?: {
    _s?: Record<string, any>;
    _p?: Record<string, any>;
    _o?: Record<string, any>;
  };
  baseUri: string;
  uris?: Partial<Record<DefaultActionType, string>>;
  otherApi?: Record<string, (...args: any) => void>;
  searchForm?: React.ReactNode | undefined;
  tableExtra?: ProTableProps<any, any>;
};

export default function useMyListPage({
  defaultParams,
  baseUri,
  uris,
  otherApi,
  tableExtra,
}: useMyListPageProps) {
  const { modalRef } = useMyModal();
  const [res, setRes] = useState<any>({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useSetState({
    _s: searchParams.get("_s") ? JSON.parse(searchParams.get("_s")!) : {},
    _p: searchParams.get("_p") ? JSON.parse(searchParams.get("_p")!) : {},
    _o: searchParams.get("_o") ? JSON.parse(searchParams.get("_o")!) : {},
  });

  const actions: Actions = {
    list: () => {
      request(`${baseUri}/${uris?.list ?? "list"}`, {
        data: getRequsetParams(query),
      }).then((res) => {
        setRes(res);
      });
    },
    store: (values: any) => {
      request(`${baseUri}/${uris?.store ?? "store"}`, {
        data: values,
      }).then(() => {
        message.success("操作成功");
        modalRef.current?.hideModal();
        actions.list();
      });
    },
    update: (values: any) => {
      request(`${baseUri}/${uris?.update ?? "update"}`, {
        data: values,
      }).then(() => {
        message.success("操作成功");
        modalRef.current?.hideModal();
        actions.list();
      });
    },
    softDelete: (data: any) => {
      if (!data.deleted_at)
        request(`${baseUri}/${uris?.softDelete ?? "soft_delete"}`, {
          data: { id: data.id },
        }).then(() => {
          message.success("软删除成功！");
          actions.list();
        });
      else
        request(`${baseUri}/${uris?.restore ?? "restore"}`, {
          data: { id: data.id },
        }).then(() => {
          message.success("恢复成功！");
          actions.list();
        });
    },
    delete: (values?: any) => {
      request(`${baseUri}/${uris?.delete ?? "delete"}`, {
        data: values,
      }).then(() => {
        message.success("操作成功");
        actions.list();
      });
    },
    export: (data) => {
      request(`${baseUri}/${uris?.export ?? "export"}`, {
        data: data,
        responseType: "blob",
      }).then(() => {
        message.success("导出成功！");
      });
    },
    import: (data) => {
      request(`${baseUri}/${uris?.import ?? "import"}`, {
        data: data,
        responseType: "blob",
      }).then(() => {
        message.success("导出成功！");
      });
    },
    ...otherApi,
  };

  const pagination: MyPaginationProps = {
    key: "MyPagination",
    meta: res?.meta,
    onChange: (page: number, pageSize: number) => {
      setQuery({ _p: { page: page, perPage: pageSize } });
    },
  };

  const search: QueryFilterProps = {
    defaultCollapsed: false,
    formRef: useRef<ProFormInstance>(),
    onFinish: (values: any) => {
      values = _.pickBy(values, (v) => v !== "");
      setQuery({ _s: values, _p: { page: 1, perPage: 20 } });
      return Promise.resolve();
    },
    onReset: () => {
      setQuery({ _s: {}, _p: { page: 1, perPage: 20 } });
    },
  };

  const table: ProTableProps<any, any> = {
    ...tableExtra,
    rowKey: "id",
    pagination: false,
    search: false,
    scroll: { x: "max-content", scrollToFirstRowOnChange: true },
    size: "small",
    dataSource: res.data,
    options: {
      reload: () => actions?.list(),
    },
    onChange: (_1, _2, sorter: any) => {
      setQuery({
        _o: sorter?.order ? { orderBy: [sorter.field, sorter.order] } : {},
      });
    },
  };

  useEffect(() => {
    // console.log("query change", query);
    setSearchParams(getBrowserParams(query));
  }, [query]);

  useEffect(() => {
    // console.log("searchParams changed1", searchParams.toString());
    actions.list();
  }, [searchParams]);

  useEffect(() => {
    var s = JSON.parse(searchParams.get("_s") as string);
    // console.log("searchParams changed2", s);
    search.formRef?.current?.setFieldsValue(s);
  }, []);

  return { modalRef, actions, res, search, table, pagination };
}
