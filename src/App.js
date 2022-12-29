import "./App.css";
import Example from "./components/ReactQuery/Example";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QuickStart from "./components/ReactQuery/QuickStart";
import Pagination from "./components/ReactQuery/Pagination";
import InfiniteScroll from "./components/ReactQuery/InfiniteScroll";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Example />
        <QuickStart />
        {/* <Pagination /> */}
        <InfiniteScroll />
      </QueryClientProvider>
    </div>
  );
}

export default App;
