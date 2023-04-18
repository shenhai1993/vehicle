import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  LoginForm,
  ProFormText,
  ProConfigProvider,
} from "@ant-design/pro-components";
import { useNavigate } from "react-router-dom";
import { stateActions } from "..";
import CitysCascader from "../../components/cascader/CitysCascader";
export default function MyLoginPage() {
  const navigate = useNavigate();
  return (
    <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: "white" }}>
        <LoginForm
          // logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          title="管理系统"
          subTitle="全球最大后台管理系统"
          onFinish={async (values) => {
            stateActions.login(values, navigate);
          }}
        >
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: "large",
                prefix: <UserOutlined className={"prefixIcon"} />,
              }}
              placeholder={"登录账号"}
              rules={[
                {
                  required: true,
                  message: "请输入账号!",
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined className={"prefixIcon"} />,
              }}
              placeholder={"登录密码"}
              rules={[
                {
                  required: true,
                  message: "请输入密码！",
                },
              ]}
            />
          </>
        </LoginForm>
      </div>
    </ProConfigProvider>
  );
}
