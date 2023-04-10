import * as userService from "./users-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
  "users/login",
  async (user, thunkAPI) => await userService.login(user)
);

export const logoutThunk = createAsyncThunk(
  "users/logout",
  async (user, thunkAPI) => await userService.logout()
);

export const registerThunk = createAsyncThunk(
  "users/register",
  async (user, thunkAPI) => await userService.register(user)
);

export const profileThunk = createAsyncThunk(
  "users/profile",
  async (user, thunkAPI) => {
    return await userService.profile();
  }
);

export const findUserByUsernameThunk = createAsyncThunk(
  "users/findUserByUsername",
  async (username) => await userService.findUserByUsername(username)
);
