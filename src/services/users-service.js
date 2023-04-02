import axios from "axios";
const USERS_REST_API_URL = "http://localhost:4000/api/users";

export const findAllUsers = async () => {
  const response = await axios.get(USERS_REST_API_URL);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(USERS_REST_API_URL, user);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await axios.put(`${USERS_REST_API_URL}/${user._id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${USERS_REST_API_URL}/${id}`);
  return response.data;
};

export const login = async (user) => {
  const response = await axios.post(`${USERS_REST_API_URL}/login`, user);
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${USERS_REST_API_URL}/logout`);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await axios.get(`${USERS_REST_API_URL}/${id}`);
  return response.data;
};

export const register = async (user) => {
  const response = await axios.post(`${USERS_REST_API_URL}/register`, user);
  return response.data;
};

export const profile = async () => {
  const response = await axios.get(`${USERS_REST_API_URL}/profile`);
  return response.data;
};
