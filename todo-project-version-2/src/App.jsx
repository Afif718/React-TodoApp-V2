/* eslint-disable react/no-unknown-property */
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  let todoItems = [
    { name: "Buy Milk", dueDate: "28/10/2023" },
    { name: "Study Hard", dueDate: "10/05/2023" },
    { name: "Penang visit", dueDate: "11/12/2023" },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />

      <div className="items-container">
        <TodoItems items={todoItems} />
      </div>
    </center>
  );
}

export default App;
