import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: { "Content-type": "application/json" },
});

api.interceptors.request.use(
  function (config) {
    // console.log("Request Active", config);
    return config;
  },
  function (error) {
    // console.log("Request Error", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    // console.log("Request Response", response);
    return response;
  },
  function (error) {
    // console.log("Request Error", error);
    return Promise.reject(error);
  }
);

export default api;
