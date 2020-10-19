import axios from "axios";
const instance = axios.create({
  baseURL: "https://master-maste.herokuapp.com",
});
instance.defaults.headers.post["Content-Type"] = "application/json";

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    if (response && response.data) {
      response.headers &&
        localStorage.setItem(
          "x-total-count",
          response.headers["x-total-count"]
        );
      return response.data;
    }
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default instance;
