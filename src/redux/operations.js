import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6528475b931d71583df21cb0.mockapi.io';

export const fetchTweets = createAsyncThunk(
    "users/fetchAll",
    async (_, thunkAPI) => {
        try {
             const respons = await axios.get("/users");
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const follow = createAsyncThunk(
  "users/follow",
  async ({ id, ...user }, thunkAPI) => {
    try {
      const respons = await axios.put(`/users/${id}`, {
        ...user,
        followers: user.followers + 1,
      });
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const unfollow = createAsyncThunk(
  "users/unfollow",
  async ({ id, ...user }, thunkAPI) => {
    try {
      const respons = await axios.put(`/users/${id}`, {
        ...user,
        followers: user.followers - 1,
      });
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);