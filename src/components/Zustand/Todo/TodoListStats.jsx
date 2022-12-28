import React from "react";
import { useStore } from "./TodoStore";

export default function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useStore((state) => state.todoListStatsState()); //함수로 선언했으니 함수로 호출해야한다. (TodoStore-todoListStatsState를 참고)

  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <div>
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
      </ul>
    </div>
  );
}
