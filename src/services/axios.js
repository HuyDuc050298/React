import axios from "axios";
import Cookie from "js-cookie";

const service = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
  }
});

service.interceptors.request.use(
  config => {
    const token = Cookie.get("prego_token");
    if (token) {
      config.headers.common["Accept"] = "application/json";
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
    response => response.data,  
);

export default service;
