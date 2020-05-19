import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "./State";

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUnCompletedNum,
    completePercentage,
  } = useRecoilValue(todoListStatsState);

  console.log(completePercentage);
  const formattedCompletedPercentage = Math.round(completePercentage * 100);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items uncompleted: {totalUnCompletedNum}</li>
      <li>Percent completed: {formattedCompletedPercentage}</li>
    </ul>
  );
};

export default TodoListStats;
