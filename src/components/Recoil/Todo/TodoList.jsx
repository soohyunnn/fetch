import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import { filteredTodoListState, todoListState } from "./TodoStore";

export default function TodoList() {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  useEffect(() => {
    console.log(`todoList : ${JSON.stringify(todoList)}`);
  }, [todoList]);

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
