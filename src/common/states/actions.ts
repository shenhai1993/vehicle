import { state, request, loopMenu } from "..";

export const stateActions = {
  addLoading: () => {
    state.session.count++;
  },
  subLoading: () => {
    if (state.session.count > 0) {
      state.session.count--;
    }
  },
  setReady(val: boolean) {
    state.session.ready = val;
  },
  setLogin(res: any) {
    state.session.user = res.data.user;
    state.session.company = res.data.company;
    state.session.permissions = res.data.permissions;
    if (res.data?.token?.access_token)
      state.storage.access_token = res.data.token.access_token;
  },
  setLogout() {
    state.session.user = undefined;
    state.session.company = undefined;
    state.session.permissions = undefined;
    state.storage.access_token = "0";
  },
  me(location: any, navigate: any) {
    request("auths/me", {})
      .then((res) => {
        stateActions.setLogin(res);
        const r = ["/login", "/"];
        if (r.includes(location.pathname)) navigate("/admin/welcome");
        stateActions.setReady(true);
      })
      .catch((err) => {
        console.log("err", err, location.pathname);
        if (location.pathname !== "/login") navigate("/login");
        stateActions.setReady(true);
      });
  },
  login(values: any, navigate: any) {
    request("auths/login", { data: values }).then((res: any) => {
      this.setLogin(res);
      navigate("/admin/welcome");
    });
  },
  logout(navigate: any) {
    this.setLogout();
    navigate("/login");
  },
  menu: () => {
    return loopMenu(state.session.permissions?.children, true);
  },
};
