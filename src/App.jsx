import AddTaskForm from './components/tasks/AddTaskForm.jsx'
import ListTask from './components/tasks/ListTask.jsx'

export default function App() {
  return (
    <main className='min-h-screen bg-slate-100 py-12'>
      <div className='grid grid-cols-12 w-11/12 mx-auto gap-8'>
        <section className='col-span-7'>
          <h1 className="text-3xl font-bold underline mb-8">
            List of tasks
          </h1>
            <ListTask />
        </section>
        <AddTaskForm />
      </div>
    </main>
  )
}
