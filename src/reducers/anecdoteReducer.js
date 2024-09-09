import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      state.forEach((anecdote) => {
        if (anecdote.id === action.payload) anecdote.votes++
      });
    },
    add(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(_state, action) {
      return action.payload;
    },
  },
});

export const {
  vote,
  add,
  setAnecdotes,
} = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
