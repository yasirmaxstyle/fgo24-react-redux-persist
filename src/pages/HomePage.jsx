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

  return (
    <div className="max-w-md mx-auto shadow-md h-[calc(100vh-40px)]">
      <div className="grid gap-10 px-10 ">
        <div>
          {/* <MdAddBox className="text-7xl" /> */}
        </div>
        <div className="">
          <form onSubmit={handleSubmit(addTodo)}>
            <input {...register('list')} type="text" name="list" id="list" placeholder="Add acctivity" className="w-full border rounded px-5 py-3" />
          </form>
        </div>
        <div>
          <TaskLists.Provider value={todos}>
            <ShowTodos />
          </TaskLists.Provider>
        </div>
      </div>
    </div>
  )
}

export default HomePage