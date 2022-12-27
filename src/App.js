import logo from "./logo.svg";
import "./App.css";
import TestMocking from "./components/TestMocking";
import Counter from "./features/counters/Counter";
import MobxExample from "./components/MobxExample";

import { observableTodoStore } from "./app/ObservableTodoStore";
import { RecoilRoot } from "recoil";
import FontButton from "./components/Recoil/FontButton";
import Text from "./components/Recoil/Text";
import CharacterCounter from "./components/Recoil/CharacterCounter";
import TodoList from "./components/Recoil/Todo/TodoList";

function App() {
  return (
    <div className="App">
      {/* <TodoList store={observableTodoStore} /> */}
      {/* <MobxExample /> */}
      {/* <TestMocking /> */}
      {/* <Counter /> */}
      <RecoilRoot>
        {/* <FontButton /> */}
        {/* <Text /> */}
        {/* <CharacterCounter /> */}
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
