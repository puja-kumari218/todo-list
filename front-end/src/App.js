import PaginationContainer from "./pagination-container";
import TodoSearchById from "./components/TodoSearchById";
function App() {
  return (
    <div className="flex flex-col h-max-screen w-full items-center gap-4 p-4">
      <h1 className="text-3xl h-20">To-do App</h1>
      {/* <TodoSearchById /> */}
      <PaginationContainer />
    </div>
  );
}

export default App;
