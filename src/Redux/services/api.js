import axios from "axios";
const baseUrl = "http://192.168.0.135:3000/api/";

export const getAllOurServicesAPI = async () =>
  await axios.get(`${baseUrl}` + "ourService/getAll-ourService");

export const getAllOurProductAPI = async () =>
  await axios.get(`${baseUrl}` + "ourProduct/getAll-ourProduct");

export const getAllOurblogAPI = async () =>
  await axios.get(`${baseUrl}` + "ourBlog/getAll-ourBlog");

export const getAllOurAllClientAPI = async () =>
  await axios.get(`${baseUrl}` + "ourClient/getAll-ourClient");
