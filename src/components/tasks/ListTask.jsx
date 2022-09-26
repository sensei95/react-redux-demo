import TaskItem from './TaskItem.jsx'
import { useSelector } from "react-redux"


import {selectAllTasks} from "../../features/task/TaskSlice"


const ListTask = () => {

  const allTasks = useSelector(selectAllTasks)

  if(!allTasks.length){
    return <p>No task added yet</p>
  }
  
  return (
      <ul className='bg-slate-200 p-6'>
        {allTasks.map((task,i) => <TaskItem task={task} key={i} />)}
      </ul>
  )
}

export default ListTask