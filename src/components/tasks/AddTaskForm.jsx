import { useState, useEffect } from 'react'
import { add, selectLastTaskId } from "../../features/task/TaskSlice"

import { useDispatch, useSelector } from "react-redux"



const AddTaskForm = () => {

  const [text, setText] = useState('')

  const dispatch = useDispatch();

  const lastTaskId = useSelector(selectLastTaskId)

  const onSubmit = (e) => {
    e.preventDefault()
    
    const todo = {
      id: lastTaskId + 1,
      completed: false,
      text: text
    }
    
    dispatch(add(todo))
    setText('')
  }

  return (
    <section className='col-span-5 bg-white p-6'>
      <h1 className="text-3xl font-bold text-slate-800 underline mb-8">Add new task</h1>
      <form>
        <div className='field grid mb-3'>
          <label htmlFor='text' className='text-slate-600 field__label'>Task</label>
          <input name='text' type='text' id='text' className='field__input p-0 outline-0 hover:outline-0 ring-0 hover:ring-0' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='pt-4'>
          <button type='submit' className='bg-sky-600 px-3 py-1.5 rounded-md' onClick={onSubmit}>
            Save task
          </button>
        </div>
      </form>
    </section>
  )
}

export default AddTaskForm