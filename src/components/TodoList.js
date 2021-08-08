import Todo from "./Todo"
const TodoList = ({todoList, handleToggle, handleFilter}) => {
    return (
    <div className="card mb-5">
      {todoList.slice(0).reverse().map(todo => {
          return(
              <Todo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
              )

      })}
     <button className="btn btn-success my-3" onClick={handleFilter}>Clear Completed</button>
    </div>
    );
    
};

export default TodoList