import axios from "axios";

// const token = JSON.parse((JSON.stringify(localStorage.getItem("USER"))));

// console.log("TOKEN~~~", token);

/* const headersParam = {
    "Authorization" : `Bearer ${token}`,
    // "Content-Type": "application/json"

}; */

let headersList = {
  "Content-Type": "application/json"
};


export const getAllOurServicesAPI = async () =>
  await axios.get("http://192.168.0.135:3000/api/ourService/getAll-ourService");

export const getAllOurProductAPI = async () => await axios.get("http://192.168.0.135:3000/api/ourProduct/getAll-ourProduct");

export const getAllOurblogAPI = async () => await axios.get("http://192.168.0.135:3000/api/ourBlog/getAll-ourBlog");

