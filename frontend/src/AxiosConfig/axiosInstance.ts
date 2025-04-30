import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://doctime-mern.onrender.com",
});

export default axiosInstance;
