import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByValue } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>−</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByValue(5))}>
        incrementByValue
      </button>
    </div>
  );
};

export default Counter;
