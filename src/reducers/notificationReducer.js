import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: '',
  status: true,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotify(_state, action) {
      return {
        message: action.payload.message,
        status: action.payload.status,
      };
    },
    clearNotify() {
      return initialState;
    },
  },
});

export const { setNotify, clearNotify } = notificationSlice.actions;

export const notify = (message, time, status = true) => {
  return async dispatch => {
    dispatch(setNotify({ message, status }));
    setTimeout(() => dispatch(clearNotify()), time * 1000);
  };
};

export default notificationSlice.reducer;
