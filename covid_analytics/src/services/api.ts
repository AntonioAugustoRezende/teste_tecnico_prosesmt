import axios from "axios";

const api = axios.create({
  baseURL: "https://covid19-brazil-api.now.sh/api/report/v1",
  timeout: 5000,
});

export { api };
