import api from "../API";

// Login user
const login = async (userData) => {
  const response = await api.post("/account/login", userData);
  if (response.data.succeeded) {
    localStorage.setItem(
      "buch_international_user",
      JSON.stringify(response.data.data)
    );
  } else {
    throw response.data.message;
  }
  return response.data.data;
};

// SignUp user
const signUp = async (saveData) => {
  const response = await api.post(`/account/register`, saveData);
  return response.data;
};

const authService = {
  login,
  signUp,
};

export default authService;
