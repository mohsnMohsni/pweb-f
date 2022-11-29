import axios from "axios";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const _http = (
  url,
  { params, data, method, headers = {}, token, body, ...res }
) => {
  return axios({
    baseURL,
    url,
    headers: {
      Authorization: token ? token : Cookies.get("torgayToken") || "",
      ...headers,
    },
    params,
    data,
    body,
    method: method ? method : "GET",
    ...res,
  })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      if (e?.response?.status === 401 && typeof window !== "undefined") {
        localStorage.removeItem("torgayToken");
        Cookies.remove("torgayToken");
        return (window.location.href = "/");
      }
      return e;
    });
};
