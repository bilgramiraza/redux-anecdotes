import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes';

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

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const newAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content);
    dispatch(add(newAnecdote));
  };
};

export default anecdoteSlice.reducer;
