import sql from '../../database.js'

const deleteWorkout = async (req, res) => {
    const id_user = req.id_user
    const {id_workout} = req.body
    try {
    await sql `DELETE FROM workouts WHERE id = ${id_workout}`
    res.status(200).json({message: 'Workout deleted succesfully'})    
}
    catch(err){
        res.status(500).json({error: 'Internal server problem. Did not manage to delete workout'})
    }
}

export default deleteWorkout