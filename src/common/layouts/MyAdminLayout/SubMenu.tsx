import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import { push } from "../..";

const style = css`
  display: flex;
  padding: 0 40px;
  height: 45px;
  line-height: 45px;
  background-color: #fff;
  .two_menu_btn {
    margin-right: 30px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: #1677ff;
      border-bottom: 2px solid #1677ff;
    }
  }
  .two_menu_btn_active {
    color: #1677ff;
    border-bottom: 2px solid #1677ff;
  }
`;

export default function SubMenu({ permissions, onChange }: any) {
  const [getPermissions, setPermissions] = useState([]);
  const navigate = useNavigate();
  let location = useLocation();

  const actions = {
    mapMenu: (list: any, type: number) => {
      list?.map((res: any) => {
        if (location?.pathname?.indexOf(res?.url) > -1) {
          if (type == 2) {
            setPermissions(list);
            onChange(list);
          } else {
            setPermissions([]);
            onChange([]);
          }
        }
        if (res?.children.length > 0) {
          actions?.mapMenu(res?.children, 2);
        }
      });
    },
  };

  useEffect(() => {
    actions?.mapMenu(permissions, 1);
  }, [location?.pathname]);

  return getPermissions?.length > 0 ? (
    <div css={style}>
      {getPermissions?.map((res: any, index: number) => {
        return (
          <div
            onClick={() => {
              push(navigate, res?.url);
            }}
            key={`two_menu_key_${index}`}
            className={
              res?.url == location?.pathname
                ? "two_menu_btn two_menu_btn_active"
                : "two_menu_btn"
            }
          >
            {res?.title}
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
}
