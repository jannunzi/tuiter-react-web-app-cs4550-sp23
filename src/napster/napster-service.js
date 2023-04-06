import axios from "axios";
export const NAPSTER_API = "https://api.napster.com/v2.2";
export const NAPSTER_KEY = process.env.REACT_APP_NAPSTER_API_KEY;
export const ALBUM_API = "http://localhost:4000/api/albums";

const api = axios.create({
  withCredentials: true,
});

export const fullTextSearch = async (query) => {
  const response = await axios.get(
    `${NAPSTER_API}/search/verbose?apikey=${NAPSTER_KEY}&query=${query}`
  );
  const json = await response.data;
  return json.search.data.albums;
};

export const getAlbum = async (albumId) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}?apikey=${NAPSTER_KEY}`
  );
  const json = await response.data;
  return json.albums[0];
};

export const getTracks = async (albumId) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}/tracks?apikey=${NAPSTER_KEY}`
  );
  const json = await response.data;
  return json.tracks;
};

export const likeAlbum = async (album) => {
  const response = await api.post(`${ALBUM_API}/${album.albumId}/likes`, album);
  return response.data;
};
