import sql from '../database.js'

const updateUserDetails = async (req, res) => {
    const id_user = req.id_user
    console.log(id_user)
    const {d_o_b, weight, height, gender} = req.body
    console.log(d_o_b, weight, height, gender)
    
    try {
        await sql `UPDATE users SET date_of_birth = ${d_o_b}, weight = ${weight}, height = ${height}, gender = ${gender} WHERE id_user = ${id_user}`
        return res.status(200).json({message: 'user details succesfully updated'}) 
    }
    catch (err){
        return res.status(400).json({error: 'oops, something went wrong'})
    }
}

export default updateUserDetails