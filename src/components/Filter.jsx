import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();

  return <div>
    <label>
      Filter:
      <input type="text" name="filter" onChange={(e) => dispatch(setFilter(e.target.value))} />
    </label>
  </div>;
};

export default Filter;
