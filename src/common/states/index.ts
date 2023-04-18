import { proxy, subscribe, snapshot, useSnapshot } from "valtio";

export * from "./actions";

function proxyWithPersistant<V>(
  val: V,
  opts: {
    key: string;
  }
) {
  const local = localStorage.getItem(opts.key);
  const state = proxy(local ? JSON.parse(local) : val);
  subscribe(state, () => {
    localStorage.setItem(opts.key, JSON.stringify(snapshot(state)));
  });
  return state;
}

type StorageType = {
  access_token: string;
};
const storage: StorageType = proxyWithPersistant(
  {
    access_token: "0",
  },
  {
    key: import.meta.env.VITE_TOKEN_NAME as string,
  }
);

type SessionType = {
  ready: boolean;
  count: number;
  user?: any;
  company?: any;
  permissions?: any;
  pathInfo?: any; // 当前选择的路由节点
};
const session: SessionType = proxy({
  ready: false,
  count: 0,
  user: undefined,
  company: undefined,
  permissions: undefined,
  pathInfo: undefined, // 当前选择的路由节点
});

export type StateType = {
  storage: StorageType;
  session: SessionType;
};
export const state: StateType = proxy({
  storage,
  session,
});

export function useMyState() {
  const snap = useSnapshot<StateType>(state);
  return { snap };
}
