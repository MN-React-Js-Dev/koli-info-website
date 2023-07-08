import axios from "axios";
const baseUrl = "http://localhost:3000/api/";

export const getAllOurServicesAPI = async () =>
  await axios.get(`${baseUrl}ourService/getAll-ourService`);

export const getAllOurProductAPI = async () =>
  await axios.get(`${baseUrl}ourProduct/getAll-ourProduct`);

export const getAllOurblogAPI = async () =>
  await axios.get(`${baseUrl}ourBlog/getAll-ourBlog`);

export const getAllOurAllClientAPI = async () =>
  await axios.get(`${baseUrl}ourClient/getAll-ourClient`);

export const getSingleClientAPI = async (id) =>
  await axios.get(`${baseUrl}/ourClient/${id}`);

export const getAllCurrentOpeningAPI = async () =>
  await axios.get(`${baseUrl}openings/getAll-openings`);

export const getAllEmployeeAPI = async () =>
  await axios.get(`${baseUrl}employee/getAll-employee`);

export const postContactUsAPI = async (contsactus) =>
  await axios.post(`${baseUrl}contactUs/create`, contsactus);

export const getSingleOpeningsAPI = async (id) =>
  await axios.get(`${baseUrl}openings/${id}`);

export const createApplyJobAPI = async (data) =>
  await axios.post(`${baseUrl}/applyjob/create`, data);
  // await axios.post(`${baseUrl}contactUscreate`, contsactus);
