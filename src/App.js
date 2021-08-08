 import Header from "./components/Header";
import data from "./components/data.json";
import { useState } from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState(data)

  const handleToggle = (id) => {
    let mapped = todoList.map(task => {
      return task.id === parseInt(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodoList(mapped);
  }
  const handleFilter = () => {
    let filtered = todoList.filter(task => {
      return !task.complete;
    });
    setTodoList(filtered);
  }
  const addTask = (userInput) => {
    let copy = [...todoList];
    copy = [...copy, {id: todoList.length + 1, task: userInput, complete: false}];
    setTodoList(copy)


  }
  return (
    <div className="container">
    <Header/>
    <div className="row">
      <div className="col-12  col-md-4 text-center">
        <div className="card">
          <div className="card-header">Add Todo</div>
          <div className="card-body">
          <TodoForm addTask={addTask} />

          </div>
        </div>

      </div>
      <div className="col-12 col-md-8">
          <TodoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter} />


      </div>
    </div>

    
    </div>
  );
}

export default App;
