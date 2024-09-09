import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

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
      state.push(asObject(action.payload));
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
