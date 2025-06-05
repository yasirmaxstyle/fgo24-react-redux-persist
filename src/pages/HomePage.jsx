import { useForm } from "react-hook-form";
import ShowTodos from "../components/ShowTodos";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from '../redux/reducers/todos'

function HomePage() {
  const { handleSubmit, register, reset } = useForm()
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.data)

  const addTodo = ({ list }) => {
    if (list) dispatch(addTask(list))
    reset()
  }

  let count = todos.length

  return (
    <div>
      <div className="max-w-md mx-auto h-[calc(100vh-40px)]">
        <div className="grid gap-10 p-10 border rounded-b-xl border-black">
          <div>
            <form onSubmit={handleSubmit(addTodo)}>
              <input {...register('list')} type="text" name="list" id="list" placeholder="Add acctivity" className="w-full border rounded px-5 py-3" autoComplete="off" />
            </form>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p>You have <span>{count === 0 ? "no" : count}</span> <span>{count === 1 ? "task" : " tasks"}</span> to do</p>
            {todos.length === 0 &&
              <button className="px-3 py-2 bg-black text-white rounded">
                <label htmlFor="list" className="hover:cursor-pointer">Add activity</label>
              </button>
            }
          </div>
          <div>
            <ShowTodos />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage