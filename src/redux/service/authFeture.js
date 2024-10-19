import axios from "axios";
import Register from "./../../pages/Register";

export const BACKEND_URL = "https://sbyp-sa.com/api/register/seller";


const url = "https://sbyp-sa.com/api/register/seller";
const headers = {
  "Content-Type": "application/json",
};

const register = async (userDate) => {
    const data = userDate;
  const response = await axios
    .post(url, userDate, {
      headers,
      mode:'no-cors',
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const login = async (userDate) => {
  const response = await axios.post(AUTH_URL + "login", userDate);
  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
