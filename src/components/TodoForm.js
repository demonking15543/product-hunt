import { useState } from 'react'

const TodoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState('')
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
  
    }
 
    return (
        <div>
            <form onSubmit={handleSubmit} className="my-4">
            <input value={userInput} type="text" className="form-control" onChange={handleChange} placeholder="Enter task..." maxLength="30" required/>
            <button className="btn btn-success my-4">Submit</button> 
            </form>
        </div>
    )
}
export default TodoForm