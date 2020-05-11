//import jsonp from "jsonp";
//import { message } from "antd";
import ajax from "./ajax";
//import { Base } from "bizcharts";

const BASE = "";
//登录
export const reqLogin = (username, password) =>
  ajax(BASE + "/login", { username, password }, "POST");

//添加用户
export const reqAddUser = (user) =>
  ajax(BASE + "/manage/user/add".user, "POST");
