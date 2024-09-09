import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: '',
  timer: 0,
  error: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotify(_state, action) {
      return {
        message: action.payload.message,
        timer: action.payload.timer,
        error: action.payload.status || false
      };
    },
    clearNotify() {
      return initialState;
    },
  },
});

export const { setNotify, clearNotify } = notificationSlice.actions;

export default notificationSlice.reducer;
