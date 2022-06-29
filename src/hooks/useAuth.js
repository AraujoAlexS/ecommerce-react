const useAuth = () => {
  const user = { logged: false };
  const token = localStorage.getItem("token");
  console.log(token);

  if (token) {
    user.logged = true;
  }

  return user && user.logged;
};

export default useAuth;
