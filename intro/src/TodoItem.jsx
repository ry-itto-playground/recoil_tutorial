import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./State";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem.id === item.id);

  const editItemText = ({ target: { value } }) => {
    let _todoList = [...todoList];
    _todoList[index] = value;
    setTodoList(_todoList);
  };
  const toggleItemCompletion = () => {
    let _todoList = [...todoList];
    _todoList[index] = {
      ...item,
      isComplete: !item.isComplete,
    };
    setTodoList(_todoList);
  };
  const deleteItem = () => {
    setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;
