import { useState, useEffect } from 'react'
import axios from 'axios'
import WorkoutDetails from '.workoutDetails'

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3300/api/workouts/')
    .then(res => {
      setWorkouts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  console.log(workouts)

  return (
    <div className="workoutlist">
      {workouts.map((workout) =>
        <WorkoutDetails workout={workout} key={workout._id} />)}
    </div>
  )
}

export default WorkoutList
