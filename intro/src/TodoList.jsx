import React from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import { todoListState } from "./State";
import TodoItemCreator from "./TodoItemCreator";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <h2>Todo List</h2>
      <TodoItemCreator />
      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </>
  );
};

export default TodoList;
