import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: true,
  error: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    startOperation(state, actions) {
        state.loading = true
    },
    operationSuccessful(state, actions) {
        state.items = actions.payload
        state.loading = false
        state.error = null
    },
    operationFaild(state, actions) {
        state.loading = false
        state.error = actions.payload
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer