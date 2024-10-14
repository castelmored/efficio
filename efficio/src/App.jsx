import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoCard } from "./components/TodoCard";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const todos = [
    { input: "Hello! Add your first todo!", complete: true },
    { input: "Read a book", complete: false },
    { input: "Watch React tutorial", complete: false },
    { input: "Make a website", complete: false },
  ];

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoCard todos={todos} />
      <TodoInput todos={todos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
