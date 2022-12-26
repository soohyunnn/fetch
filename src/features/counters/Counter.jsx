import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreament,
  increament,
  increamentByAmount,
  fetchIncrement,
} from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increament())}>Increament</button>
        <button onClick={() => dispatch(fetchIncrement(count))}>
          Fetch Increment
        </button>
        <span>{count}</span>
        <button onClick={() => dispatch(decreament())}>Decreament</button>
        <button onClick={() => dispatch(increamentByAmount(5))}>+5</button>
      </div>
    </div>
  );
}
