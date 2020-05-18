import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
