import { createSlice } from '@reduxjs/toolkit'

const TaskSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: []
  },
  reducers: {
    add: (state, {payload}) => {
      state.list.push(payload)
    },
    update: (state, {payload}) => {
      console.log(payload)
    },
    toggleCompleted: (state, {payload}) => {
      state.list = state.list.map(task => {
        if(task.id == payload){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    },
    remove: (state, {payload}) => {
      state.list = state.list.filter(task => task.id != payload)
    }
  }
})

export const { add, update, toggleCompleted, remove } = TaskSlice.actions

export const selectAllTasks = (state) => state.tasks.list

export const selectLastTaskId = (state) => state.tasks.list.length > 0 ? state.tasks.list[state.tasks.list.length - 1].id : 0

export const selectCompletedTasks = (state) => state.tasks.list.filter(task => task.completed)

export const selectInCompletedTasks = (state) => state.tasks.list.filter(task => !task.completed)

export default TaskSlice.reducer