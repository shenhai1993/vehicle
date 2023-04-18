import { SaveOutlined } from "@ant-design/icons";
import { ProFormInstance } from "@ant-design/pro-components";
import type { ProFormProps } from "@ant-design/pro-form";
import ProForm from "@ant-design/pro-form";
import { Button, Col, Row, Space } from "antd";
import { useContext, useEffect, useRef } from "react";
import { MyModalDataContext } from "..";

type MyModalFormProps = {
  /**
   * @description: 提交的api
   */
  api?: any;
  /**
   * 在渲染页面之前，可以对item进行处理
   * @param item
   * @param formRef
   * @returns
   */
  beforeRender?: (
    item: any,
    formRef: React.MutableRefObject<ProFormInstance<any> | undefined>
  ) => void;
  /**
   * 提交
   * @param values
   * @param item
   * @returns
   */
  beforeSubmit?: (values: any, item: any) => void;
};

export default function MyModalForm({
  api,
  onLoad,
  beforeRender,
  beforeSubmit,
  children,
  ...rest
}: MyModalFormProps & ProFormProps) {
  const item = useContext(MyModalDataContext);
  const formRef = useRef<ProFormInstance<any>>();

  useEffect(() => {
    if (item) {
      if (beforeRender) {
        beforeRender?.(item, formRef);
      } else {
        formRef?.current?.setFieldsValue(item);
      }
    }
  }, [item]);

  return (
    <ProForm
      labelCol={{ sm: { span: 6 } }}
      wrapperCol={{ sm: { span: 14 } }}
      layout="horizontal"
      formRef={formRef}
      onFinish={(values: any) => {
        if (beforeSubmit) {
          beforeSubmit?.(values, item);
        } else {
          api?.({ ...values, id: item?.id });
        }
        return Promise.resolve();
      }}
      submitter={{
        render: () => {
          return (
            <Row>
              <Col span={4} offset={6}>
                <Space>
                  <Button type="primary" htmlType="submit">
                    <SaveOutlined />
                    确定
                  </Button>
                </Space>
              </Col>
            </Row>
          );
        },
      }}
      {...rest}
    >
      {children as any}
    </ProForm>
  );
}
