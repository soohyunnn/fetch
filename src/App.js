import logo from "./logo.svg";
import "./App.css";
import TestMocking from "./components/TestMocking";
import Counter from "./features/counters/Counter";
import MobxExample from "./components/MobxExample";
import TodoList from "./components/TodoList";
import { observableTodoStore } from "./app/ObservableTodoStore";

function App() {
  return (
    <div className="App">
      <TodoList store={observableTodoStore} />
      {/* <MobxExample /> */}
      {/* <TestMocking /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
