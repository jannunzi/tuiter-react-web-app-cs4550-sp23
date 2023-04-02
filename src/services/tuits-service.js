import axios from "axios";
const TUITS_REST_API_URL = "http://localhost:4000/api/tuits";

export const findAllTuits = async () => {
  const response = await axios.get(TUITS_REST_API_URL);
  return response.data;
};

export const createTuit = async (tuit) => {
  const response = await axios.post(TUITS_REST_API_URL, tuit);
  return response.data;
};

export const updateTuit = async (tuit) => {
  const response = await axios.put(`${TUITS_REST_API_URL}/${tuit._id}`, tuit);
  return response.data;
};

export const deleteTuit = async (id) => {
  const response = await axios.delete(`${TUITS_REST_API_URL}/${id}`);
  return response.data;
};
