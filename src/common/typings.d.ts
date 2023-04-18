// import type { ModalProps } from "antd";

// export type UserType = {
//   id: number;
//   username: string;
//   avatar: string;
// };

// export type PermissionsType = {
//   name: string;
//   path: string;
//   children: PermissionsType[];
//   icon: string;
//   id: number;
//   parent_id: number;
//   title: string;
//   type: string;
//   url: string;
// };

// export type ResponseDataType = {
//   code: number;
//   message: string;
//   description?: string | undefined;
//   type?: string | undefined;
//   data: any;
//   meta?: any;
//   additions?: any;
//   statistics?: any;
//   responseType?: string | undefined;
// };

// export type ParamsType = {
//   s?: Record<string, any>;
//   t?: {
//     orderBy?: string[];
//   };
//   p?: {
//     page: number;
//     perPage: number;
//   };
// };

// export type MyModalRefType = {
//   showModal: (data: MyModalProps) => void;
//   hideModal: () => void;
// };

// export type MyModalProps = ModalProps & {
//   /**
//    * 默认数据
//    */
//   defaultData?: Record<string, any>;
//   /**
//    * 子节点
//    */
//   child: JSX.Element;
// };

// export type Actions = {
//   list: () => void;
//   store: (data: Record<string, any>) => void;
//   update: (data: Record<string, any>) => void;
//   softDelete: (data: Record<string, any>) => void;
//   delete: (data: Record<string, any>) => void;
//   [key: string]: (...args: any) => any;
// };
