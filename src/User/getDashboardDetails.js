import sql from '../database.js'

const getDashboardDetails = async (req, res) => {
    const id_user = req.id_user
    try {
        const userDetails = await sql`SELECT username, weight, height FROM users WHERE id = ${id_user}`

        const savedWorkouts = await sql`SELECT * FROM workouts WHERE id_user = ${id_user}`

        const SavedWorkoutExercises = []

        for (let x = 0; x < savedWorkouts.length; x++) {
            const exercises = await sql`SELECT * FROM exercises WHERE id_workout = ${savedWorkouts[x].id}`

            exercises.forEach((exercise) => SavedWorkoutExercises.push(exercise))
        }

        const workoutsWithExercises = savedWorkouts.map(workout => {

            const exercises = SavedWorkoutExercises.filter(exercise => exercise.id_workout === workout.id);

            return {
                ...workout,
                exercises
            };
        });

        return res.status(200).json({ userDetails, savedWorkouts: workoutsWithExercises })
    }
    catch (err) {
        res.status(500).send('Internal server error. Failed to fetch data')
    }

}


export default getDashboardDetails