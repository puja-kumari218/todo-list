import { useEffect, useState } from "react";
import todos from "./api/todos";
import PaginationContainer from "./pagination-container";
function App() {
  const [data, setData] = useState([]);
  const fetchTodos = () => {
    todos.getTodos().then((res) => {
      if (res) {
        setData(res?.data?.sort((a, b) => a.completed - b.completed));
      }
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex flex-col h-max-screen w-full items-center gap-4 p-4">
      <h1 className="text-3xl h-20">To-do App</h1>
      <PaginationContainer data={data} />
    </div>
  );
}

export default App;
