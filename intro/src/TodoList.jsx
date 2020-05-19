import React from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import { filteredTodoListState } from "./State";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <h2>Todo List</h2>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </>
  );
};

export default TodoList;
