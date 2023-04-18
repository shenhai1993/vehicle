import { css } from "@emotion/react";
import { Spin } from "antd";

const style = css`
  top: 0;
  left: 0;
  buttom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    padding-top: 70px;
  }
`;

export default function MyFullLoading() {
  return (
    <div css={style}>
      <Spin size="large">
        <div className="content" />
        Loading...
      </Spin>
    </div>
  );
}
