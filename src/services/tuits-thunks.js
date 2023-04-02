import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  findAllTuits,
  createTuit,
  deleteTuit,
  updateTuit,
} from "../services/tuits-service";

export const findAllTuitsThunk = createAsyncThunk(
  "tuits/findAllTuits",
  async () => {
    const tuits = await findAllTuits();
    return tuits;
  }
);

export const addTuitThunk = createAsyncThunk("tuits/addTuit", async (tuit) => {
  const newTuit = await createTuit(tuit);
  return newTuit;
});

export const deleteTuitThunk = createAsyncThunk(
  "tuits/deleteTuit",
  async (id) => {
    await deleteTuit(id);
    return id;
  }
);

export const updateTuitThunk = createAsyncThunk(
  "tuits/updateTuit",
  async (tuit) => {
    const status = await updateTuit(tuit);
    return tuit;
  }
);
