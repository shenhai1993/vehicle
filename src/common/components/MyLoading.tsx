import { css } from "@emotion/react";
import { Spin } from "antd";
import { useMyState } from "../states";

const style = css`
  top: 0;
  left: 0;
  buttom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  .content {
    padding-top: 70px;
  }
`;

export default function MyLoading() {
  const { snap } = useMyState();
  if (snap.session.count === 0) return null;

  return (
    <div css={style}>
      <Spin size="large">
        <div className="content" />
        Loading...
      </Spin>
    </div>
  );
}
