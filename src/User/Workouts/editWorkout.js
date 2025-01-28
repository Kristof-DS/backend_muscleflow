import sql from '../../database.js'

const editWorkout = async (req, res) => {
    const id_user = req.id_user
    const { workout_id, workout_name, exercises } = req.body

    try {

        const updatedWorkout = await sql`UPDATE workouts SET name = ${workout_name} WHERE id = ${workout_id} AND id_user = ${id_user}`

        await sql`DELETE FROM exercises WHERE id_workout = ${workout_id}`

        for (let x = 0; x < exercises.length; x++) {
            await sql`INSERT INTO exercises (name, weight, sets, repetitions, rest_time, id_workout) 
            VALUES (${exercises[x].name}, ${exercises[x].weight}, ${exercises[x].sets}, ${exercises[x].repetitions}, 
            ${exercises[x].rest_time}, ${workout_id})`
        }

        res.status(200).json({ message: 'Workout updated successfully' })
    }
    catch (err) {
        console.error(err)
        res.status(400).json({ error: 'Oops, something went wrong' })
    }
}

export default editWorkout
