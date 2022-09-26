import { useEffect, useState } from 'react'

import { toggleCompleted, selectAllTasks, remove } from "../../features/task/TaskSlice"

import { useDispatch, useSelector } from "react-redux"

const TaskItem = ({task}) => {

  const dispatch = useDispatch()
  const allTasks = useSelector(selectAllTasks)

  const [editedTask, setEditedTask] = useState()
  
  const onTaskCompleted = (e) => {
    dispatch(toggleCompleted(task.id))
  }

  const onTaskDeleted = (e) => {
    e.preventDefault()
    dispatch(remove(task.id))
  }

   const onTaskUpdated = (e) => {
    e.preventDefault()
    dispatch(remove(task))
  }
  
  return (
      <li className='flex items-center gap-4 cursor-pointer flex items-center justify-start bg-red-100 relative'>
        <input type='checkbox' name='complete' id='complete' onChange={onTaskCompleted} value={task.completed} />
        <label htmlFor='complete' className={`${task.completed ? 'line-through':'' }`}>{task.text}</label>
        
        <button onClick={onTaskDeleted} className='justify-self-end absolute right-10'>
          ed
        </button>
        <button onClick={onTaskDeleted} className='justify-self-end absolute right-4'>
          X
        </button>
      </li>
  )
}

export default TaskItem