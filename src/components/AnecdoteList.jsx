import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotify } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes
    .filter(({ content }) => content.includes(state.filter))
  );
  const dispatch = useDispatch();

  const handleVote = anecdote => {
    dispatch(vote(anecdote.id));
    dispatch(setNotify({ message: `You voted for ${anecdote.content}` }));
  };

  return <>
    {anecdotes
      .sort((a, b) => b.votes - a.votes)
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
  </>
};

export default AnecdoteList;
