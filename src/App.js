import logo from "./logo.svg";
import "./App.css";
import TestMocking from "./components/TestMocking";
import Counter from "./features/counters/Counter";

function App() {
  return (
    <div className="App">
      <TestMocking />
      <Counter />
    </div>
  );
}

export default App;
