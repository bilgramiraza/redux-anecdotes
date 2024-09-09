import { useDispatch } from "react-redux";
import { newAnecdote } from "../reducers/anecdoteReducer";
import { setNotify } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async event => {
    event.preventDefault();
    const content = event.target.anecdote.value;

    dispatch(newAnecdote(content));

    event.target.anecdote.value = '';
    dispatch(setNotify({
      message: `New Anecdote: ${content}`,
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
