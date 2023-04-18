import { ConfigProvider } from "antd";
import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  useMyState,
  stateActions,
  MyFullLoading,
  MyLoading,
  MyModalProvider,
} from "..";

export default function RootLayout() {
  const { snap } = useMyState();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    stateActions.me(location, navigate);
  }, []);

  return (
    <ConfigProvider>
      <MyLoading />
      <MyModalProvider>
        {snap.session.ready ? <Outlet /> : <MyFullLoading />}
      </MyModalProvider>
    </ConfigProvider>
  );
}
