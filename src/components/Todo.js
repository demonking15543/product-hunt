const Todo = ({todo, handleToggle}) => {
    const handleClick = (e) =>{
        e.preventDefault()
        handleToggle(e.currentTarget.id)
        console.log(handleToggle(e.currentTarget.id))


    }

    return (

        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike card-header" : "todo card-header"}>
            {todo.task}

        </div>

    )
    
}

export default Todo