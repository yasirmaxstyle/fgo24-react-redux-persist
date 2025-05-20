import { useContext, useState } from 'react'
import { TaskLists } from './TaskContext'
import { RiDeleteBinFill } from "react-icons/ri";

function ShowTodos({ onDelete }) {
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
  }

  const handleDelete = (e) => {
    if (e.currentTarget.id === e.currentTarget.previousSibling.id) {
      onDelete(todoList.filter((_, idx) => idx !== Number(e.currentTarget.id)))
      setCompleted(completed - 1)
    }
  }

  return (
    <div className='text-center grid gap-5'>
      <div className='flex flex-col gap-3'>
        {todoList.map((todo, idx) =>
          <div key={idx} className='w-full flex gap-3 border px-5 py-3 rounded'>
            <input type="checkbox" name="todo" id={todo} onChange={handleChecked} />
            <label id={idx} htmlFor={todo} className='grow text-left'>{todo}</label>
            <button id={idx} className='hover:cursor-pointer' onClick={handleDelete}>
              <RiDeleteBinFill className='text-2xl' />
            </button>
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