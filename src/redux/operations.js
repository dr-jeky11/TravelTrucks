import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCamper = createAsyncThunk(
  "camper/fetchCamper",
  async (filter, thunkAPI) => {
    try {
      const params = { ...filter, limit: filter.limit || 4 };
      const response = await axios.get("/campers", { params });
      if (response.status === 404 && response.data.length === 0) {
        return { items: [], total: 0 };
      }
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return { items: [], total: 0 };
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const idCamper = createAsyncThunk(
  "camper/idCamper",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
