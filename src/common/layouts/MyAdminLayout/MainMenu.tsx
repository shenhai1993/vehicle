import { useLocation, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { push } from "../..";

const style = css`
  text-align: center;
  display: flex;
  margin-left: 20px;
  .MenuBtnInfo {
    margin-left: 15px;
    cursor: pointer;
    position: relative;
    .FindBtn {
      min-width: 70px;
      height: 40px;
      line-height: 40px;
      margin: 5px 0;
    }
    .FindBtnInfo {
      position: absolute;
      left: 0;
      display: none;
      color: #fff;
      z-index: 2000;
      padding: 20px 0 15px 16px;
      background-color: #001529;
      text-align: left;
      .F_find_info_c {
        min-width: 110px;
        .menuTitle {
          border-left: 3px solid #999;
          height: 13px;
          line-height: 13px;
          padding-left: 6px;
          font-size: 15px;
          margin-bottom: 17px;
          color: #999;
        }
        .F_find_c_btn {
          height: 32px;
          line-height: 32px;
          margin-top: 10px;
          font-size: 13px;
          &:hover {
            color: #1677ff;
          }
        }
        .F_find_c_btn_active {
          color: #1677ff;
        }
      }
    }
    &:hover {
      .FindBtn {
        background-color: #1677ff;
      }
      .FindBtnInfo {
        display: flex;
      }
    }
    .FindBtn_active {
      background-color: #1677ff;
    }
  }
`;

export default function MainMenu({ permissions }: any) {
  const navigate = useNavigate();
  let location = useLocation();

  const MenuFList = ({ items }: any) => {
    if (items?.length > 0) {
      return (
        <div className="FindBtnInfo">
          {items?.map((json: any) => {
            return (
              <div className="F_find_info_c" key={`finds_${json?.title}`}>
                <div className="menuTitle">{json.title}</div>
                <div>
                  {json?.children?.map((k: any) => {
                    return (
                      <div
                        className={
                          k?.url == location?.pathname
                            ? "F_find_c_btn F_find_c_btn_active"
                            : "F_find_c_btn"
                        }
                        key={`F_find_c_btn_${k?.title}`}
                        onClick={() => {
                          push(navigate, k?.url);
                        }}
                      >
                        {k?.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <></>;
    }
  };

  const actions = {
    onMenuActive: (res: any) => {
      if (res?.url == location?.pathname) {
        return "FindBtn FindBtn_active";
      } else {
        if (res?.children.length > 0) {
          return res?.children?.map((json: any) => {
            if (json?.url == location?.pathname) {
              return "FindBtn FindBtn_active";
            } else {
              if (json?.children.length > 0) {
                let classNames: any = actions.onMenuActive(json);
                if (classNames.indexOf("FindBtn FindBtn_active") > -1) {
                  return "FindBtn FindBtn_active";
                } else {
                  return "FindBtn";
                }
              } else {
                return "FindBtn";
              }
            }
          });
        } else {
          return "FindBtn";
        }
      }
    },
  };

  return (
    <div css={style}>
      {permissions?.map((res: any, index: number) => {
        return (
          <div className="MenuBtnInfo" key={`MenuFindBtn_${index}`}>
            <div
              className={
                actions?.onMenuActive(res)?.indexOf("FindBtn FindBtn_active") >
                -1
                  ? "FindBtn FindBtn_active"
                  : "FindBtn"
              }
              onClick={() => push(navigate, res?.url)}
            >
              {res?.title}
            </div>
            <MenuFList items={res?.children} />
          </div>
        );
      })}
    </div>
  );
}
