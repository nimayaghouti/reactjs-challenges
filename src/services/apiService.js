import axios from "axios";

const BASE_URL = "https://dummyjson.com/";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
