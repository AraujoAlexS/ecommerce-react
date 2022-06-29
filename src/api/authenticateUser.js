import axios from "axios";

const BASE_URL = "http://localhost:3000";

const authUser = async (email, password) => {
  const getUser = async () => {
    return await axios.get(`${BASE_URL}/users?email=${email}`);
  };

  const res = await getUser();

  if (res.status >= 400) {
    return { status: false, message: "Algo deu errado" };
  }

  if (res.data.length < 1) {
    return { status: false, message: "Email não cadastrado" };
  }

  if (res.data[0].password !== password) {
    return { status: false, message: "Senha incorreta" };
  }

  return { status: true, message: res.data[0].name };
};

export default authUser;
