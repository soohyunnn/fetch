import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreament,
  increament,
  increamentByAmount,
} from "../features/counters/counterSlice";

export default function Counter2() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increament())}>Increament</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decreament())}>Decreament</button>
        <button onClick={() => dispatch(increamentByAmount(5))}>+5</button>
      </div>
    </div>
  );
}
