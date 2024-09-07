import { useDispatch } from "react-redux";
import { add } from "../reducers/anecdoteReducer";
import { setNotify } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = event => {
    event.preventDefault();
    const anecdote = event.target.anecdote.value;
    dispatch(add(anecdote));
    event.target.anecdote.value = '';
    dispatch(setNotify({ message: `New Anecdote: ${anecdote}` }));
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
