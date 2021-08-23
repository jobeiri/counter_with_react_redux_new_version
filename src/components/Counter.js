import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "../actions/counter.js";

function Counter() {
  const { count } = useSelector((state) => ({ count: state.count }));
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decreaseCount())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increaseCount())}>+</button>
    </div>
  );
}

export default Counter;
