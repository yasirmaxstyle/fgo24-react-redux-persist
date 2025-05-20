import { useContext, useState } from 'react'
import { TaskLists } from './TaskContext'

function ShowTodos() {
  const todoList = useContext(TaskLists)
  const [completed, setCompleted] = useState(0)

  const handleChecked = (e) => {
    if (e.target.checked && e.target.id === e.target.nextSibling.htmlFor) {
      e.target.nextSibling.classList.add('line-through')
      setCompleted(completed + 1)
    } else {
      e.target.nextSibling.classList.remove('line-through')
      setCompleted(completed - 1)
    }
    // console.log(e.target.nextSibling.htmlFor)
  }

  return (
    <div className='text-center grid gap-5'>
      <div className='flex flex-col gap-3'>
        {todoList.map((todo) =>
          <div key={todo} className='w-full flex gap-3 border px-5 py-3 rounded'>
            <input type="checkbox" name="todo" id={todo} onChange={handleChecked} />
            <label htmlFor={todo} >{todo}</label>
          </div>
        )}
      </div>
      <div>
        <p>{completed > 0 && `You have completed ${completed} tasks`}</p>
        <p>{completed > 0 && completed === todoList.length && `Congratulations, you have done all tasks!!!`}</p>
      </div>
    </div>
  )
}

export default ShowTodos