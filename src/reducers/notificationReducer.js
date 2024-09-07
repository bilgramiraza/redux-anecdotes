import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: '',
  error: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotify(state, action) {
      return {
        message: action.payload.message,
        error: action.payload.status || false
      };
    },
  },
});

export const { setNotify } = notificationSlice.actions;

export default notificationSlice.reducer;
