import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodos, postTodo } from "./my-api";

export default function QuickStart() {
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos }); //getTotos는 fetcher일 것이다.
  // console.log("query ::", query.data);

  const mutation = useMutation(postTodo, {
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (query.isLoading) {
    return "Loding...";
  }

  if (query.error) {
    return "Error...";
  }

  return (
    <div>
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Learn React-Query",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
