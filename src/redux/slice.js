import { createSlice } from "@reduxjs/toolkit";
import { fetchCamper, idCamper } from "./operations.js";
idCamper;

const camperSlice = createSlice({
  name: "camper",
  initialState: {
    total: 0,
    items: [],
    idCamper: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamper.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(idCamper.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(idCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.idCamper = action.payload;
      })
      .addCase(idCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const camperReducer = camperSlice.reducer;
