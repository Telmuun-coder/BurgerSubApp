import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-2b488.firebaseio.com/",
});

export default instance;
