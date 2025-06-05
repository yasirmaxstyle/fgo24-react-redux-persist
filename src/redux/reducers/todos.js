import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: []
}


const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: function (state, action) {
      let id
      if (state.data.length === 0) {
        id = state.data.length + 1
      } else {
        id = state.data.slice(-1)[0].id + 1
      }
      state.data.push({
        id,
        taskname: action.payload,
        checked: false
      })
      return state
    },
    toggleCheck: function (state, action) {
      const { id, checked } = action.payload
      const found = state.data.findIndex(todo => todo.id === id)
      state.data[found].checked = checked
      return state
    },
    deleteTask: function (state, action) {
      let data = []
      if (typeof action.payload === "number") {
        data = state.data.filter(o => o.id !== action.payload)
      }
      return {
        data
      }
    }
  }
})

export const { addTask } = todos.actions
export const { toggleCheck } = todos.actions
export const { deleteTask } = todos.actions
export default todos.reducer