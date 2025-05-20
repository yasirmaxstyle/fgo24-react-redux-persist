import { MdAddBox } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ShowTodos from "../components/ShowTodos";
import { TaskLists } from "../components/TaskContext";

function HomePage() {
  const [todos, setTodo] = useState([])
  const { handleSubmit, register, reset } = useForm()

  const addTodo = ({ list }) => {
    list && setTodo([
      ...todos,
      list
    ])
    console.log(todos)
    reset()
  }

  const handleDelete = (data) =>{
    setTodo(data)
    // console.log(data)
  }


  let count = todos.length

  return (
    <div>
      <div className="max-w-md mx-auto h-[calc(100vh-40px)]">
        <div className="grid gap-10 p-10 border rounded-b-xl border-black">
          <div>
            <form onSubmit={handleSubmit(addTodo)}>
              <input {...register('list')} type="text" name="list" id="list" placeholder="Add acctivity" className="w-full border rounded px-5 py-3" />
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
            <TaskLists.Provider value={todos}>
              <ShowTodos onDelete={handleDelete} />
            </TaskLists.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage