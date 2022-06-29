import axios from "axios";

const BASE_URL = "http://localhost:3000";

const createUser = async (name, email, password) => {
  const getUser = async () => {
    return await axios.get(`${BASE_URL}/users?email=${email}`);
  };

  const addUser = async () => {
    return await axios.post(`${BASE_URL}/users`, { name, email, password });
  };

  const resGetUser = await getUser();

  if (resGetUser.data.length > 0) {
    return { status: false, message: "Email já cadastrado" };
  }

  const resAddUser = await addUser();

  if (resGetUser.status >= 400 && resAddUser.status >= 400) {
    return { status: false, message: "Algo deu errado" };
  }

  return { status: true, message: name };
};

export default createUser;
