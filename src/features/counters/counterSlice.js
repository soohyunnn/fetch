import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncrement = createAsyncThunk(
  "counter/fetchIncrement",
  async (value) => {
    const response = await axios.put("/counter/increment", { value: value });
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
    increamentByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [fetchIncrement.fulfilled]: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { increament, decreament, increamentByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
