import React from "react";
import { useRef } from "react";
import { MyModalRefType, MyModal } from "../../";

export const MyModalRefContext = React.createContext({});

export default function MyModalProvider({ children }: any) {
  const ref = useRef<MyModalRefType>();

  return (
    <MyModalRefContext.Provider value={ref}>
      <MyModal ref={ref} />
      {children}
    </MyModalRefContext.Provider>
  );
}
