import React from "react";
import { atom, useRecoilState } from "recoil";

const todoState = atom({
  key: "todoState",
  default: [],
});

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const onTap = () => {
    setTodos([
      ...todos,
      {
        title: "title",
      },
    ]);
  };
  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={onTap}>+</button>
      <table>
        <tbody>
          {todos.map((todo) => (
            <tr>
              <td>{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
