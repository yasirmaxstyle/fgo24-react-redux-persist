import { useContext, useRef, useState } from 'react'
import { TaskLists } from './TaskContext'

function ShowTodos() {
  const todoList = useContext(TaskLists)
  const [completed, setCompleted] = useState(false)
  const todosLabel = useRef()

  const handleChecked = (e) => {
    e.target.checked ? todosLabel.current.classList.add('line-through') : todosLabel.current.classList.remove('line-through')
    setCompleted(!completed)
  }

  let count = todoList.length
  return (
    <div className='text-center grid gap-5'>
      <div>
        <p>You have <span>{count === 0 ? "no" : count}</span> <span>{count === 1 ? "task" : " tasks"}</span> to do</p>
      </div>
      <div>
        {todoList.map(todo =>
          <div key={todo}>
            <input type="checkbox" name="todo" id="todo" onChange={handleChecked} />
            <label ref={todosLabel} htmlFor="todo">{todo}</label>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShowTodos