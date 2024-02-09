import { formatDistanceToNow } from 'date-fns'
import axios from 'axios' 
const WorkoutDetails = ({ workout }) => {
  const handelDelete = ()=>{
    axios.delete(`http://localhost:3300/api/workouts/${workout._id}`)
  }
  return (
    <div className="workout">
      <h2>{workout.title}</h2>
      <p>Load: {workout.load} kg</p>
      <p>Reps: {workout.reps}</p>
      <p>Added {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handelDelete}>delete</span>
    </div>
  )
}

export default WorkoutDetails