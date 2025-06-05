import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleCheck } from '../redux/reducers/todos';

function ShowTodos() {
  const dispatch = useDispatch()

  const todos = useSelector(state => state.todos.data)
  const completed = todos.filter(e => e.checked === true)

  const handleChecked = (e, id, checked) => {
    if (checked) {
      e.target.nextSibling.classList.add('line-through')
      dispatch(toggleCheck({
        id,
        checked: true
      }))
    } else {
      e.target.nextSibling.classList.remove('line-through')
      dispatch(toggleCheck({
        id,
        checked: false
      }))
    }
  }

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className='text-center grid gap-5'>
      <div className='flex flex-col gap-3'>
        {todos.map((todo) =>
          <div key={`list-${todo.id}`} className='w-full flex gap-3 border px-5 py-3 rounded'>
            <input type="checkbox" name="todo" id={`list-${todo.id}`} onChange={(e) => handleChecked(e, todo.id, e.target.checked)} />
            <label htmlFor={`list-${todo.id}`} className='grow text-left'>{todo.taskname}</label>
            <button className='hover:cursor-pointer' onClick={() => handleDelete(todo.id)}>
              <RiDeleteBinFill className='text-2xl' />
            </button>
          </div>
        )}
      </div>
      <div>
        <p>{completed.length > 0 && `You have completed ${completed.length} tasks`}</p>
        <p>{completed.length > 0 && completed.length === todos.length && `Congratulations, you have done all tasks!!!`}</p>
      </div>
    </div>
  )
}

export default ShowTodos