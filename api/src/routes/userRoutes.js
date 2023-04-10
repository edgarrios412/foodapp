const {Router} = require("express")
const {createUser, getUserByUsername, getUsers} = require("../controllers/userController")

const userRoutes = Router()

userRoutes.get("/all", async (req, res) => {
    try{
    const Users = await getUsers()
    res.status(200).send(Users)
    }catch(error){
        return res.status(404).send({error:error.message})
    }
})

userRoutes.post("/exist", async(req, res) => {
    const {username, password} = req.body;
    try{
    const user = await getUserByUsername(username, password)
    res.status(200).send(user)
    }catch(error){
        return res.status(404).send({error:error.message})
    }
})

userRoutes.post("/", async (req, res) => {
    const user = req.body;
    try{
    const newUser = await createUser(user)
    res.status(200).send(newUser)
    }catch(error){
        return res.status(404).send({error:error.message})
    }
})

module.exports = userRoutes