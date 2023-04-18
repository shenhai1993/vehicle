import React, { useContext } from "react";
import { MyModalDataContext, MyModalRefContext, MyModalRefType } from "..";

export default function useMyModal() {
  const modalRef = useContext(MyModalRefContext) as React.MutableRefObject<
    MyModalRefType | undefined
  >;

  const item = useContext(MyModalDataContext);

  return { modalRef, item };
}
