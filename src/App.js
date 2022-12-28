import "./App.css";
import CharacterCounter from "./components/Zustand/CharacterCounter";
import CurrentUserInfo from "./components/Zustand/CurrentUserInfo";
import Scratches from "./components/Zustand/Scratches";
import Text from "./components/Zustand/Text";
import TodoList from "./components/Zustand/Todo/TodoList";

function App() {
  return (
    <div className="App">
      <Text />
      <CharacterCounter />
      <TodoList />
      <CurrentUserInfo />
      <Scratches />
    </div>
  );
}

export default App;
