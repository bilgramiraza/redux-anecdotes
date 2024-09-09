import { useDispatch } from "react-redux";
import { add } from "../reducers/anecdoteReducer";
import { setNotify } from "../reducers/notificationReducer";
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async event => {
    event.preventDefault();
    const content = event.target.anecdote.value;

    const newAnecdote = await anecdoteService.create(content);
    dispatch(add(newAnecdote));

    event.target.anecdote.value = '';
    dispatch(setNotify({
      message: `New Anecdote: ${newAnecdote.content}`,
      timer: 5000,
    }));
  };

  return <>
    <h2>create new</h2>
    <form onSubmit={addAnecdote}>
      <div><input name="anecdote" /></div>
      <button>create</button>
    </form>
  </>
};

export default AnecdoteForm;
