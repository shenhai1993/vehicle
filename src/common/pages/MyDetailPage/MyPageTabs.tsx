import { Tabs } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MyPageTabs({ items = [], ...rest }: any) {
  let location = useLocation();
  const [getDefaultActiveKey, setDefaultActiveKey] = useState<any>("settings");

  useEffect(() => {
    items?.map((res: any) => {
      if (location?.pathname?.indexOf(res?.key) > -1) {
        setDefaultActiveKey(res?.key);
      }
    });
  }, []);

  return (
    <Tabs
      activeKey={getDefaultActiveKey}
      items={items}
      onTabClick={(e: any) => {
        setDefaultActiveKey(e);
      }}
      {...rest}
    />
  );
}
