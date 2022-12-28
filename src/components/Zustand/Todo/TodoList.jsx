import React, { useEffect } from "react";
// import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

import { useStore } from "./TodoStore";

export default function TodoList() {
  const todoList = useStore((state) => state.filteredTodoListState());

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
