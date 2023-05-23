import axios from "axios";
import config from "../../services/axios/config";
import endpoints from "../../services/axios/endpoints";

export const covidAPI = axios.create({
  baseURL: config.base_url + endpoints.api_endpoint,
  headers: {
    "Content-Type": "application/json",
  },
});
