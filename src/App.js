import "./App.css";
import Cache from "./components/SWRExample/Cache";
import Fetcher from "./components/SWRExample/Fetcher";
import Mutate from "./components/SWRExample/Mutate";
import Pagination from "./components/SWRExample/Pagination";
import Profile from "./components/SWRExample/Profile";
import CharacterCounter from "./components/Zustand/CharacterCounter";
import CurrentUserInfo from "./components/Zustand/CurrentUserInfo";
import Scratches from "./components/Zustand/Scratches";
import Text from "./components/Zustand/Text";
import TodoList from "./components/Zustand/Todo/TodoList";

function App() {
  return (
    <div className="App">
      {/* <Text /> */}
      {/* <CharacterCounter /> */}
      {/* <TodoList /> */}
      {/* <CurrentUserInfo /> */}
      {/* <Scratches /> */}
      {/* <Profile /> */}
      {/* <Cache />  */}
      {/* <Fetcher /> */}
      <Mutate />
      <Pagination />
    </div>
  );
}

export default App;
