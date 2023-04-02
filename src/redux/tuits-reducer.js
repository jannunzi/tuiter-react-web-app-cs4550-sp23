import { createSlice } from "@reduxjs/toolkit";
import {
  findAllTuitsThunk,
  addTuitThunk,
  deleteTuitThunk,
  updateTuitThunk,
} from "../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false,
  error: null,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  reducers: {},
  extraReducers: {
    [addTuitThunk.fulfilled]: (state, action) => {
      state.tuits.push(action.payload);
    },
    [deleteTuitThunk.fulfilled]: (state, action) => {
      state.tuits = state.tuits.filter((tuit) => tuit._id !== action.payload);
    },
    [updateTuitThunk.fulfilled]: (state, action) => {
      state.tuits = state.tuits.map((tuit) =>
        tuit._id === action.payload._id ? action.payload : tuit
      );
    },
    [findAllTuitsThunk.pending]: (state, action) => {
      state.loading = true;
      state.tuits = [];
    },
    [findAllTuitsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.tuits = action.payload;
    },
    [findAllTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { updateTuit, deleteTuit, addTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
