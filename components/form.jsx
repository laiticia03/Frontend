import axios from 'axios'
import{ useState } from 'react'


const Form = () => {
    const [workout, setWorkout] = useState({
        title: '',
        load: '',
        reps: ''
    })
    const changeTitle = (e) => {
        setWorkout({...workout, title: e.target.value})
    }
    const changeLoad = (e) => {
        setWorkout({...workout, load: e.target.value})
    }   
    const changeReps = (e) => {
        setWorkout({...workout, reps: e.target.value})
    }
    const addWorkout = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3300/api/workouts/', workout)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
  return (
    <div className='form'>
        <form>
            <label>Excersize Title:</label>
            <input type="text" name="title" value={workout.title} onChange={(e)=>changeTitle(e)}/>
            <label>Load (in kg):</label>
            <input type="text" name="load" value={workout.load} onChange={(e)=>changeLoad(e)}/>
            <label>Number of Reps:</label>
            <input type="text" name="reps" value={workout.reps} onChange={(e)=>changeReps(e)}/>
            <button type="submit" onClick={(e)=>addWorkout(e)}>Add Workout</button>
        </form>
    </div>
  )
}

export default Form