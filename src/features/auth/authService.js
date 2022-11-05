import axios from "axios";

const endPoint = "/api/users";

const register = async (data) => {
  const response = await axios.post(endPoint, data);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export default {
  register,
};
