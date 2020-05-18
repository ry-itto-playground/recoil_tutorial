import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./State";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((todoList) => [
      ...todoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
  };

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
