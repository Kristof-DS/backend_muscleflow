import sql from '../../database.js'

const createWorkout = async (req, res) => {
    const id_user = req.id_user
    const { workout_name, exercises } = req.body

    console.log(workout_name)

    try {
        await sql`INSERT INTO workouts (id_user, name, date_created) VALUES (${id_user}, ${workout_name}, CURRENT_DATE)`
        const workout = await sql`SELECT * FROM workouts WHERE id_user = ${id_user} ORDER BY id DESC LIMIT 1`

        for (let x = 0; x < exercises.length; x++) {
            await sql`INSERT INTO exercises (name, weight, sets, repetitions, rest_time, id_workout) VALUES (${exercises[x].name}, ${exercises[x].weight}, ${exercises[x].sets}, ${exercises[x].repetitions}, ${exercises[x].rest_time}, ${workout[0].id})`
        }

        res.status(200).json({ message: 'Workout created succesfully' })
    }
    catch (err) {
        res.status(400).json({ error: 'oops, something went wrong' })
    }
}

export default createWorkout