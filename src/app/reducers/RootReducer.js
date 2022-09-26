import { combineReducers } from 'redux';
import tasksReducer from '../../features/task/TaskSlice'

const rootReducer = combineReducers({
  tasks: tasksReducer,
})

export default rootReducer;