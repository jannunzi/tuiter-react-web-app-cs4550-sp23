import { createSlice } from "@reduxjs/toolkit";
import {
  createTuitThunk,
  findTuitsThunk,
  deleteTuitThunk,
  updateTuitThunk,
} from "../services/tuits-thunks";

const initialState = {
  tuits: [
    // {
    //   id: 1,
    //   text: "Tuit 1",
    //   editing: false,
    // },
    // {
    //   id: 2,
    //   text: "Tuit 2",
    //   editing: true,
    // },
    // {
    //   id: 3,
    //   text: "Tuit 3",
    //   editing: false,
    // },
  ],
  loading: false,
  error: null,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  extraReducers: {
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...payload,
      };
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push(payload);
    },

    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },

    [findTuitsThunk.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.tuits = action.payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
  reducers: {
    // updateTuit: (state, action) => {
    //   state.tuits = state.tuits.map((tuit) =>
    //     tuit.id === action.payload.id ? action.payload : tuit
    //   );
    // },
    // addTuit: (state, action) => {
    //   state.tuits.push({ ...action.payload, id: new Date().getTime() });
    // },
    // deleteTuit: (state, action) => {
    //   state.tuits = state.tuits.filter((tuit) => tuit.id !== action.payload);
    // },
  },
});

export const { updateTuit, deleteTuit, addTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
