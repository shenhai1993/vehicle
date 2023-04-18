import { ProFormText, ProFormUploadButton} from "@ant-design/pro-components";
import {MyModalForm, request} from "../../../../common";
export default function Add( props:any) {
  let Upload = {
    //数量
  }
  return (
    <MyModalForm
      beforeSubmit={(values: any, item: any) => {
        values.file = values.files[0].thumbUrl
        delete values.files
        request("/cars/add", {
          data: values,
        }).then((res) => {
          if (res?.code===0) {
            props.modalRef.current?.hideModal()
            props.actions.list()
          }
          // formRef?.current?.setFieldsValue(res.data);
        });
      }}
    >
      <ProFormText
        name="car_number"
        placeholder="车牌号"
        label="车牌号"
        rules={[{ required: true, message: "请输入车牌号！" }]}
      />
      <ProFormText
        name="user_name"
        placeholder="车主姓名"
        label="车主姓名"
        rules={[{ required: true, message: "请输入车主姓名！" }]}
      />
      <ProFormText
        name="phone"
        placeholder="车主手机号"
        label="车主手机号"
        rules={[{ required: true, message: "请输入车主手机号！" }]}
      />
      <ProFormText
        name="brand"
        placeholder="汽车品牌"
        label="汽车品牌"
        rules={[{ required: true, message: "请输入汽车品牌！" }]}
      />
      <ProFormText
        name="color"
        placeholder="汽车颜色"
        label="汽车颜色"
        rules={[{ required: true, message: "请输入汽车颜色！" }]}
      />
      <ProFormText
        name="remark"
        placeholder="备注"
        label="备注"
        rules={[{ required: true, message: "请输入备注！" }]}
      />
      <ProFormText
        name="estimated_time"
        placeholder="请输入预计存放天数"
        label="预计存放天数"
      />
      <ProFormUploadButton
        label="图片"
        max={1}
        name="files"
      />
    </MyModalForm>
  );
}
