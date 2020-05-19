import React from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import { filteredTodoListState } from "./State";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <h2>Todo List</h2>
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </>
  );
};

export default TodoList;
