import { http } from "@/utils/http";

/** 登录 */
export const getCopywriting = (params?: object) => {
  return http.request("get", "https://v1.hitokoto.cn/", params);
};
