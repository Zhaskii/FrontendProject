import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://backendproject-neou.onrender.com",
  timeout: 5000,
});

axiosInstance.interceptors.request.use(function (config) {
  if (typeof window !== "undefined") {
    const accessToken: string | null =
      window.localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
});

export default axiosInstance;
