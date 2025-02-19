import { useDispatch } from "react-redux";
import { newAnecdote } from "../reducers/anecdoteReducer";
import { notify } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async event => {
    event.preventDefault();
    const content = event.target.anecdote.value;

    dispatch(newAnecdote(content));

    event.target.anecdote.value = '';
    dispatch(notify(`New Anecdote: ${content}`, 5));
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
